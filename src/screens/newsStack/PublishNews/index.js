import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, TextInput, View } from 'react-native';
import { KeyboardAvoidAndDismissView } from 'src/components';
import { connect } from 'react-redux';
import { publishNews, updateNews } from 'src/store/actions/newsActions';
import { DateUtils } from 'src/utils';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';
import styles from 'src/screens/newsStack/PublishNews/styles';
import { checkIfLoadingSelector } from 'src/store/selectors';
import { newsActionTypes } from 'src/constants/actionTypes';

function renderActionButton(isLoading, newsText, newsBeforeEdit, updateNotice, publishNotice) {
  const disabledButton = newsText.length < 10 || newsText.trim() === newsBeforeEdit?.notice.trim();
  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    // if newsBeforeEdit is present, we are updating an existing news
    return (
      <Button
        title={newsBeforeEdit ? locales.update : locales.publish}
        color="#54bdff"
        disabled={disabledButton}
        onPress={newsBeforeEdit ? updateNotice : publishNotice}
      />
    );
  }
}

const PublishNews = props => {
  const { isLoading } = props;
  const [newsText, setNewsText] = useState('');
  const { newsId, newsBeforeEdit, displayName } = props.navigation.state.params;
  useEffect(() => {
    if (newsBeforeEdit) {
      setNewsText(newsBeforeEdit.notice);
    }
  }, [newsBeforeEdit]);

  const handleInput = value => {
    setNewsText(value);
  };

  const publishNotice = async () => {
    const stringDate = DateUtils.getFormattedDate();
    props.publishNews(stringDate, displayName, newsText);
  };

  const updateNotice = async () => {
    const { date, publishedBy } = newsBeforeEdit;
    props.updateNews(newsId, date, publishedBy, newsText);
  };

  //RENDER
  return (
    <KeyboardAvoidAndDismissView viewStyle={styles.container} avoidKeyboard={false}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={locales.enterNotice}
          value={newsText}
          autoCorrect={false}
          multiline={true}
          borderBottomWidth={3}
          onChangeText={handleInput}
        />
        <View style={[styles.buttonContainer, { marginRight: isLoading ? 30 : 0 }]}>
          {renderActionButton(isLoading, newsText, newsBeforeEdit, updateNotice, publishNotice)}
        </View>
      </View>
    </KeyboardAvoidAndDismissView>
  );
};

PublishNews.propTypes = {
  publishNews: PropTypes.func.isRequired,
  updateNews: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isLoading: checkIfLoadingSelector(state)([newsActionTypes.PUBLISH_NEWS, newsActionTypes.UPDATE_NEWS])
});

const mapDispatchToProps = {
  publishNews,
  updateNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PublishNews));
