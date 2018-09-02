import constants from '../constants'

export default (state={}, action) => {
    switch(action.type) {
        case constants.desktop.LOAD_FOLDER:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}