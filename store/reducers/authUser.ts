export interface User {
  _id: string;
  name?: string;
  profile?: string;
  email: string;
  avatorImgUrl?: string;
  followers: string[];
  following: string[];
}

export interface AuthUserState {
  user: User | null;
  isAuth: boolean;
  profile: string;
}

export enum AuthUserActionType {
  setUser = 'authUser/setUser',
  followUser = 'authUser/followUser',
  setProfile = 'authUser/setProfile'
}

export interface AuthUserAction {
  type: AuthUserActionType;
  payload: {
    user?: User | null;
    _id?: string;
    profile?: string;
  };
}

export const initialAuthUserState: AuthUserState = {
  user: null,
  isAuth: false,
  profile: ''
};

const authUserReducer = (
  state: AuthUserState = initialAuthUserState,
  action: AuthUserAction
): AuthUserState => {
  switch (action.type) {
    case AuthUserActionType.followUser: {
      const { user } = state;
      if (!user) return state;

      const { _id } = action.payload;
      if (!_id) return state;

      user.following.push(_id);

      return { ...state, user };
    }

    case AuthUserActionType.setProfile: {
      const { profile } = action.payload;
      if (!profile) return state;

      return { ...state, profile };
    }

    case AuthUserActionType.setUser: {
      const { user } = action.payload;
      if (user === undefined) return state;

      return {
        ...state,
        isAuth: (user !== null && Object.keys(user).length) > 0 ? true : false,
        user
      };
    }

    default: {
      console.log(`Unknown Action Type ${action.type}`);
      return state;
    }
  }
};

export default authUserReducer;
