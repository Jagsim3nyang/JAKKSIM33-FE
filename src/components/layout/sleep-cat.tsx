import sleepCat from "@/assets/brown-sleep.png";
import zz from "@/assets/zz.png";
import { useEffect, useState } from "react";

function SleepCat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow((prev) => !prev);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {show && (
        <img
          src={zz}
          alt="zz"
          width={40}
          height={40}
          className="right-20 absolute bottom-[calc(100%+24px)] z-20"
        />
      )}
      <img
        src={sleepCat}
        alt="고양이"
        width={150}
        className="right-14 absolute -translate-y-1/3 z-10"
      />
    </>
  );
}

export default SleepCat;
