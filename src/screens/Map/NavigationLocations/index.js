import React from 'react';
import { pointAnnotations } from 'src/constants/map';
import { CustomButton } from 'src/components';
import locales from 'src/constants/localization';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'src/screens/Map/NavigationLocations/styles';

const NavigationLocations = props => {
  const { selectedOption, onNavigateRequest, scrollRef } = props;
  return (
    <View style={styles.locationView}>
      <ScrollView
        ref={scrollRef}
        onContentSizeChange={() => {
          scrollRef.current.scrollTo({ x: 0, y: 0, animated: true }); //scroll to top
        }}>
        {pointAnnotations[selectedOption].map(annotation => (
          <CustomButton
            key={`${selectedOption}${annotation.subIndex}`}
            iconProps={{ name: 'compass' }}
            viewStyle={styles.customButtonView}
            textStyle={styles.customButtonText}
            iconStyle={styles.customButtonIcon}
            text={`${locales.mapNavigateMe} ${annotation.title}`}
            onPress={() => onNavigateRequest(annotation.coordinate)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

NavigationLocations.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onNavigateRequest: PropTypes.func.isRequired,
  scrollRef: PropTypes.shape({ current: PropTypes.any }).isRequired
};

export default React.memo(NavigationLocations);
