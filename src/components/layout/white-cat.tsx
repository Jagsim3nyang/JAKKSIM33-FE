import whiteCat from "@/assets/white.png";
import fish from "@/assets/fish.png";

interface WhiteCatProps {
  width?: number;
  withoutFish?: boolean;
}

function WhiteCat({ width = 150, withoutFish = false }: WhiteCatProps) {
  return (
    <>
      <img
        src={whiteCat}
        alt="고양이"
        width={width}
        className="absolute -translate-y-1/2 z-10 -scale-x-100 left-16"
      />
      {!withoutFish && (
        <img
          src={fish}
          alt="생선"
          width={60}
          className="absolute -translate-y-1/2 z-10 -scale-x-100 top-10 left-52"
        />
      )}
    </>
  );
}

export default WhiteCat;
