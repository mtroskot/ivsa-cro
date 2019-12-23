import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputContainer: {
    width: '85%'
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#bbb',
    height: 200 * rem,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 10 * rem
  }
});

export default styles;
