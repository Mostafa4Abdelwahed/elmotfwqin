import Header from "../../../Components/ui/Header";
import LessonCard from "../../../Components/Profile/LessonCard";
import Container from "../../../Components/ui/container";
import { useGetAllLessonsQuery } from "../../../app/ApiCalls/lessonSlice";
import { useParams } from "react-router-dom";
import LessonsSkeleton from "../../../Components/Skeletons/LessonsSkeleton";
// import { useGetAllQuizesByUnitySlugQuery } from "../../../app/ApiCalls/quizSlice";
// import QuizCard from "../../../Components/Profile/QuizCard";

const Lessons = () => {
  const params = useParams();
  const {
    data: lessons,
    isLoading,
    isError,
  } = useGetAllLessonsQuery(params.unity);
  if (isLoading) {
    return <LessonsSkeleton />;
  }
  if (isError){
    return <h1 className="text-4xl text-center font-bold">خطاء في تحميل الفيديوهات</h1>
  }
  return (
    <Container>
      <Header title="الدروس" desc="قم بإختيار الدرس لعرض تفاصيلة" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
        {lessons?.data?.map((lesson, key) => {
          return <LessonCard key={key} lesson={lesson} />;
        })}
        {/* {quizes?.data?.map((quiz, key) => {
          return <QuizCard key={key} quiz={quiz} /> ;
        })} */}
      </div>
    </Container>
  );
};

export default Lessons;
