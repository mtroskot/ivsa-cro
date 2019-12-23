import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';

const { rem } = dimensions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#c1c1c1',
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
    color: 'black',
    textTransform: 'uppercase'
  },
  listItemImageStyle: {
    height: 50 * rem,
    marginLeft: 20 * rem,
    marginRight: 20 * rem,
    flex: 1
  }
});

export default styles;
