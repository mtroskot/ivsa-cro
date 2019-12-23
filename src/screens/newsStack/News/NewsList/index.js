import React from 'react';
import { Text, View } from 'react-native';
import EditNewsButtons from 'src/screens/newsStack/News/NewsList/EditNewsButtons';
import PropTypes from 'prop-types';
import styles from 'src/screens/newsStack/News/NewsList/styles';
import { newsPropTypes } from 'src/constants/propTypes';

const NewsList = props => {
  const { pagedNews, isAuthenticated, keyFromNotification, editNews, deleteNewsAlert } = props;
  const newsArray = [];
  Object.keys(pagedNews).forEach(key => {
    const { date, publishedBy, notice } = pagedNews[key];
    newsArray.push(
      <View
        key={key}
        style={[
          styles.noticeView,
          newsArray.length === 0 ? styles.firstNews : null,
          key === keyFromNotification ? styles.highlightedNews : null
        ]}>
        <Text style={styles.author}>{publishedBy}</Text>
        <Text style={styles.contentStyle}>{notice}</Text>
        <Text style={styles.dateStyle}>{date}</Text>
        <EditNewsButtons
          {...{ newsId: key, isAuthenticated, editNews, deleteNewsAlert }}
          isAuthenticated={isAuthenticated}
          editNews={editNews}
          deleteNewsAlert={deleteNewsAlert}
        />
      </View>
    );
  });
  return newsArray;
};

NewsList.propTypes = {
  pagedNews: newsPropTypes.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  keyFromNotification: PropTypes.string,
  editNews: PropTypes.func.isRequired,
  deleteNewsAlert: PropTypes.func.isRequired
};

export default React.memo(NewsList);
