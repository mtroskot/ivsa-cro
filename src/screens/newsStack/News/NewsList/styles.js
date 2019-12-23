import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  noticeView: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10 * rem,
    marginBottom: 20 * rem
  },
  firstNews: {
    marginTop: 20 * rem
  },
  highlightedNews: {
    borderColor: 'red',
    borderWidth: 2
  },
  author: {
    fontSize: 20 * rem,
    color: 'black'
  },
  contentStyle: {
    fontSize: 18 * rem,
    marginTop: 7 * rem,
    color: 'black'
  },
  dateStyle: {
    fontSize: 16 * rem,
    marginTop: 3 * rem,
    color: 'black'
  }
});

export default styles;
