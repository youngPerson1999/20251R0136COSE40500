const timeCalculate = (
  fn: (arr: number[]) => number[],
  arr: number[]
): { result: number[]; duration: number } => {
  const arrCopy = [...arr]; // 원본 배열을 복사해 사용
  const start = performance.now();
  const result = fn(arrCopy);
  const end = performance.now();
  return { result, duration: end - start };
};

export default timeCalculate;
