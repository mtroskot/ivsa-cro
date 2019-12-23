import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  bottomPositionView: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  paginationView: {
    flexDirection: 'row',
    marginTop: 15 * rem,
    justifyContent: 'center'
  },
  customButton: {
    marginTop: 20 * rem,
    backgroundColor: '#f4f4f4',
    padding: 10 * rem,
    borderRadius: 5 * rem,
    borderWidth: 1
  }
});
export default styles;
