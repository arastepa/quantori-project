import { getUser } from '@/services/getUser';
import { User } from '@/types/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/pages/Profile/Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    } else {
      getUser().then((user) => setUser(user));
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.personal}>
        <h2>Personal Information</h2>
        <div>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={user?.firstName || ''} readOnly />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={user?.lastName || ''}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={user?.email || ''} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Profile;
