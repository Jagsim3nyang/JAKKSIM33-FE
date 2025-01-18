import sam from "@/assets/sam.png";
import samWalk from "@/assets/sam-walk.png";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

function Footer() {
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
          console.log(direction.current, "zz");
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
    <div className="h-20 w-full fixed left-0 bottom-0 bg-green">
      <img
        src={cat}
        alt="고양이"
        width={150}
        className={cn(
          "absolute -translate-y-1/2 z-10 -scale-x-100 transition-all",
          direction.current === "left" && "scale-x-100"
        )}
        style={{ left }}
      />
      <div className="w-10 h-1 bg-grass absolute left-[10%] top-1/2" />
      <div className="w-10 h-1 bg-grass absolute left-1/2 top-1/2" />
      <div className="w-10 h-1 bg-grass absolute left-1/3 bottom-1/3" />
      <div className="w-10 h-1 bg-grass absolute left-2/3 top-1/3" />
      <div className="w-10 h-1 bg-grass absolute left-1/4 top-1/4" />
      <div className="w-10 h-1 bg-grass absolute left-3/4 bottom-1/4" />
      <div className="w-10 h-1 bg-grass absolute right-[10%] top-1/2" />
    </div>
  );
}

export default Footer;
