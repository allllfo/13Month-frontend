import axios from 'axios';

export async function kakaoLogin() {
  try {
    const resp = await axios.get('/api/user/login');
    console.log(resp);
  } catch (err) {
    console.log('err: ', err);
  }
}
