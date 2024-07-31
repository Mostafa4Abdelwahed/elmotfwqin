import Button from ".././../../Components/ui/Button";
import Container from "../../../Components/ui/container";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";
import { useGetSingleLessonQuery } from "../../../app/ApiCalls/lessonSlice";
import LessonSkeleton from "../../../Components/Skeletons/LessonSkeleton";

const Lesson = () => {
  const params = useParams();
  const { data: lesson, isLoading, isError } = useGetSingleLessonQuery(params.video);
  const videoId = lesson?.data?.attributes?.VideoId;
  const videoSrc = {
    type: "video",
    sources: [ 
      {
        src: videoId || "",
        provider: "youtube",
      },
    ],
  }; 
  if (isLoading) {
    return <LessonSkeleton />;
  }
  return (
    <div className="pt-7 relative mx-auto">
      <Container>
        <Plyr source={videoSrc} />
        <Button className="mt-5 w-full">
          تعلييم كمقروء
        </Button>
      </Container>
    </div>
  );
};

export default Lesson;
