import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { CustomButton } from 'src/components';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';
import styles from 'src/screens/newsStack/News/NewsList/EditNewsButtons/styles';
import { deleteIconProps, editIconProps } from 'src/constants/news';

function renderDeleteButton(deletingNewsId, deleteNewsAlert, newsId) {
  if (deletingNewsId === newsId) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <CustomButton
      iconProps={deleteIconProps}
      text={locales.delete}
      onPress={() => deleteNewsAlert(newsId)}
      viewStyle={styles.buttonView}
      textStyle={styles.buttonText}
      iconStyle={styles.icon}
    />
  );
}

const EditNewsButtons = props => {
  const { newsId, isAuthenticated, deletingNewsId, editNews, deleteNewsAlert } = props;
  if (isAuthenticated) {
    return (
      <View style={styles.authUserButtonsView}>
        {renderDeleteButton(deletingNewsId, deleteNewsAlert, newsId)}
        <CustomButton
          iconProps={editIconProps}
          text={locales.edit}
          onPress={() => editNews(newsId)}
          viewStyle={[styles.buttonView, { backgroundColor: '#54bdff' }]}
          textStyle={styles.buttonText}
          iconStyle={styles.icon}
        />
      </View>
    );
  }
  return null;
};

EditNewsButtons.propTypes = {
  newsId: PropTypes.string.isRequired,
  deletingNewsId: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  editNews: PropTypes.func.isRequired,
  deleteNewsAlert: PropTypes.func.isRequired
};

export default React.memo(EditNewsButtons);
