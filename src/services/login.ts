export const login = async (data: { username: string; psw: string }) => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: data.username,
      password: data.psw,
    }),
  });

  const token: string = (await response.json()).token;
  localStorage.setItem('token', token);
};
