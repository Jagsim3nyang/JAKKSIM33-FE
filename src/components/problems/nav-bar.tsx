import { cn } from "@/utils/cn";
import { Link, useLocation, useParams } from "react-router-dom";

function NavBar() {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <nav className="space-x-4">
      <Link
        className={cn(
          "border-2 border-orange100 rounded-lg py-2 px-3",
          pathname.includes("solve") && "bg-orange200 text-white"
        )}
        to={`/problems/solve/${id}`}
      >
        {id}번
      </Link>
      <Link
        className={cn(
          "border-2 border-orange100 rounded-lg py-2 px-3",
          pathname.includes("submit") && "bg-orange200 text-white"
        )}
        to={`/problems/submit/${id}`}
      >
        제출
      </Link>
      <Link
        className={cn(
          "border-2 border-orange100 rounded-lg py-2 px-3",
          pathname.includes("results") && "bg-orange200 text-white"
        )}
        to={`/problems/results/${id}`}
      >
        제출 결과
      </Link>
    </nav>
  );
}

export default NavBar;
