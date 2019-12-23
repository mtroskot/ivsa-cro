import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'src/components';
import { tripData } from 'src/constants/trip';
import { NavigationService } from 'src/services';
import styles from 'src/screens/tripStack/TripMenu/styles';
import { screenNames } from 'src/constants/navigation';

const TripDescription = props => (
  <FlatList
    data={tripData}
    renderItem={({ item }) => {
      return (
        <View style={styles.container}>
          <ListItem
            tOpacityStyle={styles.listItemTOpacity}
            textStyle={styles.listItemTextStyle}
            text={item.key}
            imageProps={{ imageSource: item.images[0], imageStyle: styles.listItemImageStyle }}
            onPress={() =>
              NavigationService.navigate(screenNames.TRIP_DETAILS, {
                tripText: item.text,
                images: item.images,
                headerTitle: item.key
              })
            }
          />
        </View>
      );
    }}
  />
);

export default React.memo(TripDescription);
