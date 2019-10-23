import Actions from "./actions.config"

const initialState = {
    user: null,
    anotherKey: "test",
    comments: "",
    favoritesList: []
}


export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SAVE_USER: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case Actions.GET_MOVIES: {
            return{
                movies: ["batman", "batman2"]
            }
        }
        case Actions.SAVE_COMMENT: {
            return{
                ...state,
                comments:  action.payload.comments 
            }
        }
        case Actions.ADD_MOVIE_TO_FAVORITE: {
            const {favoritesList} = state
            const { movie } = action.payload
            console.log( movie )
            return{
                ...state,
                favoritesList:  [...favoritesList, movie]
            }
        }
        default: {
            return state
        }
    }

}