import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <Link to="/" className="cursor-pointer z-20 sticky top-0 px-12 py-4 text-3xl">
        작심삼냥
      </Link>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
