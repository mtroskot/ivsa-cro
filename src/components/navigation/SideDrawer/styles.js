import { StyleSheet, Platform } from 'react-native';
import { dimensions } from 'src/styles';
const { rem, width } = dimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width * 0.6
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20 * rem
  },
  picker: {
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? 100 * rem : 50 * rem,
    overflow: 'hidden',
    marginTop: 10 * rem,
    marginLeft: Platform.OS === 'ios' ? 0 : 10 * rem
  },
  user: {
    fontSize: 16 * rem,
    margin: 10 * rem
  }
});

export default styles;
