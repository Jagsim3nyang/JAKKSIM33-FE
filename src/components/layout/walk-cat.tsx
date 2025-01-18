import sam from "@/assets/sam.png";
import samWalk from "@/assets/sam-walk.png";
import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";

function WalkCat() {
  const [cat, setCat] = useState(sam);
  const [left, setLeft] = useState(0);

  const maxWidth = useRef(window.innerWidth - 30);
  const direction = useRef("right");

  useEffect(() => {
    const timer = setInterval(() => {
      setLeft((prev) => {
        if (prev % 50 === 0) {
          setCat((prev) => (prev === sam ? samWalk : sam));
        }
        if (direction.current === "right" && prev === maxWidth.current) {
          direction.current = "left";
          return prev - 110;
        }
        if (direction.current === "left" && prev === -110) {
          direction.current = "right";
          return prev;
        }
        return direction.current === "right" ? prev + 1 : prev - 1;
      });
    }, 1);

    window.addEventListener("resize", () => {
      maxWidth.current = window.innerWidth - 30;
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute text-center -translate-y-1/2 z-10 transition-all" style={{ left }}>
      <span className="text-2xl">LV.5 다 큰 애기</span>
      <img
        src={cat}
        alt="고양이"
        width={150}
        className={cn("-scale-x-100", direction.current === "left" && "scale-x-100")}
      />
    </div>
  );
}

export default WalkCat;
