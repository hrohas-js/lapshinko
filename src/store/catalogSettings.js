export const catalogSettings = {
    state: () => ({
            eat: [
                {
                    id: '1',
                    name: 'Азу'
                },
                {
                    id: '2',
                    name: 'Антрекот'
                },
                {
                    id: '3',
                    name: 'Болык'
                },
                {
                    id: '4',
                    name: 'Говядина'
                },
                {
                    id: '5',
                    name: 'Колбоса'
                }, {
                    id: '6',
                    name: 'Купаты'
                },
                {
                    id: '7',
                    name: 'Паштет'
                },
                {
                    id: '8',
                    name: 'Сало'
                },
                {
                    id: '9',
                    name: 'Грудинка'
                },
                {
                    id: '10',
                    name: 'Горячего копчения'
                },
                {
                    id: '11',
                    name: 'Конина'
                },
            ],
            sortParams: ''
        }
    ), mutations: {
        SЕT_PARAMS(state,param){
           state.sortParams = param
            console.log(state.sortParams);
        }
    },
    namespaced: true
}