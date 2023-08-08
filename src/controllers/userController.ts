import { UserBodyI, UserI } from '../interfaces/user'
import userService from '../services/userService'

const createNewUser = async ( userData: UserBodyI ): Promise<UserBodyI> => {
  const { name, email, ...rest } = await userService.createUser( userData )
  return { name, email }
}

const getAllUsers = async (): Promise<UserBodyI[]> => {
  const dataList = await userService.getUsersByFilter()

  return dataList.map( ( user ) => {
    const { name, email, ...rest } = user
    return { name, email }
  } )
}

export default {
  createNewUser, getAllUsers
}

