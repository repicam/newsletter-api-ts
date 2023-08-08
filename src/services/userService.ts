import { UserBodyI, UserI } from '../interfaces/user'
import userRespository from '../repositories/userRepository'

const getUsersByFilter = async (filter = {}): Promise<UserI[]> => {
  return await userRespository.find(filter)
}

const createUser = async ( data: UserBodyI ): Promise<UserI> => {
  return userRespository.create( data )
}

export default {
  getUsersByFilter, createUser
}