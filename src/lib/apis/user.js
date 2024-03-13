import axios from 'axios';

export const getKakaoToken = async (code) => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', import.meta.env.VITE_KAKAO_REST_API_KEY);
    params.append('redirect_uri', import.meta.env.VITE_KAKAO_REDIRECT_URI_MAIN);
    params.append('code', code);
    console.log('code: ', code);

    const kakaoTokenUrl = `https://kauth.kakao.com/oauth/token`;

    const resp = await axios.post(kakaoTokenUrl, params, {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },});

    return resp.data;
  } catch (err) {
    console.log('err: ', err);
  }
};

export const getKakaoInfo = (token) => {};
