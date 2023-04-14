import { redirect } from "@remix-run/node";
export const loader = () => {
  const randomId =  Math.random().toString(36).slice(-6);
  throw redirect(`/room/${randomId}`);
}
export default function Index() {
  return null;
}
