import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    backgroundColor: '#eee',
    borderColor: '#bbb',
    margin: 10 * rem
  },
  loader: {
    marginTop: 35 * rem
  },
  customButtonView: {
    marginTop: 20 * rem,
    padding: 10 * rem,
    alignItems: 'center',
    backgroundColor: '#8ab9ff',
    width: 120 * rem,
    margin: 5 * rem,
    borderRadius: 5 * rem,
    borderWidth: 1
  }
});

export default styles;
