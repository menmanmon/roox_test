import { useDispatch } from 'react-redux';
import { sortUsersByCity, sortUsersByCompanyName } from '../store/users/actions';
import styles from '../styles.scss';

const Sorting = () => {
  const dispatch = useDispatch();

  const sortByCity = () => {
    dispatch(sortUsersByCity())
  }
  const sortByCompanyName = () => {
    dispatch(sortUsersByCompanyName())
  }

  return (
    <div className={styles.sortingContainer}>
      <div className={styles.sortingMain} >
        <h4 className={styles.sortingH4}>Сортировка</h4>
        <button onClick={sortByCity} className={styles.blueBtn}>по городу</button>
        <button onClick={sortByCompanyName} className={styles.blueBtn}>по компании</button>
      </div>
    </div>
  );
};

export default Sorting;
