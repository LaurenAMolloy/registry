import { useLoaderData } from "react-router"

export default function SearchPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>SearchPage</div>
  )
}
