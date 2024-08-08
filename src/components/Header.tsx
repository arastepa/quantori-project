import styles from '@/components/Header.module.css';
import { NavLink } from 'react-router-dom';
import Profile from '@/assets/profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setLogged } from '@/store/Loggedin/loggedSlice';

const Header = () => {
  const logged = useSelector((state: RootState) => state.logged);
  const dispatch = useDispatch();
  return (
    <ul className={styles.menu}>
      <div>
        <li>
          <NavLink to={`/profile`}>
            <img src={Profile} alt="" />
          </NavLink>
        </li>
        <div className={styles.inner}>
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
        </div>
      </div>
      <div className={styles.loginItem}>
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
