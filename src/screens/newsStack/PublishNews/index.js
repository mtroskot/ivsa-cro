import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { DefaultInput, KeyboardAvoidAndDismissView } from 'src/components';
import { connect } from 'react-redux';
import { publishNews, updateNews } from 'src/store/actions/newsActions';
import { AppUtils } from 'src/utils';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';
import styles from 'src/screens/newsStack/PublishNews/styles';

function renderActionButton(newsText, newsBeforeEdit, updateNotice, publishNotice) {
  const disabledButton = newsText.length < 10 || newsText.trim() === newsBeforeEdit?.notice.trim();
  if (newsBeforeEdit) {
    return <Button title={locales.update} color="#54bdff" disabled={disabledButton} onPress={updateNotice} />;
  }
  return <Button title={locales.publish} color="#54bdff" disabled={disabledButton} onPress={publishNotice} />;
}

const PublishNews = props => {
  const [newsText, setNewsText] = useState('');
  const newsBeforeEdit = props.navigation.getParam('newsBeforeEdit');

  useEffect(() => {
    if (newsBeforeEdit) {
      setNewsText(newsBeforeEdit.notice);
    }
  }, [newsBeforeEdit]);

  const handleInput = value => {
    setNewsText(value);
  };

  const publishNotice = async () => {
    if (await AppUtils.isConnectedToInternet()) {
      const date = new Date();
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1; //months from 1-12
      const year = date.getUTCFullYear();
      let datetext = date.toTimeString();
      datetext = datetext.split(' ')[0];
      const hoursAndMinutes = datetext.substring(0, 5);
      const stringDate = `${day}.${month}.${year} ${hoursAndMinutes}`;
      props.publishNews(stringDate, props.navigation.state.params.displayName, newsText);
    }
  };

  const updateNotice = async () => {
    if (await AppUtils.isConnectedToInternet()) {
      const { key, date, publishedBy } = newsBeforeEdit;
      props.updateNews(key, date, publishedBy, newsText);
    }
  };

  return (
    <KeyboardAvoidAndDismissView viewStyle={styles.container} avoidKeyboard={false}>
      <View style={styles.inputContainer}>
        <DefaultInput
          style={styles.input}
          placeholder={locales.enterNotice}
          value={newsText}
          autoCorrect={false}
          multiline={true}
          borderBottomWidth={3}
          onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
          {renderActionButton(newsText, newsBeforeEdit, updateNotice, publishNotice)}
        </View>
      </View>
    </KeyboardAvoidAndDismissView>
  );
};

PublishNews.propTypes = {
  publishNews: PropTypes.func.isRequired,
  updateNews: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  publishNews,
  updateNews
};

export default connect(
  null,
  mapDispatchToProps
)(PublishNews);
