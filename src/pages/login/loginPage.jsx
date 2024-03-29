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

import Introduce from "~/components/Login/Introduce";
import previewCapture from "~/assets/images/login/preview.png";
import fundDetailCapture from "~/assets/images/login/fundDetail.png";
import guideCapture from "~/assets/images/login/guide.png";
import quizCapture from "~/assets/images/login/quiz.png";
import recommendCapture from "~/assets/images/login/recommend.png";
import Logo from "~/components/Login/Logo";

export default function LoginPage() {
  const userState = useSelector((state) => state.user13th);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infos = [
    {
      title1: "테스트1",
      title2: "테스트2",
      subTitle: "서브 테스트",
      img: previewCapture,
    },
    {
      title1: "테스트1",
      title2: "테스트2",
      subTitle: "서브 테스트",
      img: recommendCapture,
    },
    {
      title1: "테스트1",
      title2: "테스트2",
      subTitle: "서브 테스트",
      img: quizCapture,
    },
    {
      title1: "테스트1",
      title2: "테스트2",
      subTitle: "서브 테스트",
      img: previewCapture,
    },
  ];

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
        {infos.map((ele, idx) => (
          <SwiperSlide>
            <Introduce
              title1={ele.title1}
              title2={ele.title2}
              subTitle={ele.subTitle}
              img={ele.img}
            />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Logo />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center mt-16">
        <img className="h-10" src={loginImg} onClick={() => clickLoginBtn()} />
      </div>
    </div>
  );
}
