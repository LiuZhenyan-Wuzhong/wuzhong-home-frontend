import '../styles/globals.css';
import store from '../store/store';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { AxiosRequestConfig } from 'axios';
import { ArticleState, Category, Tag } from '../store/reducers/articles';
import api from '../utils/api';
import normalizeList from '../utils/normalizeList';
import { appWithTranslation } from 'next-i18next';

interface WuBlogAppProps extends AppProps {
  appInitProps: Partial<ArticleState>;
}

function App({ Component, pageProps, appInitProps }: WuBlogAppProps) {
  return (
    <Provider store={store}>
      <Layout appInitProps={appInitProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

App.getInitialProps = async () => {
  const appInitProps = await getAppInitProps();

  return {
    appInitProps
  };
};

const getAppInitProps = async (config?: AxiosRequestConfig) => {
  const appInitProps: Partial<ArticleState> = {
    categories: {},
    tags: {}
  };

  // appInitProps.articles = await getArticles(config);
  appInitProps.categories = await getCategories();
  appInitProps.tags = await getTags();

  return appInitProps;
};

// const getArticles = async (config?: AxiosRequestConfig) => {
//     const res = await api.get10ArticlesReq(config);

//     if (res.status === 200) {
//         const { data: articleList } = res;

//         console.log('Receive articles:');

//         return normalizeList(articleList as Article[], '_id');
//     } else {
//         const { data: err } = res;

//         console.error(err);

//         return {};
//     }
// };

const getCategories = async (config?: AxiosRequestConfig) => {
  const res = await api.getAllCategoriesReq(config);

  if (res.status === 200) {
    const { data: categories } = res;

    console.log('Receive categories:');

    return normalizeList(categories as Category[], '_id');
  } else {
    const { data: err } = res;

    console.error(err);

    return {};
  }
};

const getTags = async (config?: AxiosRequestConfig) => {
  const res = await api.getAllTagsReq(config);

  if (res.status === 200) {
    const { data: tags } = res;

    console.log('Receive tags:');

    return normalizeList(tags as Tag[], '_id');
  } else {
    const { data: err } = res;

    console.error(err);

    return {};
  }
};

export default appWithTranslation(App);
