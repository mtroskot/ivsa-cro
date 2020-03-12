import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from 'src/components/PagingButtons/styles';
import { AppUtils } from 'src/utils';

const PagingButtons = props => {
  const { pagingButtons, currentPage, onPress } = props;
  return (
    <View style={styles.bottomPositionView}>
      <View style={styles.paginationView}>
        {pagingButtons.map(button => {
          const { onButtonPress, isCurrentPage } = AppUtils.calculatePagingButtonsProps(button, currentPage, onPress);
          return (
            <CustomButton
              key={button}
              onPress={onButtonPress}
              tOpacityStyle={[styles.customButton, isCurrentPage ? styles.buttonSelected : styles.buttonUnselected]}
              text={button}
            />
          );
        })}
      </View>
    </View>
  );
};

PagingButtons.propTypes = {
  pagingButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPage: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};

export default React.memo(PagingButtons);
