import { Platform } from 'react-native';

/**
 * Returns the prefix, based on platform, needed for icon
 * @param iconName String
 * @returns {String}
 */
function getIconForPlatform(iconName) {
  const prefix = Platform.OS === 'android' ? 'md-' : 'ios-';
  return prefix + iconName;
}

/**
 * Calculates pagination
 * @param totalEntries Number
 * @param entriesPerPage Number
 * @param currentPage Number
 * @returns {{pageNumber: number, last: boolean, totalPages: number, first: boolean}}
 */
function calculatePagination(totalEntries, entriesPerPage, currentPage) {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const first = currentPage === 0;
  const last = currentPage + 1 === totalPages;
  return {
    first,
    last,
    currentPage,
    totalPages
  };
}

/**
 * Calculates paging buttons.
 * @param totalPages Number
 * @param currPage Number The value of current page, range from 0 to totalPages-1
 * @param maxNumberOfButtons Number The number of buttons that will be generated, buttons [<] [>] [m-n] no counted
 * @returns {[]}
 */
function calculatePagingButtons(totalPages, currPage, maxNumberOfButtons = 5) {
  const array = [];
  const currentPage = currPage < 0 ? 0 : currPage > totalPages ? totalPages - 1 : currPage;
  const firstPage = currentPage === 0;
  const lastPage = currentPage >= totalPages - 1;
  if (totalPages <= 1) {
    return array;
  }
  if (!firstPage) {
    const text = '<';
    array.push(text);
  }
  // how many times have we passed maxNumberOfButtons+1 count,e.g pageNum=6 maxNumberOfButtons=5 sequence=2
  // indicates on which sequence we are,eg. 1,2,3,4,5 or 6,7,8,9,10 etc.
  const sequenceCount = Math.floor(currentPage / maxNumberOfButtons) + 1;
  const countOfButtons = maxNumberOfButtons * sequenceCount;
  const distanceToLastPage = totalPages - countOfButtons;
  const buttonsToGenerate =
    distanceToLastPage >= 0 ? maxNumberOfButtons : totalPages - countOfButtons + maxNumberOfButtons;
  //e.g currentPage=5, maxNumberOfButtons=5, value of button will be [1-5]
  if (currentPage >= maxNumberOfButtons) {
    //                      10-(2*5)+1=1                                        10-5=5
    const text = `${countOfButtons - 2 * maxNumberOfButtons + 1}-${countOfButtons - maxNumberOfButtons}`;
    array.push(text);
  }
  for (let i = 0; i < buttonsToGenerate; i++) {
    const page = i + 1 + maxNumberOfButtons * Math.floor(currentPage / maxNumberOfButtons);
    array.push('' + page);
  }
  //e.g value of button will be [6-10]
  if (
    buttonsToGenerate + maxNumberOfButtons * Math.floor(currentPage / maxNumberOfButtons) !== totalPages &&
    distanceToLastPage > 1
  ) {
    const text =
      distanceToLastPage >= maxNumberOfButtons
        ? `${countOfButtons + 1}-${countOfButtons + maxNumberOfButtons}`
        : `${countOfButtons + 1}-${totalPages}`;
    array.push(text);
  }
  if (!lastPage) {
    const text = '>';
    array.push(text);
  }
  return array;
}

/**
 * Calculates props for paging buttons
 * @param button String value of button
 * @param currentPage Number
 * @param onPress Function
 * @returns {{isCurrentPage: boolean, onButtonPress: function}}
 */
function calculatePagingButtonsProps(button, currentPage, onPress) {
  let onButtonPress = null;
  let isCurrentPage = false;
  if (button === '<') {
    onButtonPress = () => onPress(currentPage - 1);
  } else if (button === '>') {
    onButtonPress = () => onPress(currentPage + 1);
  } else if (button.includes('-')) {
    const startValue = parseInt(button[0]);
    const endValue = parseInt(button[button.length - 1]);
    const onPressValue = startValue > currentPage ? startValue - 1 : endValue - 1;
    onButtonPress = () => onPress(onPressValue);
  } else {
    const buttonValue = parseInt(button);
    isCurrentPage = buttonValue === currentPage + 1;
    onButtonPress = () => onPress(buttonValue - 1);
  }
  return { onButtonPress, isCurrentPage };
}

export default {
  getIconForPlatform,
  calculatePagination,
  calculatePagingButtons,
  calculatePagingButtonsProps
};
