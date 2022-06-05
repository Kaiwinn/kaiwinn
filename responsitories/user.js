import axios from 'axios'
const SEVER_NAME = 'randomuser.me'
const urlgetUserDetail = `https://${SEVER_NAME}/api`
const getUserDetail = async () => {
  try {
    let response = await axios.get(urlgetUserDetail)
    if (response.status != 200) {
      throw 'Error Request'
    } else if (response.data.results.length > 0) {
      let responseUser = response.data.results[0]
      let user = {}
      user.dateOfBirth = new Date(response.data.results[0].dob.date)
      user.email = responseUser.email
      user.gender = responseUser.gender ?? 'male' // default value
      user.userId = `${responseUser.id.name}${responseUser.id.value}`
      user.address = `${responseUser.location.street.name}, ${responseUser.location.state}`
      user.userName = responseUser.login.username
      user.url = responseUser.picture.large
      user.phone = responseUser.phone ?? ''
      user.registerDate = new Date(responseUser.registered.date)
      return user
    }
    throw 'User not found'
  } catch (error) {
    throw error
  }
}
const login = ({ email, password }) => {}

export default {
  getUserDetail,
  login,
}
