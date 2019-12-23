import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  addNewsButtonView: {
    alignItems: 'center',
    marginVertical: 15 * rem
  },
  addNewsButton: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25 * rem,
    padding: 15 * rem,
    backgroundColor: '#87abe5'
  },
  addNewsButtonText: {
    fontSize: 17 * rem,
    color: 'black'
  }
});

export default styles;
