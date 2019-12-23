import React from 'react';
import { View } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import { pointAnnotations } from 'src/constants/map';
import PropTypes from 'prop-types';
import styles from 'src/screens/Map/MapView/styles';
import mapStyles from 'src/screens/Map/styles';

const generateAnnotations = selectedOption => {
  return pointAnnotations[selectedOption].map(annotation => {
    const key = '' + selectedOption + annotation.subIndex;
    return (
      <Mapbox.PointAnnotation key={key} id={key} coordinate={annotation.coordinate}>
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title={annotation.title} />
      </Mapbox.PointAnnotation>
    );
  });
};

const MapView = props => {
  const { selectedOption, showUserLocation } = props;

  return (
    <Mapbox.MapView logoEnabled={false} styleURL={Mapbox.StyleURL.Street} style={mapStyles.mapContainer}>
      <Mapbox.UserLocation visible={showUserLocation} />
      <Mapbox.Camera zoomLevel={10.5} centerCoordinate={[15.967, 45.801]} />
      {generateAnnotations(selectedOption)}
    </Mapbox.MapView>
  );
};

MapView.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  showUserLocation: PropTypes.bool.isRequired
};

export default React.memo(MapView);
