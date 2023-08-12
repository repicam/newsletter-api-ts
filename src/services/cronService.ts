import cron from 'node-cron'
import { UserBodyI } from '../interfaces/user'
import userService from './userService'
import { CronEnum } from '../interfaces/cron'
import emailService from './emailService'
import { EmailI } from '../interfaces/email'

export const cronReactivateUser = cron.schedule( '0 17 1 * *', async () => {
  console.log( 'cronReactivateUser' )
  const userList: UserBodyI[] = await userService.getUsersByFilter( { isActive: false } )

  if ( userList.length > 0 ) {
    userList.forEach( async ( user ) => {
      await emailService.reactivateUserEmail( user )
    } )
  } else {
    const reactivateEmail: EmailI = {
      to: process.env.EMAIL_ACCOUNT!,
      subject: 'ENHORABUENA',
      html: 'No tienes usuarios inactivos'
    }
    emailService.sendEmail( reactivateEmail )
  }
} )

export const cronDailyNewsletter = cron.schedule( '0 20 * * *', async () => {
  //filtrar la newsletter por el dia, usando el campo del date seteando horas a 0:00 y a 23:59
  //si hay mas de uno, enviar aviso al admin por correo para que las reagende por si deben seguir orden
  //y que fuerce el envio con un endpoint específico
  console.log( 'cronDailyNewsletter' )

  const userList: UserBodyI[] = await userService.getUsersByFilter( { isActive: true } )

  if ( userList.length > 0 ) {
    userList.forEach( user => {
      const subject = 'HELLO WORLD'
      const html = '<strong>_NAME_\'S LOVES WORLD<strong>'
      const emailDto: EmailI = {
        to: user.email,
        subject,
        html: html.replace( '_NAME_', user.name )
      }
      emailService.sendEmail( emailDto )
    } )
  } else {
    const day: Date = new Date()
    const dailyEmail: EmailI = {
      to: process.env.EMAIL_ACCOUNT!,
      subject: `Newsletter no enviada ${ day.getDay() }/${ day.getMonth() }/${ day.getFullYear() }`,
      html: 'No tienes usuarios activos'
    }
    emailService.sendEmail( dailyEmail )
  }
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