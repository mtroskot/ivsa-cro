import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { togglePopupMessage } from 'src/store/actions/uiActions';
import { Alert, RefreshControl, ScrollView } from 'react-native';
import { Error404, Loader, PagingButtons } from 'src/components';
import NewsList from 'src/screens/newsStack/News/NewsList';
import AddNewsButton from 'src/screens/newsStack/News/AddNewsButton';
import NoNews from 'src/screens/newsStack/News/NoNews';
import locales from 'src/constants/localization';
import { ApiService, NavigationService } from 'src/services';
import { AppUtils, ObjectUtils } from 'src/utils';
import { screenNames } from 'src/constants/navigation';
import PropTypes from 'prop-types';
import { newsPropTypes, userPropTypes } from 'src/constants/propTypes';
import styles from 'src/screens/newsStack/News/styles';
import { getUserData } from 'src/store/selectors';

const entriesPerPage = 5;
// let yOffset = 0;
const News = props => {
  const [allNews, setAllNews] = useState({});
  const [pagedNews, setPagedNews] = useState({});
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    first: false,
    last: false,
    pageNumber: 0,
    totalPages: 0
  });
  const mounted = useRef(false);
  const scrollRef = useRef(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  // TODO neman pojma zasto ovako
  //ovaj me zajebava, ako stavim dependency array stalno se rendera
  // ovo je trebalo bit na did update
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      let newNews = { ...allNews };
      const key = props.news.key;
      newNews[key] = props.news;
      setAllNews(newNews);
    }
  }, []);

  const { togglePopupMessage } = props;
  const fetchNews = useCallback(async () => {
    if (await AppUtils.isConnectedToInternet()) {
      try {
        const response = await ApiService.getNews();
        const totalEntries = Object.keys(response).length;
        const pagination = AppUtils.calculatePagingation(totalEntries, entriesPerPage, 0);
        setPagination(pagination);
        setAllNews(response || {});
        setPagedNews(ObjectUtils.getSubObject(response, pagination.pageNumber * entriesPerPage, entriesPerPage));
      } catch (error) {
        console.log('News fetchNews', error);
        setFetchError(true);
      } finally {
        setIsLoading(false);
        setRefreshing(false);
      }
    } else {
      togglePopupMessage(locales.noInternet);
      setIsLoading(false);
      setFetchError(true);
    }
  }, [togglePopupMessage]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNews();
  }, [fetchNews]);

  const changePage = pageNum => {
    const totalEntries = Object.keys(allNews).length;
    const pagination = AppUtils.calculatePagingation(totalEntries, entriesPerPage, pageNum);
    setPagination(pagination);
    setPagedNews(ObjectUtils.getSubObject(allNews, pagination.pageNumber * entriesPerPage, entriesPerPage));
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

  const deleteNews = async newsId => {
    if (await AppUtils.isConnectedToInternet()) {
      try {
        const response = await ApiService.deleteNews(newsId);
        await fetchNews();
      } catch (error) {
        console.log('deleteNotice error', error);
      }
    }
  };

  const editNews = newsId => {
    const newsBeforeEdit = allNews[newsId];
    NavigationService.navigate(screenNames.NEWS_PUBLISH, { newsBeforeEdit });
  };
  const { user } = props;
  const { isAuthenticated } = user;
  const keyFromNotification = props.navigation.getParam('keyFromNotification');
  if (isLoading) {
    return <Loader />;
  }
  if (fetchError) {
    return <Error404 />;
  }
  if (ObjectUtils.isEmpty(allNews)) {
    return <NoNews />;
  }
  const { first, last, pageNumber, totalPages } = pagination;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      centerContent
      ref={scrollRef}
      // onScroll={event => {
      //   yOffset = event.nativeEvent.contentOffset.y;
      // }}
      onContentSizeChange={() => {
        // scrollRef.current.scrollTo({ x: 0, y: yOffset, animated: true }); //maintain scroll position
        scrollRef.current.scrollTo({ x: 0, y: 0, animated: true }); //scroll to top
      }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <AddNewsButton isAuthenticated={isAuthenticated} />
      <NewsList {...{ pagedNews, isAuthenticated, keyFromNotification, editNews, deleteNewsAlert }} />
      <PagingButtons onPress={changePage} {...{ first, last, pageNumber, totalPages }} />
    </ScrollView>
  );
};

News.propTypes = {
  user: userPropTypes.isRequired,
  news: newsPropTypes.isRequired,
  togglePopupMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: getUserData(state),
  news: state.news
});

const mapDispatchToProps = {
  togglePopupMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
