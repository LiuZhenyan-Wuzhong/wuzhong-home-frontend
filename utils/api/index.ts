import * as articleReq from './article';
import * as userReq from './user';
import * as categoryReq from './category';
import * as tagReq from './tag';

const indexReq = { ...articleReq, ...userReq, ...categoryReq, ...tagReq };

export default indexReq;
