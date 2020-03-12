import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'src/components';
import { NavigationService } from 'src/services';
import { DateUtils } from 'src/utils';
import { congressPlan } from 'src/constants/congress';
import { screenNames } from 'src/constants/navigation';
import styles from 'src/screens/congressStack/Congress/styles';

const Congress = () => {
  const dateInfo = DateUtils.getLocalizedDate(congressPlan);
  return (
    <FlatList
      data={congressPlan}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.container}>
            <ListItem
              tOpacityStyle={styles.listItemTOpacity}
              textStyle={styles.listItemTextStyle}
              onPress={() =>
                NavigationService.navigate(screenNames.CONGRESS_INFO, {
                  data: item,
                  headerTitle: dateInfo[index]
                })
              }
              text={dateInfo[index]}
            />
          </View>
        );
      }}
    />
  );
};

export default Congress;
