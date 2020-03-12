import React from 'react';
import { Text, View } from 'react-native';
import locales from 'src/constants/localization';
import styles from 'src/screens/newsStack/News/NoNews/styles';

const NoNews = () => {
  return (
    <View style={styles.noNewsView}>
      <Text style={styles.noNewsText}>{locales.noNews}</Text>
    </View>
  );
};

export default React.memo(NoNews);
