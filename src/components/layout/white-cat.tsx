import whiteCat from "@/assets/white.png";
import fish from "@/assets/fish.png";

function WhiteCat() {
  return (
    <>
      <img
        src={whiteCat}
        alt="고양이"
        width={150}
        className="absolute -translate-y-1/2 z-10 -scale-x-100 left-16"
      />
      <img
        src={fish}
        alt="생선"
        width={60}
        className="absolute -translate-y-1/2 z-10 -scale-x-100 top-10 left-52"
      />
    </>
  );
}

export default WhiteCat;
