export enum CronEnum {
  Daily = 'daily',
  Monthly = 'monthly'
}

export enum CronActionEnum {
  Start = 'start',
  Stop = 'stop'
}

export interface CronBodyI {
  cron: string,
  action: string
}