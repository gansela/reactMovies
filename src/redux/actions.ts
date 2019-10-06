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