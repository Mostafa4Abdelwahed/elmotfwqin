import Button from ".././../../Components/ui/Button";
import Container from "../../../Components/ui/container";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";
import { useGetSingleLessonQuery } from "../../../app/ApiCalls/lessonSlice";
import LessonSkeleton from "../../../Components/Skeletons/LessonSkeleton";
import { useEffect, useState } from "react";

const Lesson = () => {
  const params = useParams();
  const { data: lesson, isLoading, isError } = useGetSingleLessonQuery(params.video);
  const [videoId, setvideoId] = useState("");
  const videoSrc = {
    type: "video",
    sources: [ 
      {
        src: videoId,
        provider: "youtube",
      },
    ],
  }; 
  useEffect(()=>{
    setvideoId(lesson?.data?.attributes?.VideoId);
  },[lesson])
  if (isLoading) {
    return <LessonSkeleton />;
  }
  if (isError) {
    return <h1 className="text-4xl font-bold text-center py-7">Error</h1>
  }
  return (
    <div className="pt-7 relative mx-auto">
      <Container>
        <Plyr source={videoSrc} autoPlay />
        <p className="text-sm mt-0.5">لو الفيديو مظهرش او مشتغلش اعمل تحديث للصفحة</p>
        <Button className="mt-5 w-full">
          تعلييم كمقروء
        </Button>
      </Container>
    </div>
  );
};

export default Lesson;
