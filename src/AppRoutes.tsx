import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import Contact from '@/pages/Contact/Contact';
import About from '@/pages/About/About';
import Login from '@/pages/Login/Login';
import Profile from '@/pages/Profile/profile';
import styles from '@/app.module.css';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <div className={styles.cont}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
