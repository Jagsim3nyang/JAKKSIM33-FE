import { useUserStore } from "@/lib/zusstand/auth";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const setUserStore = useUserStore((state) => state.setUser);

  const buttonDisabled = user.email === "" || user.password === "";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    setUserStore(user.email);
    navigate("/problems");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  return (
    <main className="gap-10">
      <Link to="/" className="text-5xl">
        작심삼냥
      </Link>
      <form onSubmit={onSubmit} className="flex flex-col gap-10 text-3xl w-2/3 max-w-half">
        <div className="space-y-6">
          <label className="flex flex-col gap-1">
            <span>이메일</span>
            <input
              id="email"
              className="border-2 border-orange py-2 px-3 rounded-lg text-lg"
              type="email"
              placeholder="이메일을 입력해주세요."
              value={user.email}
              onChange={onChange}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>비밀번호</span>
            <input
              id="password"
              className="border-2 border-orange py-2 px-3 rounded-lg text-lg"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={user.password}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <button
            disabled={buttonDisabled}
            type="submit"
            className={cn("py-2 rounded-lg bg-orange text-white", buttonDisabled && "bg-netural")}
          >
            로그인
          </button>
          <button type="button" className="py-2 rounded-lg border-2 border-orange bg-white">
            회원가입
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
