import { takeEvery } from 'redux-saga/effects'
import constants from '../constants'


async function loadFolder(action) {
    console.log(action)
}

export default [
    takeEvery(constants.desktop.LOAD_FOLDER, loadFolder)
]