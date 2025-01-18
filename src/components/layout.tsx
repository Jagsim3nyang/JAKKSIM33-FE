import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <div className="h-20 w-full fixed left-0 bottom-0 bg-green">
        <div className="w-10 h-1 bg-grass absolute left-[10%] top-1/2" />
        <div className="w-10 h-1 bg-grass absolute left-1/2 top-1/2" />
        <div className="w-10 h-1 bg-grass absolute left-1/3 bottom-1/3" />
        <div className="w-10 h-1 bg-grass absolute left-2/3 top-1/3" />
        <div className="w-10 h-1 bg-grass absolute left-1/4 top-1/4" />
        <div className="w-10 h-1 bg-grass absolute left-3/4 bottom-1/4" />
        <div className="w-10 h-1 bg-grass absolute right-[10%] top-1/2" />
      </div>
    </>
  );
}

export default Layout;
