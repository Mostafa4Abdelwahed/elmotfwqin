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
  const { data, isLoading, isError } = useGetLessonsViewsQuery({userId: user?.id, page});
  const totalPage = data?.meta?.pagination?.pageCount;
  if (isLoading) {
    return <HistorySkeleton />;
  }
  if (isError){
    return <h1 className="text-4xl text-center font-bold">خطاء في تحميل السجل</h1>
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