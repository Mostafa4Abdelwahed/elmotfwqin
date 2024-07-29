import Header from "../../../Components/ui/Header"
import LessonCard from "../../../Components/Profile/LessonCard";
import Container from "../../../Components/ui/container"
import Pagination from "../../../Components/ui/Pagination";
import { useState } from "react";

const Lessons = () => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <Header title="الدروس" desc="قم بإختيار الدرس لعرض تفاصيلة" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <LessonCard unity="الباب الاول" title="درس التفاعل الكميائي" desc="شرح درس التفاعل الكيميائي مع حل مسائل عملية علي الدرس." />
      <LessonCard unity="الباب الاول" title="درس التفاعل الكميائي" desc="شرح درس التفاعل الكيميائي مع حل مسائل عملية علي الدرس." />
      <LessonCard unity="الباب الاول" title="درس التفاعل الكميائي" desc="شرح درس التفاعل الكيميائي مع حل مسائل عملية علي الدرس." />
      <LessonCard unity="الباب الاول" title="درس التفاعل الكميائي" desc="شرح درس التفاعل الكيميائي مع حل مسائل عملية علي الدرس." />
      <LessonCard unity="الباب الاول" title="درس التفاعل الكميائي" desc="شرح درس التفاعل الكيميائي مع حل مسائل عملية علي الدرس." />
      <LessonCard unity="الباب الاول" title="درس التفاعل الكميائي" desc="شرح درس التفاعل الكيميائي مع حل مسائل عملية علي الدرس." />
      </div>
      <Pagination page={setPage} totalPages="50" />
    </Container>
  );
};

export default Lessons;
