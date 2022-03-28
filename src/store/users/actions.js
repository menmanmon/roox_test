export const SET_USERS = 'USERS::SET_USERS';
export const SORT_USERS_BY_CITY = 'USERS::SORT_USERS_BY_CITY';
export const SORT_USERS_BY_COMPANY_NAME = 'USERS::SORT_USERS_BY_COMPANY_NAME';
export const OPEN_MODAL = 'USERS::OPEN_MODAL';
export const CLOSE_MODAL = 'USERS::CLOSE_MODAL';
export const CHANGE_USER_ID = 'USERS::CHANGE_USER_ID';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
})

export const sortUsersByCity = () => ({
  type: SORT_USERS_BY_CITY,
})

export const sortUsersByCompanyName = () => ({
  type: SORT_USERS_BY_COMPANY_NAME,
})

export const openModal = () => ({
  type: OPEN_MODAL,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

export const changeUserId = (userId) => ({
  type: CHANGE_USER_ID,
  payload: userId,
})