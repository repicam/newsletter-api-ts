import { User } from '../models/userModel'
import { UserBodyI, UserI } from '../interfaces/user'

const find = async ( filter = {} ): Promise<UserI[]> => {
  return await User.find( filter )
}

const create = async ( data: UserBodyI ): Promise<UserI> => {
  return await User.create( data )
}

export default {
  find, create
}