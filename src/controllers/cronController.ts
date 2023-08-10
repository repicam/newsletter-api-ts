import { CronActionEnum, CronBodyI } from '../interfaces/cron'
import { activateCronByString, stopCronByString } from '../services/cronService'

const modifyCron = ( cronBody: CronBodyI ) => {
  switch ( cronBody.action ) {
    case CronActionEnum.Start:
      activateCronByString( cronBody.cron )
      break
    case CronActionEnum.Stop:
      stopCronByString( cronBody.cron )
      break
    default:
      break
  }
}



export default {
  modifyCron
}

