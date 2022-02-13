export const SET_USERS = "SET_USERS";

export default function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}
