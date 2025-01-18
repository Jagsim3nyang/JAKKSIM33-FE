import { mockApi } from "@/apis";
import Loading from "@/components/loading";
import { METHOD } from "@/constants/api";
import { PROBLEM_CATEGORY, PROBLEM_DIFFICULTY, PROBLEM_LANGUAGE } from "@/constants/problem";
import { useFetch } from "@/hooks/use-fetch";
import { ProblemResponseDTO } from "@/models/problem";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const selects = [
  {
    name: "category",
    placeholder: "분류",
    options: Object.entries(PROBLEM_CATEGORY).map(([key, value]) => ({
      name: value,
      value: key,
    })),
  },
  {
    name: "language",
    placeholder: "언어",
    options: Object.entries(PROBLEM_LANGUAGE).map(([key, value]) => ({
      name: value,
      value: key,
    })),
  },
  {
    name: "difficulty",
    placeholder: "난이도",
    options: Object.entries(PROBLEM_DIFFICULTY).map(([key, value]) => ({
      name: value,
      value: key,
    })),
  },
];

function Problems() {
  const { fetchData } = useFetch<{ [key: string]: string }, ProblemResponseDTO>();

  const [problem, setProblem] = useState<{
    [key: string]: string;
  }>({
    category: "",
    language: "",
    difficulty: "",
  });

  const navigate = useNavigate();

  const buttonDisabled =
    problem.category === "" || problem.language === "" || problem.difficulty === "";

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProblem({
      ...problem,
      [name]: value,
    });
  };

  const onCreateProblem = async () => {
    const res = await fetchData("/random-problem", problem, METHOD.POST);
    console.log(res);
    if (res.status === 200) {
      navigate(`/problems/solve/${res.data.problemId}`, { state: res.data });
    }
    // const res = await mockApi.post("/random-problem", problem);
    // if (res.status === 200) {
    //   navigate(`/problems/solve/${res.data.problemId}`, { state: res.data });
    // }
  };

  return (
    <Loading>
      <main className="gap-10">
        <h1 className="text-5xl">문제 생성하기</h1>
        <section className="flex flex-col gap-5">
          {selects.map((select) => (
            <select
              key={select.name}
              className="border border-black py-2 px-3 rounded-lg w-64 text-xl"
              name={select.name}
              value={problem[select.name]}
              onChange={onChange}
            >
              <option value="">{select.placeholder}</option>
              {select.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          ))}
        </section>
        <button
          disabled={buttonDisabled}
          type="submit"
          className={cn(
            "py-2 rounded-lg bg-orange100 text-white w-64 text-3xl",
            buttonDisabled && "bg-netural",
            !buttonDisabled && "hover:bg-orange200"
          )}
          onClick={onCreateProblem}
        >
          생성하기
        </button>
      </main>
    </Loading>
  );
}

export default Problems;
