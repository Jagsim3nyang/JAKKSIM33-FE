import { useLoadingStore } from "@/lib/zusstand/loading";
import Spinner from "./spinner";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loading;
