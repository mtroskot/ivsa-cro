import React from 'react';
import { View } from 'react-native';
import CongressInfoRow from 'src/screens/congressStack/CongressInfo/CongressInfoRow';
import styles from 'src/screens/congressStack/CongressInfo/styles';

const CongressInfo = props => {
  const { data } = props.navigation.state.params;
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return <CongressInfoRow key={index} congressSchedule={item} />;
      })}
    </View>
  );
};

CongressInfo.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('headerTitle')
});

export default CongressInfo;
