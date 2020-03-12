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
    width: '85%',
    marginTop: 20 * rem
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#bbb',
    minHeight: '20%',
    maxHeight: '80%',
    textAlignVertical: 'top'
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 10 * rem
  }
});

export default styles;
