import { mockApi } from "@/apis";
import NavBar from "@/components/problems/nav-bar";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

interface ResultResponseDTO {
  result: boolean;
  language: string;
  codeLength: string;
  submitId: string;
}

function Result() {
  const { id } = useParams();
  // const [result, setResult] = useState<ResultResponseDTO[]>([]);

  const { state } = useLocation();
  if (!state) return <Navigate to="/bad-request" replace />;

  // useEffect(() => {
  //   (async () => {
  //     const res = await mockApi.get(`/problem/results/${id}`);
  //     console.log(res.data.list);
  //     setResult(res.data.list);
  //   })();
  // }, []);

  return (
    <main>
      <div className="py-4">
        <NavBar />
      </div>
      <table className="table-fixed w-96 text-2xl border-collapse">
        <thead>
          <tr className="table-row text-center">
            <th className="table-cell border border-black py-2 w-16">문제</th>
            <th className="table-cell border border-black py-2 w-16">결과</th>
            <th className="table-cell border border-black py-2 w-20">언어</th>
            <th className="table-cell border border-black py-2 w-24">코드 길이</th>
            <th className="table-cell border border-black py-2 w-36">제출 번호</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row text-center">
            <td className="table-cell border border-black py-2">{id}번</td>
            <td className="table-cell border border-black py-2">{state.result ? "O" : "X"}</td>
            <td className="table-cell border border-black py-2">{state.language}</td>
            <td className="table-cell border border-black py-2">{state.codeLength} B</td>
            <td className="table-cell border border-black py-2">{state.submitId}</td>
          </tr>
          {/* {result.map((res) => (
            <tr className="table-row text-center" key={res.submitId}>
              <td className="table-cell border border-black py-2">{id}번</td>
              <td className="table-cell border border-black py-2">{res.result ? "O" : "X"}</td>
              <td className="table-cell border border-black py-2">{res.language}</td>
              <td className="table-cell border border-black py-2">{res.codeLength} B</td>
              <td className="table-cell border border-black py-2">{res.submitId}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </main>
  );
}

export default Result;
