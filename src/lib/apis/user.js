import axios from 'axios';

export const getKakaoToken = async (code) => {
  console.log('getAccessToken');

  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', import.meta.env.VITE_KAKAO_REST_API_KEY);
    params.append('redirect_uri', import.meta.env.VITE_KAKAO_REDIRECT_URI);
    params.append('code', code);

    const kakaoTokenUrl = `https://kauth.kakao.com/oauth/token`;

    const resp = await axios.post(kakaoTokenUrl, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    console.log('resp.data: ', resp.data);
  } catch (err) {
    console.log('err: ', err);
  }
};
