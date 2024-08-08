import { User } from '@/types/types';

export const getUser = async () => {
  try {
    const response = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      const { name } = await response.json();
      throw new Error(name);
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'TokenExpiredError') {
        localStorage.clear();
      }
    }
  }
};
