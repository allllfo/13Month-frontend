import { createBrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream
import FindOutPage from "~/pages/products/findout/page";
import IndexPage from "~/components/Main/IndexPage";
import Login from "~/components/Main/Login";
import MainPage from "~/components/Main/MainPage";
import MyPage from "~/components/Main/MyPage";
import EasyETF from "~/components/EasySeries/EasyETF";
import EasyFound from "~/components/EasySeries/EasyFound";
import EasyMain from "~/components/EasySeries/EasyMain";
import EasyTax from "~/components/EasySeries/EasyTax";
=======
import FindOutPage from "../pages/products/findout/page";
import IndexPage from "../pages/Main/IndexPage";
import Login from "../pages/Main/Login";
import MainPage from "../pages/Main/MainPage";
import MyPage from "../pages/Main/MyPage";
import EasyETF from "../pages/EasySeries/EasyETF";
import EasyFound from "../pages/EasySeries/EasyFound";
import EasyMain from "../pages/EasySeries/EasyMain";
import EasyTax from "../pages/EasySeries/EasyTax";
import PreviewMain from "../pages/preview/PreviewMain";
>>>>>>> Stashed changes

export const mainRoutes = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/EasyETF",
    element: <EasyETF />,
  },
  {
    path: "/EasyFound",
    element: <EasyFound />,
  },
  {
    path: "/EasyMain",
    element: <EasyMain />,
  },
  {
    path: "/EasyTax",
    element: <EasyTax />,
  },

  {
    path: "/product/findout",
    element: <FindOutPage />,
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
