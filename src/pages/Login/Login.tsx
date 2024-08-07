import styles from '@/pages/Login/Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className={styles.btns}>
          <button>submit</button>
          <button>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
