export interface ProblemResponseDTO {
  problemId: number;
  title: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  exampleInput: string;
  exampleOutput: string;
  tags: string[];
}
