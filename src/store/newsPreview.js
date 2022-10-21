export const NewsPreview = {
    state:()=>({
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
                img: 'https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItems/someNews1.webp'
            },
        ]
    }),
    namespaced: true
}
