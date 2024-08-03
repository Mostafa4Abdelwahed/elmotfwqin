import { useState } from "react"
import Container from "../../../Components/ui/container.jsx"
import Header from "../../../Components/ui/Header"
import Pagination from "../../../Components/ui/Pagination.jsx"
import Table from "./Table.jsx"
import HistorySkeleton from "../../../Components/Skeletons/HistorySkeleton.jsx"
import { useGetLessonsViewsQuery } from "../../../app/ApiCalls/lessonSlice.js"
import { useGetUserQuery } from "../../../app/ApiCalls/userSlice.js"

const History = () => {
  const { data:user } = useGetUserQuery();
  const [page, setPage] = useState(1);
  const { data } = useGetLessonsViewsQuery({userId: user?.id, page});
  const totalPage = data?.meta?.pagination?.pageCount;
  const isLoading = false;
  if (isLoading) {
    return <HistorySkeleton />;
  }
  return (
    <Container>
      <Header title="السجل" desc="الفيديوهات التي تمت مشاهداتها" />
      <Table histories={data?.data} />
      <Pagination page={setPage} totalPages={totalPage} />
    </Container>
  )
}

export default History