import { Platform, StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  tOpacityStyle: {
    height: 60 * rem,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#1790ed',
    marginBottom: 20 * rem,
    justifyContent: 'center'
  },
  customButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  customButtonText: {
    fontSize: 20 * rem,
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif',
    fontWeight: 'bold'
  },
  customButtonIcon: {
    marginLeft: 5 * rem
  }
});

export default styles;
