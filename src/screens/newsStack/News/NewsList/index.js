import React from 'react';
import { Text, View } from 'react-native';
import EditNewsButtons from 'src/screens/newsStack/News/NewsList/EditNewsButtons';
import PropTypes from 'prop-types';
import { newsPropTypes } from 'src/constants/propTypes';
import styles from 'src/screens/newsStack/News/NewsList/styles';

const NewsList = props => {
  const { pagedNews, isAuthenticated, deletingNewsId, newsIdFromNotification, editNews, deleteNewsAlert } = props;
  return Object.keys(pagedNews).map((key, index) => {
    const { date, publishedBy, notice } = pagedNews[key];
    return (
      <View
        key={key}
        style={[
          styles.noticeView,
          index.length === 0 ? styles.firstNews : null,
          key === newsIdFromNotification ? styles.highlightedNews : null
        ]}>
        <View style={styles.newsText}>
          <Text style={styles.author}>{publishedBy}</Text>
          <Text style={styles.contentStyle}>{notice}</Text>
          <Text style={styles.dateStyle}>{date}</Text>
        </View>
        <EditNewsButtons {...{ newsId: key, isAuthenticated, deletingNewsId, editNews, deleteNewsAlert }} />
      </View>
    );
  });
};

NewsList.propTypes = {
  pagedNews: PropTypes.objectOf(newsPropTypes).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  deletingNewsId: PropTypes.string,
  newsIdFromNotification: PropTypes.string,
  editNews: PropTypes.func.isRequired,
  deleteNewsAlert: PropTypes.func.isRequired
};

export default React.memo(NewsList);
