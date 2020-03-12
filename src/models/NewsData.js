import { StringUtils } from 'src/utils';

export default class NewsData {
  constructor(date, notice, publishedBy) {
    StringUtils.checkIfString(date, notice, publishedBy);
    this.date = date;
    this.notice = notice;
    this.publishedBy = publishedBy;
  }
}
