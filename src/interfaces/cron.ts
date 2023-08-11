export enum CronEnum {
  Daily = 'daily',
  Monthly = 'monthly'
}

export enum ActionEnum {
  Start = 'start',
  Stop = 'stop'
}

export interface CronBodyI {
  cron: CronEnum,
  action: ActionEnum
}