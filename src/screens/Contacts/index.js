import React from 'react';
import { FlatList, Linking, View } from 'react-native';
import ContactInfo from 'src/screens/Contacts/ContactInfo';
import ContactButtons from 'src/screens/Contacts/ContactButtons';
import { contactButtons, contacts } from 'src/constants/contacts';
import styles from 'src/screens/Contacts/styles';

const callNumber = num => {
  Linking.openURL(`tel:${num}`);
};
const messageNumber = num => {
  Linking.openURL(`sms:${num}`);
};

const Contacts = () => {
  return (
    <FlatList
      data={contacts}
      renderItem={({ item: contact }) => (
        <View style={styles.container}>
          <ContactInfo contact={contact} />
          <ContactButtons
            contactButtons={contactButtons}
            number={contact.number}
            onCallNumber={callNumber}
            onMessageNumber={messageNumber}
          />
        </View>
      )}
      keyExtractor={item => item.number}
    />
  );
};

export default Contacts;
