import { useState } from "react";
import CodeEditor from "@/components/code-editor";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { LANGUAGE } from "@/constants/code-editor";
import NavBar from "@/components/problems/nav-bar";
import { mockApi } from "@/apis";
import { useFetch } from "@/hooks/use-fetch";
import { METHOD } from "@/constants/api";

interface BodyProps {
  problemId: number;
  userCode: { code: string; language: string };
}

interface SubmitCodeResponseDTO {
  earnedCoins: number;
  result: "true" | "false";
  solvedAt: number;
}

function SubmitCode() {
  const [code, setCode] = useState("");
  const { fetchData } = useFetch<BodyProps, SubmitCodeResponseDTO>();

  const { id } = useParams();

  const navigate = useNavigate();

  const problemId = parseInt(id as string);

  if (isNaN(problemId)) {
    return <Navigate to="/bad-request" replace />;
  }

  const onSubmit = async () => {
    const res = await fetchData(
      "/submit-solution",
      { problemId, userCode: { code, language: "Python" } },
      METHOD.POST
    );
    console.log(res);
    if (res.status === 200) {
      navigate(`/problems/results/${problemId}`, {
        state: {
          codeLength: code.length,
          submitId: Math.floor(res.data.solvedAt),
          result: Boolean(res.data.result),
          language: LANGUAGE.PYTHON,
        },
      });
    }
    // const res = await mockApi.post(`/submit-code/${problemId}`, { code });
    // if (res.status === 200) {
    //   navigate(`/problems/results/${problemId}`);
    // }
  };

  return (
    <main className="py-4" style={{ justifyContent: "space-between" }}>
      <div className="w-full px-12 py-4">
        <NavBar />
      </div>
      <CodeEditor language={LANGUAGE.PYTHON} value={code} onChange={setCode} />
      <button
        className="self-start bg-orange100 text-white py-2 px-3 rounded-lg mx-12 mt-4 hover:bg-orange200"
        onClick={onSubmit}
      >
        제출하기
      </button>
    </main>
  );
}

export default SubmitCode;
