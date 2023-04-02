import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { clapArticleReq } from '../../utils/api/article';
import { Article, ArticleAction, ArticleActionType, Category, Tag } from '../reducers/articles';
import { AuthUserAction, AuthUserActionType, User } from '../reducers/authUser';
import { CommonAction, CommonActionType } from '../reducers/common';

// const url = 'http://localhost:5000/api'

const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/';

export async function loadArticles(articles: { [id: string]: Article }) {
  return {
    type: ArticleActionType.loadArticles,
    payload: { articles }
  };
}

// export async function getUser(_id: number) {
//     try {
//         const res = await axios.get(`${url}user/${_id}`);
//         return res.data;
//     } catch (error) {
//         console.error(error);
//     }
// }

export function getUserProfile(_id: number) {
  return async (dispatch: React.Dispatch<AuthUserAction>) => {
    try {
      const res = await axios.get(`${url}user/profile/${_id}`);
      const profile = res.data;
      dispatch({
        type: AuthUserActionType.setProfile,
        payload: {
          profile
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
}

// export function getArticle(article_id: number) {
//     return (dispatch: React.Dispatch<ArticleAction>) => {
//         axios
//             .post(`${url}article/clap`, { article_id })
//             .then((res) => {
//                 if (res.statusText === 'OK') {
//                     dispatch({
//                         type: ArticleActionType.clapArticle,
//                         payload: {},
//                     });
//                 }
//             })
//             .catch((err) => console.log(err));
//     };
// }

export function comment() {
  return (dispatch: React.Dispatch<ArticleAction>) => {};
}

export async function clap(articleId: string) {
  try {
    const res = await clapArticleReq({ articleId });

    const article = res.data;

    return { type: ArticleActionType.clapArticle, payload: { article } };
  } catch (err) {
    console.error(err);
  }
}

export async function follow(id: string, targetId: string) {
  try {
    const res = await axios.post(`${url}user/follow`, { id, targetId });
    return {
      type: AuthUserActionType.followUser,
      payload: { _id: targetId }
    };
  } catch (err) {
    console.error(err);
    return {};
  }
}

export async function setUser(user: User | null): Promise<AuthUserAction> {
  return {
    type: AuthUserActionType.setUser,
    payload: { user }
  };
}

export async function setCategoryId(curCategoryId: string) {
  return {
    type: ArticleActionType.setCategoryId,
    payload: { curCategoryId }
  };
}

export async function switchTagIds(tagId: string) {
  return {
    type: ArticleActionType.switchTagIds,
    payload: { tagId }
  };
}

export async function loadCategories(categories: { [key: string]: Category }) {
  return {
    type: ArticleActionType.loadCategories,
    payload: { categories }
  };
}

export async function loadTags(tags: { [key: string]: Tag }) {
  return {
    type: ArticleActionType.loadTags,
    payload: { tags }
  };
}
