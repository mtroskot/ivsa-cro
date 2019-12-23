import React from 'react';
import { View } from 'react-native';
import { CustomButton } from 'src/components';
import PropTypes from 'prop-types';
import { iconPropTypes } from 'src/constants/propTypes';
import styles from 'src/screens/Contacts/ContactButtons/styles';

const getOnPressFunction = (func, number, onCallNumber, onMessageNumber) => {
  switch (func) {
    case 'call':
      return () => onCallNumber(number);
    case 'message':
      return () => onMessageNumber(number);
  }
};

const ContactButtons = props => {
  const { contactButtons, number, onCallNumber, onMessageNumber } = props;

  return (
    <View style={styles.buttonsInline}>
      {contactButtons.map(contactButton => {
        const { buttonId, func, iconProps } = contactButton;
        return (
          <CustomButton
            key={buttonId}
            iconStyle={styles.customButtonIconStyle}
            iconProps={iconProps}
            onPress={getOnPressFunction(func, number, onCallNumber, onMessageNumber)}
          />
        );
      })}
    </View>
  );
};

ContactButtons.propTypes = {
  contactButtons: PropTypes.arrayOf(
    PropTypes.exact({
      buttonId: PropTypes.number.isRequired,
      func: PropTypes.string.isRequired,
      iconProps: iconPropTypes.isRequired
    })
  ).isRequired,
  number: PropTypes.string.isRequired,
  onCallNumber: PropTypes.func.isRequired,
  onMessageNumber: PropTypes.func.isRequired
};

export default React.memo(ContactButtons);
