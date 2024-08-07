import styles from '@/components/Header.module.css';
import { NavLink } from 'react-router-dom';
import Profile from '@/assets/profile.svg';

const Header = () => {
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
      <li className={styles.loginItem}>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? `${styles.activeLogin}` : ``}`
          }
          to={`/login`}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
