import { User } from './authUser';

export interface Category {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  authorId: string;
  text: String;
  upload_time: number;
}

export interface Article {
  _id: string;
  category?: string;
  tags?: string[];
  text?: string;
  title?: string;
  description?: string;
  feature_img?: string;
  claps?: number;
  author?: string | User;
  comments?: { [tagId: string]: Comment };
  upload_time?: number;
}

export enum ArticleActionType {
  loadArticles = 'articles/loadArticles',
  viewArticle = 'articles/viewArticle',
  clapArticle = 'articles/clapArticle',
  setCategoryId = 'articles/setCategoryId',
  switchTagIds = 'articles/switchTagIds',
  loadCategories = 'articles/loadCategories',
  loadTags = 'articles/loadTags'
}

export interface ArticleState {
  articles: { [id: string]: Article };
  curArticleId: string | null;
  categories: { [categoryId: string]: Category };
  tags: { [tagId: string]: Tag };
  curCategoryId: string | null;
  curTags: { [tagId: string]: boolean };
}

export const initArticleState: ArticleState = {
  articles: {},
  curArticleId: null,
  categories: {},
  tags: {},
  curCategoryId: null,
  curTags: {}
};

export interface ArticleAction {
  type: ArticleActionType;
  payload: {
    articles?: { [id: string]: Article };
    id?: string;
    curCategoryId?: string;
    tagId?: string;
    tags?: { [id: string]: Tag };
    categories?: { [id: string]: Category };
  };
}

const articleReducer = (
  state: ArticleState = initArticleState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionType.loadArticles: {
      const { articles } = action.payload;
      if (articles === undefined) return state;

      return { ...state, articles };
    }

    case ArticleActionType.viewArticle: {
      const { id } = action.payload;
      if (id === undefined) return state;

      return { ...state, curArticleId: id };
    }

    case ArticleActionType.clapArticle: {
      let { curArticleId, articles } = state;

      if (curArticleId === null) return state;

      let article = articles[curArticleId];
      article = Object.assign({}, article);
      article.claps = (article.claps ?? 0) + 1;

      return { ...state, articles };
    }

    case ArticleActionType.setCategoryId: {
      const { curCategoryId } = action.payload;

      if (curCategoryId === undefined) return state;

      return { ...state, curCategoryId };
    }
    case ArticleActionType.switchTagIds: {
      const { tagId } = action.payload;

      if (tagId === undefined) return state;

      const { curTags } = state;

      curTags[tagId] = !curTags[tagId];

      const newCurTags = Object.assign({}, curTags);

      return { ...state, curTags: newCurTags };
    }

    case ArticleActionType.loadTags: {
      const { tags } = action.payload;

      if (tags === undefined) return state;

      return { ...state, tags };
    }

    case ArticleActionType.loadCategories: {
      const { categories } = action.payload;

      if (categories === undefined) return state;

      return { ...state, categories };
    }

    default: {
      console.log('Unknown Action Type ' + action.type);
      return state;
    }
  }
};

export default articleReducer;
