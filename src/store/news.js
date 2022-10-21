export const News = {
    state: () => ({
        count: 1,
        news: [
            {
                id: '1',
                data: '20 октября 2022',
                title: 'Новые позиции в каталоге',
                description: 'Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем коров, свиней, овец и кур.',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
            {
                id: '2',
                data: '22 октября 2022',
                title: 'рецепты вкусного завтрака',
                description: 'Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым вниманием. ',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews2.webp'
            },
            {
                id: '3',
                data: '20 октября 2022',
                title: 'Новые позиции в каталоге',
                description: 'Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем коров, свиней, овец и кур.',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
            {
                id: '4',
                data: '22 октября 2022',
                title: 'рецепты вкусного завтрака',
                description: 'Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым вниманием. ',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews2.webp'
            },
            {
                id: '5',
                data: '20 октября 2022',
                title: 'Новые позиции в каталоге',
                description: 'Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем коров, свиней, овец и кур.',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
            {
                id: '6',
                data: '22 октября 2022',
                title: 'рецепты вкусного завтрака',
                description: 'Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым вниманием. ',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews2.webp'
            },
            {
                id: '7',
                data: '20 октября 2022',
                title: 'Новые позиции в каталоге',
                description: 'Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем коров, свиней, овец и кур.',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
            {
                id: '8',
                data: '22 октября 2022',
                title: 'рецепты вкусного завтрака',
                description: 'Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым вниманием. ',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews2.webp'
            },
            {
                id: '9',
                data: '20 октября 2022',
                title: 'Новые позиции в каталоге',
                description: 'Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем коров, свиней, овец и кур.',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
            {
                id: '10',
                data: '22 октября 2022',
                title: 'рецепты вкусного завтрака',
                description: 'Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым вниманием. ',
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
        ]
    }),
    mutations: {
        SET_COUNT(state) {
            state.count += 2;
        },
        CLEAR_COUNT(state){
            state.count = 1;
        }
    },
    namespaced: true
}