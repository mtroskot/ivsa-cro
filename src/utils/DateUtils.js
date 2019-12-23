import { weekDays } from 'src/constants/date';
import locales from 'src/constants/localization';

/**
 * Return localized date strings in DD.MM.WeekDay format e.g. 21.07.Monday
 * @param eventsArray
 * @returns {array of localized date strings}
 */
function getLocalizedDate(eventsArray) {
  return eventsArray.map((event, index) => {
    const date = new Date('2019-07-21'); //beginning of congress
    date.setDate(date.getDate() + index);
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const dayInWeek = weekDays[date.getDay()];
    return `${day}.${month}. ${locales[dayInWeek]}`;
  });
}

export default {
  getLocalizedDate
};
