import cloudLg from "@/assets/cloud-lg.png";
import cloudSm from "@/assets/cloud-sm.png";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <img src={cloudSm} alt="작은 구름 이미지" width={150} className="fixed left-20 top-16" />
      <img src={cloudLg} alt="큰 구름 이미지" width={150} className="fixed right-20 top-40" />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
