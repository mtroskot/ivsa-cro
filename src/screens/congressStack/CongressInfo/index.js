import React from 'react';
import { FlatList } from 'react-native';
import CongressInfoRow from 'src/screens/congressStack/CongressInfo/CongressInfoRow';
import styles from 'src/screens/congressStack/CongressInfo/styles';

const CongressInfo = props => {
  const { data } = props.navigation.state.params;
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <CongressInfoRow congressSchedule={item} />}
      style={styles.container}
    />
  );
};

CongressInfo.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('headerTitle')
});

export default CongressInfo;
