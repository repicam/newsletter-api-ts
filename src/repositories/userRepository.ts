import { User } from '../models/userModel'
import { UserBodyI, UserI } from '../interfaces/user'

const find = async ( filter = {} ): Promise<UserI[]> => {
  return await User.find( filter )
}

const create = async ( data: UserBodyI ): Promise<UserI> => {
  return await User.create( data )
}

const deleteById = async ( id: string ): Promise<UserI | null> => {
  return await User.findByIdAndDelete( id )
}

const findById = async ( id: string ): Promise<UserI | null> => {
  return await User.findById( id )
}

const updateById = async ( data: UserI ): Promise<UserI | null> => {
  return await User.findByIdAndUpdate( data._id, data )
}

export default {
  find, create, deleteById, findById, updateById
}