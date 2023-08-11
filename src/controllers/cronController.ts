import { ActionEnum, CronBodyI } from '../interfaces/cron'
import { activateCronByString, stopCronByString } from '../services/cronService'

const modifyCron = ( cronBody: CronBodyI ) => {
  switch ( cronBody.action ) {
    case ActionEnum.Start:
      activateCronByString( cronBody.cron )
      break
    case ActionEnum.Stop:
      stopCronByString( cronBody.cron )
      break
    default:
      break
  }
}



export default {
  modifyCron
}

