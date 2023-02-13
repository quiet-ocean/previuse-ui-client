import moment from 'moment';

class DateUtils {
  getFormattedDate(isoString: string) {
    return moment(isoString).format('MM/DD/YYYY HH:MM P');
  }
}

export default new DateUtils();
