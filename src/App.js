import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sorting from './components/Sorting';
import { UserProfile } from './components/UserProfile';
import UsersList from './components/UsersList';
import styles from './styles.scss';

const App = () => {
  const { activeModal } = useSelector(state => state);
  return (
    <div className={styles.container}>
      <Sorting />
      {activeModal ? <UserProfile/> : <UsersList/>}
    </div>
  );
};

export default App;
