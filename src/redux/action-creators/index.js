import { Alert } from 'react-native'
import firebase from '../../services/firebase'
import {
  USER_LOGIN_SUCCESS,
  SET_FIELD
} from '../actions'

const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
})

export const tryLogin = ({ email, password }) => dispatch => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const action = userLoginSuccess(user)
      dispatch(action)
      return user
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        return new Promise((resolve, reject) => {
          Alert.alert(
            'User not found',
            'Do you want to insert a new user?',
            [{
              text: 'No',
              onPress: () => resolve(),
              style: 'cancel' // IOS
            }, {
              text: 'Yes',
              onPress: () => {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(resolve)
                  .catch(reject)
              }
            }],
            { cancelable: false }
          )
        })
      }
      return Promise.reject(error)
    })
}

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value
  }
}

export const saveSerie = serie => {
  const { uid } = firebase
    .auth()
    .currentUser

  const db = firebase
    .database()
    .ref(`/users/${uid}/series`)
}
