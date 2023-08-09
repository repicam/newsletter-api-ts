import { UserBodyI, UserI } from '../interfaces/user'
import userRespository from '../repositories/userRepository'

const getUsersByFilter = async ( filter = {} ): Promise<UserBodyI[]> => {
  const dataList = await userRespository.find( filter )
  return dataList.map( ( user ) => {
    const { name, email, ...rest } = user
    return { name, email }
  } )
}

const createUserAndSendMail = async ( data: UserBodyI ): Promise<UserBodyI> => {
  const { name, email, ...rest } = await createUser( data )
  //enviar mail de bienvenida
  return { name, email }
}

const createUser = async ( data: UserBodyI ): Promise<UserI> => {
  return await userRespository.create( data )
}

const deleteUserAndSendMail = async ( id: string ): Promise<void> => {
  const isUserDeleted: boolean = await deleteUserById( id )
  if ( !isUserDeleted )
    throw 'Ha habido un problema borrando el usuario'

  //enviar mail de confirmacion
}

const deleteUserById = async ( id: string ): Promise<boolean> => {
  const deletedUser = await userRespository.deleteById( id )
  return !!deletedUser
}

const getUserById = async ( id: string ): Promise<UserI | null> => {
  const user = await userRespository.findById( id )
  return user
}

const updateUserAndSendMail = async ( user: UserI, unsubscribe: boolean ): Promise<void> => {
  user.isActive = !unsubscribe
  const userUpdated: UserI | null = await updateUserById( user )

  if ( !userUpdated )
    throw 'Ha habido un problema modificando el usuario'

  //enviar mail de confirmacion cambio
}

const updateUserById = async ( user: UserI ): Promise<UserI | null> => {
  const updatedUser = await userRespository.updateById( user )
  return updatedUser
}

export default {
  getUsersByFilter, createUserAndSendMail, deleteUserAndSendMail, getUserById, updateUserAndSendMail
}