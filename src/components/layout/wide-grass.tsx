import SleepCat from "./sleep-cat";
import sam from "@/assets/sam.png";
import WhiteCat from "./white-cat";

function WideGrass() {
  return (
    <div className="h-56 w-full fixed left-0 bottom-0 bg-green">
      <div className="w-10 h-1 bg-grass absolute left-[10%] top-1/2" />
      <div className="w-10 h-1 bg-grass absolute left-1/2 top-1/2" />
      <div className="w-10 h-1 bg-grass absolute left-1/3 bottom-1/3" />
      <div className="w-10 h-1 bg-grass absolute left-2/3 top-1/3" />
      <div className="w-10 h-1 bg-grass absolute left-1/4 top-1/4" />
      <div className="w-10 h-1 bg-grass absolute left-3/4 bottom-1/4" />
      <div className="w-10 h-1 bg-grass absolute right-[10%] top-1/2" />
      <SleepCat width={200} />
      <WhiteCat withoutFish width={200} />
      <img src={sam} alt="고양이" width={200} className="absolute left-1/2 -translate-y-1/2 z-10" />
    </div>
  );
}

export default WideGrass;
