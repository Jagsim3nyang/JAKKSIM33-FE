import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import logo from "/logo.png";

function Layout() {
  return (
    <>
      <Link
        to="/"
        className="cursor-pointer z-20 sticky top-0 px-12 py-4 text-3xl flex items-center gap-2"
      >
        <img src={logo} alt="로고" className="w-6 h-5" />
        작심삼냥
      </Link>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
