import React from 'react';
import { View } from 'react-native';
import { CustomButton } from 'src/components';
import { NavigationService } from 'src/services';
import { screenNames } from 'src/constants/navigation';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';
import styles from 'src/screens/newsStack/News/AddNewsButton/styles';

const AddNewsButton = props => {
  const { isAuthenticated } = props;
  if (isAuthenticated) {
    return (
      <View style={styles.addNewsButtonView}>
        <CustomButton
          text={locales.newNotice}
          onPress={() => NavigationService.navigate(screenNames.NEWS_PUBLISH)}
          viewStyle={styles.addNewsButton}
          textStyle={styles.addNewsButtonText}
        />
      </View>
    );
  }
  return null;
};

AddNewsButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default React.memo(AddNewsButton);
