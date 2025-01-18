import NavBar from "@/components/problems/nav-bar";
import { ProblemResponseDTO } from "@/models/problem";
import { Navigate, useLocation, useParams } from "react-router-dom";

function SolveProblem() {
  const { id } = useParams();
  const { state }: { state: ProblemResponseDTO } = useLocation();

  const problemId = parseInt(id as string);

  if (isNaN(problemId) || !state) {
    return <Navigate to="/bad-request" replace />;
  }

  return (
    <div className="px-12 py-4 space-y-4">
      <NavBar />
      <section className="space-y-1">
        <h1 className="text-4xl">{state.title}</h1>
        <p className="text-2xl">{state.description}</p>
      </section>
      <section className="space-y-1">
        <h2 className="text-3xl">입력</h2>
        <p className="text-2xl">{state.inputFormat}</p>
      </section>
      <section className="space-y-1">
        <h2 className="text-3xl">출력</h2>
        <p className="text-2xl">{state.outputFormat}</p>
      </section>
      <section className="space-y-1">
        <h2 className="text-3xl">입력 예시</h2>
        <p className="text-2xl">{state.exampleInput}</p>
      </section>
      <section className="space-y-1">
        <h2 className="text-3xl">출력 예시</h2>
        <p className="text-2xl">{state.exampleOutput}</p>
      </section>
      <section className="space-y-1">
        <h2 className="text-xl">태그</h2>
        <ul className="list-disc px-3">
          {state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SolveProblem;
