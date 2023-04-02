import { combineReducers } from 'redux';
import articleReducer, { ArticleState } from './reducers/articles';
import authUserReducer, { AuthUserState } from './reducers/authUser';
import commonReducer, { CommonState } from './reducers/common';
import projectReducer, { ProjectState } from './reducers/projects';

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';
// import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory();
export interface AppState {
  authUserState: AuthUserState;
  articleState: ArticleState;
  commonState: CommonState;
  projectState: ProjectState;
}

const appReducer = combineReducers({
  articleState: articleReducer,
  authUserState: authUserReducer,
  commonState: commonReducer,
  projectState: projectReducer
});

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
