import whiteCat from "@/assets/white.png";

function WhiteCat() {
  return (
    <img
      src={whiteCat}
      alt="고양이"
      width={150}
      className="absolute -translate-y-1/2 z-10 -scale-x-100 left-16"
    />
  );
}

export default WhiteCat;
