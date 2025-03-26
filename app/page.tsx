import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <Pagination itemCount={100} currentPage={3} pageSize={10} />
    </div>
  );
}
