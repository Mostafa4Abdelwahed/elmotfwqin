import Container from "../../../Components/ui/container"
import UnityCard from "../../../Components/Profile/UnityCard"
import Header from "../../../Components/ui/Header";
import Pagination from "../../../Components/ui/Pagination"
import { useState } from "react";

const WatchLater = () => {
  const [page, setPage] = useState(1)
  return (
    <Container>
      <Header title="المشاهدة لاحقا" desc="الوحدات المحفوظة للمشاهدة لاحقا" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
      </div>
      <Pagination page={setPage} totalPages="50" />
    </Container>
  );
};

export default WatchLater;
