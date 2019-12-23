import React from 'react';
import { Linking, ScrollView, View } from 'react-native';
import ContactInfo from 'src/screens/Contacts/ContactInfo';
import ContactButtons from 'src/screens/Contacts/ContactButtons';
import { contacts, contactButtons } from 'src/constants/contacts';
import styles from 'src/screens/Contacts/styles';

const callNumber = num => {
  Linking.openURL(`tel:${num}`);
};
const messageNumber = num => {
  Linking.openURL(`sms:${num}`);
};

const Contacts = props => {
  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <View key={index} style={styles.container}>
          <ContactInfo contact={contact} />
          <ContactButtons
            contactButtons={contactButtons}
            number={contact.number}
            onCallNumber={callNumber}
            onMessageNumber={messageNumber}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Contacts;
