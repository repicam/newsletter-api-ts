import { AdminBodyI, UserBodyI, UserI } from '../interfaces/user'
import userService from '../services/userService'

const createNewUser = async ( userData: UserBodyI ): Promise<UserBodyI> => {
  try {
    return await userService.createUserAndSendMail( userData )
  } catch ( error ) {
    throw error
  }
}

const getAllUsers = async (): Promise<UserBodyI[]> => {
  return await userService.getUsersByFilter()
}

const deleteUser = async ( id: string ): Promise<void> => {
  const user: UserI | null = await userService.getUserById( id )
  if ( !user || user.isAdmin )
    throw 'No se encontró el usuario a eliminar'

  try {
    await userService.deleteUserAndSendMail( id )
  } catch ( error ) {
    throw error
  }
}

const updateUser = async ( id: string, unsubscribe: boolean ): Promise<void> => {
  const user: UserI | null = await userService.getUserById( id )
  if ( !user || user.isAdmin )
    throw 'No se encontró el usuario a modificar'

  try {
    await userService.updateUserAndSendMail( user, unsubscribe )
  } catch ( error ) {
    throw error
  }
}

const createNewAdmin = async ( userData: AdminBodyI ): Promise<void> => {
  try {
    await userService.checkAndCreateAdmin( userData )
  } catch ( error ) {
    throw error
  }
}

export default {
  createNewUser, getAllUsers, deleteUser, updateUser, createNewAdmin
}

