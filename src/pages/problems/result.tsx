import NavBar from "@/components/problems/nav-bar";
import { Navigate, useLocation, useParams } from "react-router-dom";

function Result() {
  const { id } = useParams();

  const { state } = useLocation();
  if (!state) return <Navigate to="/bad-request" replace />;

  return (
    <main>
      <div className="py-4">
        <NavBar />
      </div>
      <table className="flex flex-col text-2xl">
        <thead>
          <tr className="flex text-center">
            <th className="border border-black min-w-24 py-2">문제</th>
            <th className="border border-black min-w-24 py-2">결과</th>
            <th className="border border-black min-w-24 py-2">언어</th>
            <th className="border border-black min-w-24 py-2">코드 길이</th>
            <th className="border border-black min-w-24 py-2">제출 번호</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex text-center">
            <td className="border border-black min-w-24 py-2">{id}번</td>
            <td className="border border-black min-w-24 py-2">{state.result ? "O" : "X"}</td>
            <td className="border border-black min-w-24 py-2">{state.language}</td>
            <td className="border border-black min-w-24 py-2">{state.codeLength} B</td>
            <td className="border border-black min-w-24 py-2">{state.submitId}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Result;
