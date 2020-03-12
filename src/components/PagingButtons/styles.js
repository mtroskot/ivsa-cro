import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  bottomPositionView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginVertical: 20 * rem
  },
  paginationView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  customButton: {
    backgroundColor: '#f4f4f4',
    padding: 10 * rem,
    borderRadius: 5 * rem,
    borderWidth: 1
  },
  buttonSelected: {
    backgroundColor: '#bababa'
  },
  buttonUnselected: {
    backgroundColor: '#f4f4f4'
  }
});
export default styles;
