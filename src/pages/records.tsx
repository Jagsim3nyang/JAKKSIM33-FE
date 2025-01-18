import Loading from "@/components/loading";
import { METHOD } from "@/constants/api";
import { useFetch } from "@/hooks/use-fetch";
import { RecordResponseDTO } from "@/models/record";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

function Records() {
  const { fetchData } = useFetch<unknown, RecordResponseDTO>();
  const [records, setRecords] = useState({
    current_streak: 0,
    highest_streak: 0,
  });

  const isNoStreak = records.current_streak === 0;
  const isStreakExist = records.current_streak > 0;
  const currentStreak = records.current_streak < 0 ? 0 : records.current_streak % 3;
  const isMiddleStreak = currentStreak !== 1;

  useEffect(() => {
    (async () => {
      const res = await fetchData("/daily-streak", undefined, METHOD.GET);
      setRecords(res.data);
    })();
  }, []);

  return (
    <Loading>
      <main className="gap-10">
        <div className="space-y-2 text-center">
          <h1 className="text-5xl">연속 {records.current_streak}일 째</h1>
          <h2 className="text-3xl">최고기록 {records.highest_streak}일 째</h2>
        </div>
        <div className="flex items-center min-w-96">
          <div
            className={cn(
              "min-w-10 min-h-10 rounded-full bg-netural flex justify-center items-center z-10",
              (isNoStreak || currentStreak >= 0) && "bg-orange200"
            )}
          >
            <div className="w-6 h-6 rounded-full bg-white" />
          </div>
          <div
            className={cn(
              "h-3 bg-netural w-full -mx-2",
              isStreakExist && isMiddleStreak && "bg-orange200"
            )}
          />
          <div
            className={cn(
              "min-w-10 min-h-10 rounded-full bg-netural flex justify-center items-center z-10",
              isStreakExist && isMiddleStreak && "bg-orange200"
            )}
          >
            <div className="w-6 h-6 rounded-full bg-white" />
          </div>
          <div
            className={cn(
              "h-3 bg-netural w-full -mx-2",
              isStreakExist && currentStreak === 0 && "bg-orange200"
            )}
          />
          <div
            className={cn(
              "min-w-10 min-h-10 rounded-full bg-netural flex justify-center items-center z-10",
              isStreakExist && currentStreak === 0 && "bg-orange200"
            )}
          >
            <div className="w-6 h-6 rounded-full bg-white" />
          </div>
        </div>
      </main>
    </Loading>
  );
}

export default Records;
