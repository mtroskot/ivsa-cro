import React from 'react';
import { View } from 'react-native';
import { CustomButton } from 'src/components';
import { icons } from 'src/constants/icons';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';
import styles from 'src/screens/newsStack/News/NewsList/EditNewsButtons/styles';

const EditNewsButtons = props => {
  const { newsId, isAuthenticated, editNews, deleteNewsAlert } = props;
  if (isAuthenticated) {
    return (
      <View style={styles.authUserButtonsView}>
        <CustomButton
          iconProps={{ name: icons.TRASH, color: '#fff', size: 30 }}
          text={locales.delete}
          onPress={() => deleteNewsAlert(newsId)}
          viewStyle={styles.buttonView}
          textStyle={styles.buttonText}
          iconStyle={styles.icon}
        />
        <CustomButton
          iconProps={{ name: icons.CREATE, color: '#fff' }}
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
  isAuthenticated: PropTypes.bool.isRequired,
  editNews: PropTypes.func.isRequired,
  deleteNewsAlert: PropTypes.func.isRequired
};

export default React.memo(EditNewsButtons);
