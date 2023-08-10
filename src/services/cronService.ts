import cron from 'node-cron'
import { UserBodyI } from '../interfaces/user'
import userService from './userService'
import { CronEnum } from '../interfaces/cron'

export const cronReactivateUser = cron.schedule( '0 17 1 * *', async () => {
  const userList: UserBodyI[] = await userService.getUsersByFilter( { isActive: false } )

  userList.forEach( user => {
    //enviar correo para reactivar o en caso contrario dar de baja
  } )
} )

export const cronDailyNewsletter = cron.schedule( '0 20 * * *', async () => {
  //filtrar la newsletter por el dia, usando el campo del date seteando horas a 0:00 y a 23:59
  //si hay mas de uno, enviar aviso al admin por correo para que las reagende por si deben seguir orden
  //y que fuerce el envio con un endpoint específico

  const userList: UserBodyI[] = await userService.getUsersByFilter( { isActive: true } )

  userList.forEach( user => {
    //enviar correo del dia
  } )
} )

export const activateCronByString = ( cron: string ) => {
  switch ( cron ) {
    case CronEnum.Daily:
      cronDailyNewsletter.start()
      break
    case CronEnum.Monthly:
      cronReactivateUser.start()
      break
    default:
      break
  }

}

export const stopCronByString = ( cron: string ) => {
  switch ( cron ) {
    case CronEnum.Daily:
      cronDailyNewsletter.stop()
      break
    case CronEnum.Monthly:
      cronReactivateUser.stop()
      break
    default:
      break
  }
}