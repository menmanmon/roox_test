import {
  CHANGE_USER_ID,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_USERS,
  SORT_USERS_BY_CITY,
  SORT_USERS_BY_COMPANY_NAME,
} from './actions';

const initialState = {
  users: [],
  activeModal: false,
  currentUserId: null,
  currentUser: {}
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    // return { ...state, users: [...state.users, ...action.payload] };
    case SORT_USERS_BY_CITY:
      const newUsersByCity = state.users.map((a) => a);
      const sortUsersCity = newUsersByCity.sort((a, b) =>
        a.address.city > b.address.city ? 1 : -1
      );
      return { ...state, users: sortUsersCity };
    case SORT_USERS_BY_COMPANY_NAME:
      const newUsersByCompany = state.users.map((a) => a);
      const sortUsersCompany = newUsersByCompany.sort((a, b) =>
        a.company.name > b.company.name ? 1 : -1
      );
      return { ...state, users: sortUsersCompany };
    case OPEN_MODAL:
      return {
        ...state,
        activeModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        activeModal: false,
      };
    case CHANGE_USER_ID:
      const user = state.users.find(user => user.id == +action.payload);
      return {
        ...state,
        currentUserId: +action.payload,
        currentUser: user
      };
    default:
      return state;
  }
};
