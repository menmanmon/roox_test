import { useSelector } from 'react-redux';
import styles from '../styles.scss';
import UserItem from './UserItem';

const UsersList = () => {
  const { users } = useSelector(state => state);

  let find = 'о';
  if( users.length % 10 === 1 && users.length != 11) {
    find = '';
  } else {
    find = 'о';
  }

  const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  return (
    <div className={styles.usersListContainer}>
      <div className={styles.usersListMain}>
        <h3 className={styles.headingH3}>Список пользователей</h3>
          <UserItem />
        <div className={styles.usersListCountContainer}>
          <span className={styles.usersListCount}>
            Найден{find} {users.length} {sklonenie(users.length, ['пользователь', 'пользователя', 'пользователей'])}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
