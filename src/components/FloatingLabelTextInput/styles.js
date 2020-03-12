import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const paddingLeft = 15 * rem;
const labelSize = 13 * rem;
const inputSize = 20 * rem;

const styles = StyleSheet.create({
  defaultInput: {
    fontSize: inputSize,
    borderColor: '#bbb',
    color: '#334144',
    flexGrow: 1,
    paddingLeft,
    marginTop: labelSize + labelSize * 0.1
  },
  container: {
    maxHeight: '40%',
    width: '90%',
    borderColor: '#DFE5EA',
    borderWidth: 1 * rem,
    alignSelf: 'center',
    borderRadius: 5 * rem,
    minHeight: 50 * rem,
    backgroundColor: '#F5F6F7',
    justifyContent: 'flex-end',
    paddingBottom: 5 * rem
  },
  floatingLabel: {
    position: 'absolute',
    left: paddingLeft,
    color: '#949EA0',
    fontSize: labelSize
  }
});

export default styles;
