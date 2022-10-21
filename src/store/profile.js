export const Profile = {
    state:()=>({
        userCurrentAction: 'profile'
    }),
    mutations:{
        SET_USER_CURRENT_ACTION(state,page){
            state.userCurrentAction = page
        }
    },
    namespaced:true
}