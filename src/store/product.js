export const Product = {
    state: () => ({
        sliderMain: {
            id: '1',
            img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/slider/GoodsBig.webp',
        },
        sliderSub: [
            {
                id: '2',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/slider/756248931814435.jpg'
            },
            {
                id: '3',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/slider/recept61507n7i.jpg'
            },
            {
                id: '4',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/slider/d3dc3c.jpg'
            }
        ],
        variations: []
    }),
    mutations: {
      SET_VARIATIONS(state, variations) {
          state.variations = []
          variations.forEach(elem => {
              const id = elem.id
              const name = elem.attributes[0].option
              const price = parseInt(elem.price)
              state.variations.push({
                  id: id,
                  name: name,
                  price: price
              })
          })
      }
    },
    actions: {
        async FetchVariations({rootState, commit}, id){
            const response = await rootState.axiosInstance.get(`wc/v3/products/${id}/variations`, {
                headers: {
                    Authorization: `Bearer ${rootState.jwt}`,
                }
            })
            commit('SET_VARIATIONS', response.data);
        }
    },
    namespaced: true
}
