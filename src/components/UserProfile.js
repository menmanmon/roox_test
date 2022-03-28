import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserId, closeModal } from '../store/users/actions';
import styles from '../styles.scss';

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state);
  const [notActive, setNotActive] = useState(true);

  const [validation, setValidation] = useState({
    name: true,
    username: true,
    email: true,
    street: true,
    city: true,
    zipcode: true,
    phone: true,
    website: true,
  });

  const [userData, setUserData] = useState({
    name: currentUser.name,
    username: currentUser.username,
    email: currentUser.email,
    street: currentUser.address.street,
    city: currentUser.address.city,
    zipcode: currentUser.address.zipcode,
    phone: currentUser.phone,
    website: currentUser.website,
    comment: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
    if (e.target.value == '') {
      setValidation((prevState) => {
        return { ...prevState, [e.target.id]: false };
      });
    } else
      setValidation((prevState) => {
        return { ...prevState, [e.target.id]: true };
      });
  };

  const validatedForm = () => {
    // if (!/^[A-Z]{1}[a-z]{1,14}( [A-Z]{1})?([a-z]{1,14})?( [A-Z]{1})?([a-z]{0,14})?$/.test(userData.name)) {setValidation(prevState => {return{...prevState, name: false}})}
    if (/^$/.test(userData.name)) {
      setValidation((prevState) => {
        return { ...prevState, name: false };
      });
    } else setValidation({ ...validation, name: true });

    if (/^$/.test(userData.username)) {
      setValidation((prevState) => {
        return { ...prevState, username: false };
      });
    } else setValidation({ ...validation, username: true });

    // if (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(userData.email)) {setValidation(prevState => {return{...prevState, phone: false}})}
    if (/^$/.test(userData.email)) {
      setValidation((prevState) => {
        return { ...prevState, email: false };
      });
    } else setValidation({ ...validation, email: true });

    if (/^$/.test(userData.street)) {
      setValidation((prevState) => {
        return { ...prevState, street: false };
      });
    } else setValidation({ ...validation, street: true });

    if (/^$/.test(userData.city)) {
      setValidation((prevState) => {
        return { ...prevState, city: false };
      });
    } else setValidation({ ...validation, city: true });

    if (/^$/.test(userData.zipcode)) {
      setValidation((prevState) => {
        return { ...prevState, zipcode: false };
      });
    } else setValidation({ ...validation, zipcode: true });

    if (/^$/.test(userData.phone)) {
      setValidation((prevState) => {
        return { ...prevState, phone: false };
      });
    } else setValidation({ ...validation, phone: true });

    if (/^$/.test(userData.website)) {
      setValidation((prevState) => {
        return { ...prevState, website: false };
      });
    } else setValidation({ ...validation, website: true });
  };

  const sendData = () => {
    let formIsValid = true;

    for (let key in validation) {
      if (!validation[key]) formIsValid = false;
    }

    if (formIsValid) {
      dispatch(closeModal());
      dispatch(changeUserId(null));
      console.log(JSON.stringify(userData));
    }
  };

  const editForm = () => {
    setNotActive(false);
  };

  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userProfileContainerFlex}>
        <div className={styles.userProfileTop}>
          <h3 className={styles.headingH3}>Профиль пользователя</h3>
          <button onClick={editForm} className={styles.blueBtn}>
            Редактировать
          </button>
        </div>
        <div className={styles.userProfileMainContainer}>
          <form className={styles.userProfileForm} onSubmit={sendData}>
            <label className={styles.labelInput}>Name</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.name }
              )}
              type="text"
              id="name"
              value={userData.name}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>User Name</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.username }
              )}
              type="text"
              id="username"
              value={userData.username}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>E-mail</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.email }
              )}
              type="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>Street</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.street }
              )}
              type="text"
              id="street"
              value={userData.street}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>City</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.city }
              )}
              type="text"
              id="city"
              value={userData.city}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>Zip code</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.zipcode }
              )}
              type="text"
              id="zipcode"
              value={userData.zipcode}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>Phone</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.phone }
              )}
              type="text"
              id="phone"
              value={userData.phone}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>Website</label>
            <input
              className={classNames(
                styles.inputBox,
                { [styles.inputBoxNotActive]: notActive },
                { [styles.inputBoxInvalid]: !validation.website }
              )}
              type="text"
              id="website"
              value={userData.website}
              onChange={handleChange}
              readOnly={notActive}
            ></input>

            <label className={styles.labelInput}>Comment</label>
            <textarea
              className={styles.inputBoxComment}
              type="text"
              id="comment"
              value={userData.comment}
              onChange={handleChange}
              readOnly={notActive}
            ></textarea>
          </form>
        </div>
        <div className={styles.userProfileBottom}>
          <div className={styles.btnBlock}>
            <button
              type="submit"
              disabled={notActive}
              onClick={sendData}
              className={notActive ? styles.grayBtn : styles.greenBtn}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
