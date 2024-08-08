import styles from '@/components/Header.module.css';
import { NavLink } from 'react-router-dom';
import Profile from '@/assets/profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setLogged } from '@/store/Loggedin/loggedSlice';
import menu from '@/assets/menu.svg';
import { useState } from 'react';

const Header = () => {
  const logged = useSelector((state: RootState) => state.logged);
  const dispatch = useDispatch();
  const [burgerClicked, setBurgerClicked] = useState(false);
  return (
    <ul className={styles.menu}>
      <img
        src={menu}
        alt=""
        className={`${styles.burger}`}
        onClick={() => {
          setBurgerClicked(burgerClicked === false ? true : false);
        }}
      />
      <div className={styles.wrapper}>
        <div className={styles.mobile}>
          <li>
            <NavLink to={`/profile`}>
              <img src={Profile} alt="" />
            </NavLink>
          </li>
        </div>
        <div
          className={`${styles.inner} ${burgerClicked ? styles.showInner : styles.hideInner} `}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? `${styles.active}` : ``}`
              }
              to={`/`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? `${styles.active}` : ``}`
              }
              to={`/contact`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? `${styles.active}` : ``}`
              }
              to={`/about`}
            >
              About
            </NavLink>
          </li>
          <div className={`${styles.loginItem} ${styles.loginMobile}`}>
            {!logged.value && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? `${styles.activeLogin}` : ``}`
                  }
                  to={`/login`}
                >
                  Login
                </NavLink>
              </li>
            )}
            {logged.value && (
              <li>
                <NavLink
                  className={styles.logout}
                  onClick={() => {
                    localStorage.clear();
                    dispatch(setLogged(false));
                  }}
                  to={`/login`}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.loginItem} ${styles.loginDesktop}`}>
        {!logged.value && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? `${styles.activeLogin}` : ``}`
              }
              to={`/login`}
            >
              Login
            </NavLink>
          </li>
        )}
        {logged.value && (
          <li>
            <NavLink
              className={styles.logout}
              onClick={() => {
                localStorage.clear();
                dispatch(setLogged(false));
              }}
              to={`/login`}
            >
              Logout
            </NavLink>
          </li>
        )}
      </div>
    </ul>
  );
};

export default Header;
