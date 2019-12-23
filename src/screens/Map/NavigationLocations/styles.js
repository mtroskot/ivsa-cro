import { Platform, StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  locationView: {
    flex: 1
  },
  customButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 5 * rem
  },
  customButtonText: {
    fontSize: 16 * rem,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif'
  },
  customButtonIcon: {
    marginHorizontal: 10 * rem
  }
});

export default styles;
