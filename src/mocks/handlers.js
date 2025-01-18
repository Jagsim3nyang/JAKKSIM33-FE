import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://example.com/api/daily-streak", () => {
    return HttpResponse.json({
      current_streak: 5,
      highest_streak: 10,
    });
  }),
  http.post("https://example.com/api/random-problem", () => {
    return HttpResponse.json({
      problemId: "1",
    });
  }),
  http.get("https://example.com/api/problems/1", () => {
    return HttpResponse.json({
      problemId: "1",
      title: "소수 판별",
      description: "주어진 정수가 소수인지 판별하세요.",
      inputFormat: "첫 번째 줄에 정수 N이 주어집니다. (2 <= N <= 10^6)",
      outputFormat: "소수이면 YES, 아니면 NO를 출력합니다.",
      exampleInput: "7",
      exampleOutput: "YES",
      tags: ["Math"],
    });
  }),
  http.post("https://example.com/api/submit-code/1", () => {
    return HttpResponse.json({
      message: "제출 완료",
    });
  }),
  http.get("https://example.com/api/problem/results/1", () => {
    return HttpResponse.json({
      list: [
        {
          result: true,
          language: "Python",
          codeLength: "252",
          submitId: "2025-01-19 04:32:10",
        },
      ],
    });
  }),
];
