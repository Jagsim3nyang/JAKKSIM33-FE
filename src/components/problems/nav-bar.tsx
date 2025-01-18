import { cn } from "@/utils/cn";
import { Link, useLocation, useParams } from "react-router-dom";

function NavBar() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const isSolvePage = pathname.includes("solve");

  return (
    <nav className="space-x-4">
      <Link
        className={cn(
          "border-2 border-orange100 rounded-lg py-2 px-3",
          isSolvePage && "bg-orange200 text-white"
        )}
        to={`/problems/solve/${id}`}
      >
        {id}번
      </Link>
      <Link
        className={cn(
          "border-2 border-orange100 rounded-lg py-2 px-3",
          !isSolvePage && "bg-orange200 text-white"
        )}
        to={`/problems/submit/${id}`}
      >
        제출
      </Link>
    </nav>
  );
}

export default NavBar;
