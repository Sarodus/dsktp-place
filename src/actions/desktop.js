import constants from '../constants'

export const loadFolder = folder => ({
    type: constants.desktop.LOAD_FOLDER,
    folder
})
