import { useLocation } from "react-router-dom";
import cloudLg from "@/assets/cloud-lg.png";
import cloudSm from "@/assets/cloud-sm.png";
import NarrowGrass from "./narrow-grass";
import WideGrass from "./wide-grass";

function Footer() {
  const { pathname } = useLocation();

  const isCloudShow = pathname.includes("submit") || pathname.includes("solve");
  const isWideGrass = pathname.includes("cats");

  return (
    <>
      {!isCloudShow && (
        <>
          <img src={cloudLg} alt="작은 구름 이미지" width={200} className="fixed left-24 top-20" />
          <img src={cloudSm} alt="큰 구름 이미지" width={200} className="fixed right-20 top-40" />
        </>
      )}
      {isWideGrass ? <WideGrass /> : <NarrowGrass />}
    </>
  );
}

export default Footer;
