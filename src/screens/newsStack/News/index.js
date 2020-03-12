import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { togglePopupMessage } from 'src/store/actions/uiActions';
import { deleteNews, fetchNews } from 'src/store/actions/newsActions';
import { Alert, RefreshControl, ScrollView } from 'react-native';
import { Error404, Loader, PagingButtons } from 'src/components';
import NewsList from 'src/screens/newsStack/News/NewsList';
import AddNewsButton from 'src/screens/newsStack/News/AddNewsButton';
import NoNews from 'src/screens/newsStack/News/NoNews';
import locales from 'src/constants/localization';
import { NavigationService } from 'src/services';
import { AppUtils, HooksUtils, ObjectUtils } from 'src/utils';
import { screenNames } from 'src/constants/navigation';
import PropTypes from 'prop-types';
import { newsReducerPropTypes, userPropTypes } from 'src/constants/propTypes';
import styles from 'src/screens/newsStack/News/styles';
import {
  checkIfLoadingSelector,
  checkIfRefreshingSelector,
  updatingItemIdSelector,
  userDataSelector
} from 'src/store/selectors';
import { newsActionTypes } from 'src/constants/actionTypes';

const entriesPerPage = 5;
const News = props => {
  const newsIdFromNotification = props.navigation.getParam('newsIdFromNotification');
  const { news, userData, isLoading, refreshing, deletingNewsId } = props;
  const { isAuthenticated, displayName } = userData;
  const { cachedNews, error } = news;
  const [pagedNews, setPagedNews] = useState({});
  const [pagination, setPagination] = useState({
    first: false,
    last: false,
    currentPage: 0,
    totalPages: 0
  });
  const scrollRef = useRef(null);

  HooksUtils.useDidMount(props.fetchNews);

  useEffect(() => {
    const totalEntries = Object.keys(cachedNews).length;
    const pagination = AppUtils.calculatePagination(totalEntries, entriesPerPage, 0);
    setPagination(pagination);
    setPagedNews(ObjectUtils.getSubObject(cachedNews, pagination.currentPage * entriesPerPage, entriesPerPage));
  }, [cachedNews]);

  const onRefresh = useCallback(() => {
    const refreshing = true;
    props.fetchNews(refreshing);
  }, [props]);

  const changePage = pageNum => {
    const totalEntries = Object.keys(cachedNews).length;
    const pagination = AppUtils.calculatePagination(totalEntries, entriesPerPage, pageNum);
    setPagination(pagination);
    setPagedNews(ObjectUtils.getSubObject(cachedNews, pagination.currentPage * entriesPerPage, entriesPerPage));
  };

  const deleteNewsAlert = async newsId => {
    Alert.alert(
      locales.deleteAlert,
      locales.alertAreYouSure,
      [
        {
          text: locales.cancel,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: locales.confirm, onPress: () => deleteNews(newsId) }
      ],
      { cancelable: false }
    );
  };

  const deleteNews = newsId => {
    props.deleteNews(newsId);
  };

  const editNews = newsId => {
    const newsBeforeEdit = cachedNews[newsId];
    NavigationService.navigate(screenNames.NEWS_PUBLISH, { newsId, newsBeforeEdit, displayName });
  };

  //RENDER
  let content = null;
  if (isLoading && !refreshing) {
    content = <Loader text={locales.loadingNews} />;
  } else if (ObjectUtils.isEmpty(cachedNews) && !error) {
    content = <NoNews />;
  } else if (error && !ObjectUtils.isEmpty(cachedNews)) {
    content = <Error404 />;
  } else {
    const { currentPage, totalPages } = pagination;
    const pagingButtons = AppUtils.calculatePagingButtons(totalPages, currentPage);
    content = (
      <>
        <AddNewsButton {...{ isAuthenticated, displayName }} />
        <NewsList
          {...{ pagedNews, isAuthenticated, deletingNewsId, newsIdFromNotification, editNews, deleteNewsAlert }}
        />
        <PagingButtons onPress={changePage} {...{ currentPage, pagingButtons }} />
      </>
    );
  }
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      ref={scrollRef}
      onContentSizeChange={() => {
        scrollRef.current.scrollTo({ x: 0, y: 0, animated: true }); //scroll to top
      }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {content}
    </ScrollView>
  );
};

News.propTypes = {
  userData: userPropTypes.isRequired,
  news: newsReducerPropTypes.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refreshing: PropTypes.bool.isRequired,
  deletingNewsId: PropTypes.string,
  togglePopupMessage: PropTypes.func.isRequired,
  fetchNews: PropTypes.func.isRequired,
  deleteNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userData: userDataSelector(state),
  news: state.news,
  deletingNewsId: updatingItemIdSelector(state)(newsActionTypes.DELETE_NEWS),
  isLoading: checkIfLoadingSelector(state)([newsActionTypes.FETCH_NEWS]),
  refreshing: checkIfRefreshingSelector(state)(newsActionTypes.FETCH_NEWS)
});

const mapDispatchToProps = {
  togglePopupMessage,
  fetchNews,
  deleteNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(News));
