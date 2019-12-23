import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  }
});

export default styles;
