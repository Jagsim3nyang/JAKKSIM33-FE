import WalkCat from "./walk-cat";
import { useLocation } from "react-router-dom";
import SleepCat from "./sleep-cat";
import WhiteCat from "./white-cat";
import flower from "@/assets/flower.png";
import flowerPurple from "@/assets/flower-purple.png";

function NarrowGrass() {
  const { pathname } = useLocation();

  const isSubmit = pathname.includes("submit");
  const isWhiteCat = pathname.includes("problems");

  return (
    <div className="h-20 w-full fixed left-0 bottom-0 bg-green">
      {isSubmit ? <SleepCat /> : isWhiteCat ? <WhiteCat /> : <WalkCat />}
      <div className="w-10 h-1 bg-grass absolute left-[10%] top-1/2" />
      <div className="w-10 h-1 bg-grass absolute left-1/2 top-1/2" />
      <div className="w-10 h-1 bg-grass absolute left-1/3 bottom-1/3" />
      <div className="w-10 h-1 bg-grass absolute left-2/3 top-1/3" />
      <div className="w-10 h-1 bg-grass absolute left-1/4 top-1/4" />
      <div className="w-10 h-1 bg-grass absolute left-3/4 bottom-1/4" />
      <div className="w-10 h-1 bg-grass absolute right-[10%] top-1/2" />
      <img src={flower} alt="꽃" width={50} className="absolute right-20 -translate-y-24" />
      <img
        src={flowerPurple}
        alt="보라색 꽃"
        width={50}
        className="absolute right-32 -scale-x-100 -translate-y-16"
      />
    </div>
  );
}

export default NarrowGrass;
