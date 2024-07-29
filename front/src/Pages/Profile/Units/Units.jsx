import Pagination from "../../../Components/ui/Pagination"
import UnityCard from "../../../Components/Profile/UnityCard";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import { useState } from "react";

const Units = () => {
  const [page, setPage] = useState(1);
  return (
    <Container>
        <Header title="الوحدات" desc="قم بإختيار الوحدة لعرض التفاصيل" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <UnityCard title="الباب الأول" desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية" />
        <UnityCard title="الباب الأول" desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية" />
        <UnityCard title="الباب الأول" desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية" />
        <UnityCard title="الباب الأول" desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية" />
        <UnityCard title="الباب الأول" desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية" />
        <UnityCard title="الباب الأول" desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية" />
      </div>
      <Pagination page={setPage} totalPages="50" />
    </Container>
  );
};

export default Units;
