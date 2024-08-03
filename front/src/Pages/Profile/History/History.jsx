import { useState } from "react"
import Container from "../../../Components/ui/container.jsx"
import Header from "../../../Components/ui/Header"
import Pagination from "../../../Components/ui/Pagination.jsx"
import Table from "./Table.jsx"
import HistorySkeleton from "../../../Components/Skeletons/HistorySkeleton.jsx"

const History = () => {
  const [page, setPage] = useState(1);
  const isLoading = false;
  if (isLoading) {
    return <HistorySkeleton />;
  }
  return (
    <Container>
      <Header title="السجل" desc="الفيديوهات التي تمت مشاهداتها" />
      <Table />
      <Pagination page={setPage} totalPages="50" />
    </Container>
  )
}

export default History