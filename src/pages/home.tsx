import { useUserStore } from "@/lib/zusstand/auth";
import { Link } from "react-router-dom";

function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <main className="gap-10">
      <h1 className="text-5xl">작심삼냥</h1>
      <Link
        to={user ? "/problems" : "/login"}
        className="text-4xl border-4 border-dotted border-orange py-2 px-6 rounded-xl"
      >
        문제 풀러 가기
      </Link>
      <div className="flex gap-5">
        <Link
          to={user ? "/records" : "/login"}
          className="text-2xl border-4 border-pink py-2 px-6 rounded-lg"
        >
          나의 기록
        </Link>
        <Link
          to={user ? "/cats" : "/login"}
          className="text-2xl border-4 border-orange py-2 px-6 rounded-lg"
        >
          고양이
        </Link>
      </div>
    </main>
  );
}

export default Home;
