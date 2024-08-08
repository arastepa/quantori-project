import { User } from '@/types/types';

export const getUser = async () => {
  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const user: User = await response.json();
  return user;
};
