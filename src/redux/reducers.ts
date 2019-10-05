import Actions from "./actions.config"

const initialState = {
    user: null,
    anotherKey: "test"
}


export default function root(state = initialState, action: any) {
    switch (action.typv) {
        case Actions.SAVE_USER: {
            return {
                ...state,
                user:"Gan Sela"
            }
        }
        case Actions.GET_MOVIES: {
            return{
                movies: ["batman", "batman2"]
            }
        }
        default: {
            return state
        }
    }

}