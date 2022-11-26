export const Profile = {
    state: () => ({
        user: sessionStorage.getItem('user') != null ? JSON.parse(sessionStorage.getItem('user')) : {},
        userCurrentAction: 'profile',
        ordersMobile: [
            {
                id: 'ZK-271221',
                data: '15/12/22',
                count: '24 590',
                status: 'Одобрен',
                comment: 'комментарий'
            },
            {
                id: 'ZK-271222',
                data: '15/12/22',
                count: '24 590',
                status: 'Одобрен',
                comment: 'комментарий'
            },
            {
                id: 'ZK-271223',
                data: '15/12/22',
                count: '24 590',
                status: 'Одобрен',
                comment: 'комментарий'
            },
            {
                id: 'ZK-271224',
                data: '15/12/22',
                count: '24 590',
                status: 'Одобрен',
                comment: 'комментарий'
            },
        ],
        showInfoOrder: false,
        showRegistration: false,
    }),
    getters: {
        isUserExist(state) {
            return Object.keys(state.user).length > 0;
        },
        userName(state, getters) {
            if (getters.isUserExist) {
                return state.user.meta.name[0] + ' ' + state.user.meta.surname[0];
            }
            else {
                return '';
            }
        },
        fullUserName(state, getters) {
            if (getters.isUserExist) {
                let father_name = '';
                if (state.user.meta.father_name.length > 0) {
                    father_name = state.user.meta.father_name[0];
                }
                return state.user.meta.surname[0] + ' ' + state.user.meta.name[0] + ' ' + father_name;
            }
            else {
                return '';
            }
        },
        userStatus(state, getters) {
            if (getters.isUserExist && state.user.meta.user_status.length > 0) {
                return state.user.meta.user_status[0];
            }
            else {
                return ''
            }
        }
    },
    mutations: {
        SET_USER_CURRENT_ACTION(state, page) {
            state.userCurrentAction = page;
        },
        SET_SHOW_INFO_ORDER(state, boolean) {
            state.showInfoOrder = boolean;
        },
        SET_SHOW_REGISTRATION(state, boolean) {
            state.showRegistration = boolean;
        },
        SET_USER(state, user) {
            state.user = user;
            console.log(state.user)
        }
    },
    actions: {
        async getCurrentUser({rootState, commit, dispatch}, id) {
            const response = await rootState.axiosInstance.get('wp/v2/users/' + id, {
                headers: {
                    Authorization: `Bearer ${rootState.jwt}`,
                }
            })
            commit('SET_USER', response.data);
            sessionStorage.setItem('user',JSON.stringify(response.data));
            if (rootState.cart.length > 0 && localStorage.getItem('cart_' + response.data.name) === null) {
                sessionStorage.removeItem('cart')
                localStorage.setItem('cart_' + response.data.name, JSON.stringify(rootState.cart))
            } else if (localStorage.getItem('cart_' + response.data.name) !== null) {
                dispatch('cart/setCart', null, {root: true})
            }
        },
        async Registration({rootState, commit}, registration) {
            const username = registration.email.split('@')[0];
            const response = await rootState.axiosInstance.post('wp/v2/users', {
                username: username,
                name: username,
                email: registration.email,
                nickname: username,
                password: registration.password,
                roles: 'administrator',
                meta: {
                    name: registration.name,
                    surname: registration.surname
                }
            },{
                headers: {
                    Authorization: `Bearer ${rootState.jwt}`,
                }
            })
            if (response.status === 201) {
                commit('SET_STATUS_TEXT', 'Регистрация прошла успешно', {root:true});
                commit('SHOWED_STATUS', null, {root:true});
            } else {
                commit('SET_STATUS_TEXT', 'Извините, аккаунт с таким адресом уже существует', {root:true});
                commit('SHOWED_STATUS', null, {root:true});
            }
        },
        async Login({rootState, commit, dispatch}, login) {
            const response = await rootState.axiosInstance.post('wp/v2/login', {
                username: login.email,
                password: login.password
            })
            if (response.status === 200 && response.data !== 'error') {
                dispatch('getCurrentUser', response.data.data.ID);
                dispatch('FetchAuthToken', {
                    username: login.email,
                    password: login.password
                }, {
                    root: true
                });
                commit('SET_SHOW_REGISTRATION', false);
                commit('SET_STATUS_TEXT', 'Авторизация прошла успешно', {root: true});
                commit('SHOWED_STATUS', null, {root: true});
            }
            else {
                commit('SET_STATUS_TEXT', 'Неправильный логин/пароль!', {root: true});
                commit('SHOWED_STATUS', null, {root: true});
            }
        },
        async updateUser({state, rootState, commit}, fields) {
            const response = await rootState.axiosInstance.post('wp/v2/users/' + state.user.id, fields,{
                headers: {
                    Authorization: `Bearer ${rootState.jwt}`,
                }
            })
            commit('SET_USER', response.data);
            sessionStorage.setItem('user',JSON.stringify(response.data));
        },
        async uploadPhoto({rootState, dispatch}, photo) {
            let formData = new FormData();
            formData.append('image', photo[0])
            const response = await rootState.axiosInstance.post('wp/v2/upload-photo', formData)
            dispatch('updateUser', {
                meta: {
                    avatar_url: response.data.url
                }
            })
        }
    },
    namespaced: true
}
