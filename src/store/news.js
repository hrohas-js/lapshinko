export const News = {
    state: () => ({
        count: 1,
        news: [],
        currentNews: localStorage.getItem('currentNews') !== null ? JSON.parse(localStorage.getItem('currentNews')) : {},
        prevNews: localStorage.getItem('prevNews') !== null ? JSON.parse(localStorage.getItem('prevNews')) : {},
        nextNews: localStorage.getItem('nextNews') !== null ? JSON.parse(localStorage.getItem('nextNews')) : {}
    }),
    getters: {
        previewNews: state => {
            if (state.news.length > 0) {
                return state.news.slice(0, 2)
            } else {
                return []
            }
        }
    },
    mutations: {
        SET_COUNT(state) {
            state.count += 2;
        },
        CLEAR_COUNT(state){
            state.count = 1;
        },
        SET_NEWS(state, news) {
            state.news = news.reverse()
        },
        SET_NEWS_PHOTO(state, photoData) {
            state.news.forEach(elem => {
                if (elem.id === photoData.id) {
                    elem.image = photoData.src
                }
            })
        },
        SET_CURRENT_NEWS(state, id) {
            for (let i = 0; i < state.news.length; i++) {
                if(state.news[i].id === id) {
                    state.currentNews = state.news[i]
                    if(i !== 0) {
                        state.prevNews = state.news[i - 1]
                    } else {
                        state.prevNews = {}
                    }
                    if(i !== state.news.length - 1) {
                        state.nextNews = state.news[i + 1]
                    } else {
                        state.nextNews = {}
                    }
                }
            }
            localStorage.setItem('currentNews', JSON.stringify(state.currentNews))
            localStorage.setItem('prevNews', JSON.stringify(state.prevNews))
            localStorage.setItem('nextNews', JSON.stringify(state.nextNews))
        }
    },
    actions: {
        async fetchNewsPhoto({rootState, commit}, id) {
            const response = await rootState.axiosInstance.post('wp/v2/give-news-photo', {
                id: id
            })
            let div = document.createElement('div')
            div.innerHTML = response.data
            const src = div.firstChild.getAttribute('src')
            commit('SET_NEWS_PHOTO', {
                id: id,
                src: src
            })
        },
        async fetchNews({rootState, state, commit, dispatch}) {
            const response = await rootState.axiosInstance.get('wp/v2/posts', {
                per_page: 100
            })

            commit('SET_NEWS', response.data)
            state.news.forEach(elem => {
                dispatch('fetchNewsPhoto', elem.id)
            })
        }
    },
    namespaced: true
}
