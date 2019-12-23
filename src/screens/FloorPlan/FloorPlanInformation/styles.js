import { StyleSheet,Platform } from 'react-native';
import { dimensions } from 'src/styles';

const { rem } = dimensions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  subContainer: {
    width: '90%',
    marginBottom: 20 * rem
  },
  text: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif'
  },
  keyTextStyle: {
    fontWeight: 'bold'
  }
});
export default styles;
