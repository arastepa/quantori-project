import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import Contact from '@/pages/Contact/Contact';
import About from '@/pages/About/About';
import Login from '@/pages/Login/Login';
import Profile from './pages/Profile/profile';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
