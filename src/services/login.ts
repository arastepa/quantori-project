import { toast } from 'react-toastify';

export const login = async (data: { username: string; psw: string }) => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.username,
        password: data.psw,
      }),
    });

    if (!response.ok) {
      throw new Error('something went wrong');
    }

    const token: string = (await response.json()).token;
    localStorage.setItem('token', token);
    return true;
  } catch (error) {
    if (error instanceof Error) toast.error('something went wrong try again');
    return false;
  }
};
