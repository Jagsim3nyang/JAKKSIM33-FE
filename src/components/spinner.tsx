const Spinner = () => {
  return (
    <div
      className="w-12 h-12 rounded-full animate-spin flex items-center justify-center"
      style={{
        background: "conic-gradient(from 180deg at 50% 50%, #FFA33D 0deg, #11111100 360deg)",
      }}
    >
      <div className="w-8 h-8 rounded-full bg-white" />
    </div>
  );
};

export default Spinner;
