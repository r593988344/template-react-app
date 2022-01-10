/** @format */

// 解析 url中的 参数
export default function useQuery(search: string): URLSearchParams {
  return new URLSearchParams(search);
}
