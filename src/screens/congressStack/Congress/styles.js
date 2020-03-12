import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f7f3ca',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
    height: 70 * rem
  },
  listItemTOpacity: {
    marginLeft: 20 * rem,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemTextStyle: {
    fontSize: 20 * rem,
    color: 'black'
  }
});

export default styles;
