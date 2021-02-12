import moment from 'moment';

export class TimeUtil {
  static getUnixTimeForAFutureDay(days: number): number {
    return moment().add(days, 'days').unix();
  }
}
