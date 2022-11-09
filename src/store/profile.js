export const Profile = {
    state: () => ({
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
    mutations: {
        SET_USER_CURRENT_ACTION(state, page) {
            state.userCurrentAction = page;
        },
        SET_SHOW_INFO_ORDER(state, boolean) {
            state.showInfoOrder = boolean;
        },
        SET_SHOW_REGISTRATION(state, boolean) {
            state.showRegistration = boolean;
        }
    },
    namespaced: true
}