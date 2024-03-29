import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  setUserId,
  setkakaoToken,
  setNickname,
  setProfileImageUrl,
  removeUser,
} from "../../store/reducers/user";
import {
  getCodeWithKakaoLogin,
  getKakaoToken,
  getKakaoInfo,
  findUserWithNickname,
  createUser,
} from "../../lib/apis/user";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";

import loginImg from "~/assets/images/login/kakao_login_large_wide_2.png";

import Services from "~/components/Login/Services";
import Recommend from "~/components/Login/Recommend";
import GuideAndQuiz from "~/components/Login/GuideAndQuiz";
import Logo from "~/components/Login/Logo";

export default function LoginPage() {
  const userState = useSelector((state) => state.user13th);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.nickname !== "") {
      navigate("/main");
    }

    const code = new URL(window.location.href).searchParams.get("code");

    if (code !== null) {
      getKakaoToken(code)
        .then((token) => {
          dispatch(setkakaoToken(token));

          return getKakaoInfo(token);
        })
        .then(async (info) => {
          const kakaoProfile = info.kakao_account.profile;
          const foundUser = await findUserWithNickname(kakaoProfile.nickname);
          let userId = foundUser._id;

          if (foundUser._id === undefined) {
            const createdUser = await createUser(kakaoProfile.nickname);
            userId = createdUser._id;
          }

          dispatch(setNickname(kakaoProfile.nickname));
          dispatch(setProfileImageUrl(kakaoProfile.profile_image_url));
          dispatch(setUserId(userId));
          navigate("/main");
        })
        .catch((err) => {
          console.log("err: ", err);
          dispatch(removeUser());
        });
    }
  }, []);

  const clickLoginBtn = async () => {
    getCodeWithKakaoLogin();
  };

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Mousewheel]}
        className=""
        style={{ height: "580px" }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        centeredSlides={true}
        mousewheel={true}
      >
        <SwiperSlide>
          <Services />
        </SwiperSlide>
        <SwiperSlide>
          <Recommend />
        </SwiperSlide>
        <SwiperSlide>
          <GuideAndQuiz />
        </SwiperSlide>
        <SwiperSlide>
          <Logo />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center mt-8">
        <img className="h-10" src={loginImg} onClick={() => clickLoginBtn()} />
      </div>
    </div>
  );
}
