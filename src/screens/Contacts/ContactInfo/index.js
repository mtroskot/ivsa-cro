import React from 'react';
import { Text } from 'react-native';
import styles from 'src/screens/Contacts/ContactInfo/styles';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';

const ContactInfo = props => {
  const { contact } = props;
  const { name, number } = contact;
  return (
    <Text style={styles.text}>
      {name}
      {'\n'}
      {locales.number}: {number}
    </Text>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })
};

export default React.memo(ContactInfo);
