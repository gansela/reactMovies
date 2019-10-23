import Actions from "./actions.config"

export const saveUserAction = (user: any) => {
    return {
        type: Actions.SAVE_USER,
        payload: { user }
    }
}

export const saveNewComment = (comments: any) => {
    return {
        type: Actions.SAVE_COMMENT,
        payload: { comments }
    }
}

// export const addToFavorites = (movie: any) => {
//     return {
//         type: Actions.ADD_MOVIE_TO_FAVORITE,
//         payload: { movie }
//     }
export const addToFavorites = (movie: any) => {
    return (dispatch:any) =>{
        setTimeout( function() {
            dispatch( {
                type: Actions.ADD_MOVIE_TO_FAVORITE,
                payload: { movie }
            })
        }, 10000)
    }

}