import React from 'react';
import { Image } from 'react-native';
import styles from 'src/screens/tripStack/TripDetails/TripDetailsImages/styles';
import PropTypes from 'prop-types';

const TripDetailsImages = ({ images }) => {
  /*image is a number returned from function require(path to image) */
  return images.map(image => <Image key={image} style={styles.image} source={image} />);
};

TripDetailsImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default React.memo(TripDetailsImages);
