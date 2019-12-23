import React from 'react';
import PropTypes from 'prop-types';
import { iconPropTypes } from 'src/constants/propTypes';
import { CustomButton } from 'src/components';
import locales from 'src/constants/localization';
import { dimensions } from 'src/styles';
const { rem } = dimensions;
import styles from 'src/screens/Menu/MenuButtons/styles';

const MenuButtons = props => {
  const { menuList, onPress } = props;
  return (
    <React.Fragment>
      {menuList.map((menu, index) => {
        const { menuId, iconProps, text } = menu;
        return (
          <CustomButton
            key={menuId}
            iconProps={iconProps}
            text={locales[text]}
            tOpacityStyle={[
              styles.tOpacityStyle,
              {
                marginTop: index === 0 ? 50 * rem : 15 * rem,
                marginBottom: index === menuList.length - 1 ? 20 * rem : 0
              }
            ]}
            viewStyle={styles.customButtonView}
            textStyle={styles.customButtonText}
            iconStyle={styles.customButtonIcon}
            onPress={() => onPress(menuId)}
          />
        );
      })}
    </React.Fragment>
  );
};

MenuButtons.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.exact({
      menuId: PropTypes.string.isRequired,
      iconProps: iconPropTypes.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  currLocale: PropTypes.string.isRequired, //needed to rerender buttons when currLocale changes
  onPress: PropTypes.func.isRequired
};

export default React.memo(MenuButtons);
