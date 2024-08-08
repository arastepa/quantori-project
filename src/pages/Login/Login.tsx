import styles from '@/pages/Login/Login.module.css';
import { login } from '@/services/login';
import { Data } from '@/types/types';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile');
    }
  }, [navigate]);
  const loginUser: SubmitHandler<Data> = (data) => {
    console.log(data);
    login(data);
  };

  const handleCancel = () => {
    reset();
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit(loginUser)}>
        <div className={styles.inputs}>
          <div>
            {errors.username && (
              <p className={styles.error}>username is required</p>
            )}
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              {...register('username', { required: true })}
            />
          </div>
          <div>
            {errors.psw && <p className={styles.error}>password is required</p>}
            <label htmlFor="password">password</label>
            <input
              type="password"
              {...register('psw', { required: true })}
              id="password"
            />
          </div>
        </div>
        <div className={styles.btns}>
          <button>submit</button>
          <button onClick={handleCancel}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
