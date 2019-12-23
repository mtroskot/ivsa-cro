import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from 'src/components/PagingButtons/styles';

/**
 * Function to generate button pattern e.g [<,1,2,3,4,5,6-10,>],[<,1-5,6,7,8,9,10,>]
 * @param totalPages
 * @param pageNumber
 * @param first
 * @param last
 * @param onPress
 * @param maxNumberButtons How many buttons which will contain page number we want to display
 * @returns {null|Array<CustomButton>}
 */
function generatePagingButtons(totalPages, pageNumber, first, last, onPress, maxNumberButtons) {
  const array = [];
  if (totalPages <= 1) {
    return null;
  }
  if (!first) {
    const text = '<';
    array.push(
      <CustomButton
        key={text}
        onPress={() => onPress(pageNumber - 1)}
        tOpacityStyle={styles.customButton}
        text={text}
      />
    );
  }
  // how many times have we passed maxNumberButtons+1 count,e.g pageNum=6 maxNumberButtons=5 sequence=2
  // indicates on which sequence we are,eg. 1,2,3,4,5 or 6,7,8,9,10 etc.
  const sequenceCount = Math.floor(pageNumber / maxNumberButtons) + 1;
  const countOfButtons = maxNumberButtons * sequenceCount;
  const distanceToLastPage = totalPages - countOfButtons;
  const buttonsToGenerate = distanceToLastPage >= 0 ? maxNumberButtons : totalPages - countOfButtons + maxNumberButtons;
  //e.g pageNum=5, maxNum=5, value of button will be [1-5]
  if (pageNumber >= maxNumberButtons) {
    //                      10-(2*5)+1=1                                        10-5=5
    const text = '' + (countOfButtons - 2 * maxNumberButtons + 1) + '-' + (countOfButtons - maxNumberButtons);
    array.push(
      <CustomButton
        key={text}
        onPress={() => onPress(countOfButtons - maxNumberButtons - 1)}
        tOpacityStyle={styles.customButton}
        text={text}
      />
    );
  }
  for (let i = 0; i < buttonsToGenerate; i++) {
    const page = i + 1 + maxNumberButtons * Math.floor(pageNumber / maxNumberButtons);
    const buttonColor = pageNumber === page - 1 ? '#bababa' : '#f4f4f4';
    array.push(
      <CustomButton
        key={'' + page}
        onPress={() => onPress(page - 1)}
        tOpacityStyle={[styles.customButton, { backgroundColor: buttonColor }]}
        text={'' + page}
      />
    );
  }
  //e.g value of button will be [6-10]
  if (distanceToLastPage >= maxNumberButtons) {
    const text = '' + (countOfButtons + 1) + '-' + (countOfButtons + maxNumberButtons);
    array.push(
      <CustomButton
        key={text}
        onPress={() => onPress(countOfButtons)}
        tOpacityStyle={styles.customButton}
        text={text}
      />
    );
  }
  if (!last) {
    const text = '>';
    array.push(
      <CustomButton
        key={text}
        onPress={() => onPress(pageNumber + 1)}
        tOpacityStyle={styles.customButton}
        text={text}
      />
    );
  }
  return array;
}

const PagingButtons = props => {
  const { totalPages, pageNumber, first, last, onPress, maxNumberButtons } = props;
  return (
    <View style={styles.bottomPositionView}>
      <View style={styles.paginationView}>
        {generatePagingButtons(totalPages, pageNumber, first, last, onPress, maxNumberButtons)}
      </View>
    </View>
  );
};

PagingButtons.propTypes = {
  totalPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  maxNumberButtons: PropTypes.number
};

PagingButtons.defaultProps = {
  maxNumberButtons: 5
};

export default React.memo(PagingButtons);
