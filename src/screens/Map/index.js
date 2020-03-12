import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Linking, Platform, View } from 'react-native';
import PickerLocations from 'src/screens/Map/PickerLocations';
import NavigationLocations from 'src/screens/Map/NavigationLocations';
import MapView from 'src/screens/Map/MapView';
import Mapbox from '@react-native-mapbox-gl/maps';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import locales from 'src/constants/localization';
import { mapboxToken } from 'src/constants/map';
import styles from 'src/screens/Map/styles';

Mapbox.setAccessToken(mapboxToken);

const MapScreen = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showUserLocation, setShowUserLocation] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    checkPermissions();
  }, [checkPermissions]);

  const checkPermissions = useCallback(async () => {
    try {
      const result = await check(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        })
      );
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
          await requestPermissions();
          console.log('The permission has not been requested / is denied but requestable');
          break;
        case RESULTS.GRANTED:
          setShowUserLocation(true);
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    } catch (error) {
      console.log('checkPermissions error', error);
    }
  }, []);

  const requestPermissions = async () => {
    const response = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      })
    );
    if (response === RESULTS.GRANTED) {
      setShowUserLocation(true);
    } else {
      alert(locales.mapLocationAlert);
    }
  };

  const handlePickerChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const openNavigation = coordinate => {
    const iosUrl = `http://maps.apple.com/maps?daddr=${coordinate[1]},${coordinate[0]}`;
    const androidUrl = `http://maps.google.com/maps?daddr=${coordinate[1]},${coordinate[0]}`;
    const url = Platform.OS === 'android' ? androidUrl : iosUrl;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log(`Can't handle url: ${url}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('Map goToDirections error', err));
  };

  const onNavigateRequest = coordinate => {
    Alert.alert(
      locales.navigation,
      locales.navigationAlert,
      [
        {
          text: locales.cancel,
          style: 'cancel'
        },
        {
          text: locales.confirm,
          onPress: () => openNavigation(coordinate)
        }
      ],
      { cancelable: true }
    );
  };
  //RENDER
  return (
    <View style={styles.container}>
      <MapView {...{ showUserLocation, selectedOption }} />
      <View style={styles.pickerLocationView}>
        <PickerLocations {...{ selectedOption, handlePickerChange, onNavigateRequest }} />
        <NavigationLocations {...{ selectedOption, onNavigateRequest, scrollRef }} />
      </View>
    </View>
  );
};

export default MapScreen;
