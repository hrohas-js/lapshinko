export const Category = {
    state: () => ({
        PopularCategory: [

            {
                id:'1',
                picture:'https://dreamteam-webdev.ru/lapshinkoServ/png/category/milkProducts.webp',
                miniImg:'https://dreamteam-webdev.ru/lapshinkoServ/png/categoryMob/milkProducts.webp',
                name:'молочная продукция',
                rating:'1'
            },
            {
                id:'2',
                picture:'https://dreamteam-webdev.ru/lapshinkoServ/png/category/meatProducts.webp',
                miniImg:'https://dreamteam-webdev.ru/lapshinkoServ/png/categoryMob/meatProducts.webp',
                name:'мясная продукция',
                rating:'3'
            },
            {
                id:'3',
                picture:'https://dreamteam-webdev.ru/lapshinkoServ/png/category/vegetableProducts.webp',
                miniImg:'https://dreamteam-webdev.ru/lapshinkoServ/png/categoryMob/vegetableProducts.webp',
                name:'овощи',
                rating:'3'
            }
            ,]
    }),
    namespaced: true
}