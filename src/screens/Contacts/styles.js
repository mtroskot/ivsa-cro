import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5 * rem,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center'
  }
});

export default styles;
