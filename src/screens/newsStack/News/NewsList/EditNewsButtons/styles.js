import { Platform, StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  authUserButtonsView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20 * rem
  },
  indicator: {
    justifyContent: 'center',
    width: 80 * rem
  },
  buttonView: {
    backgroundColor: '#d60000',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5 * rem
  },
  buttonText: {
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif',
    fontSize: 16 * rem,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  icon: {
    marginRight: 5 * rem
  }
});

export default styles;
