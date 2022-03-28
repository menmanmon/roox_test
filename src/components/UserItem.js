import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserId, openModal, setUsers } from '../store/users/actions';
import styles from '../styles.scss';

const UserItem = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { users } = useSelector(state => state);
  const dispatch = useDispatch();

  const openModalWindow = (e) => {
    dispatch(openModal());
    dispatch(changeUserId(e.target.id))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          dispatch(setUsers(result));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={styles.userItem}>
        {users.map((user) => (
          <div className={styles.usersItemContainer} key={user.id}>
            <div className={styles.usersItemCart}>
              <div className={styles.usersItemCartLeft}>
                <p className={styles.usersItemCartText}>
                  <span className={styles.usersItemCartSpan}>ФИО: </span>
                  {user.name}
                </p>
                <p className={styles.usersItemCartText}>
                  <span className={styles.usersItemCartSpan}>город: </span>
                  {user.address.city}
                </p>
                <p className={styles.usersItemCartText}>
                  <span className={styles.usersItemCartSpan}>компания: </span>
                  {user.company.name}
                </p>
              </div>
              <div className={styles.usersItemCartRight}>
                <div className={styles.usersItemCartRightInside}>
                  <p onClick={openModalWindow} className={styles.usersItemMore} id={user.id}>Подробнее</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default UserItem;
