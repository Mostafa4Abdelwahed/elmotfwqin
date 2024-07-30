import Button from ".././../../Components/ui/Button";
import Container from "../../../Components/ui/container";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";
import { useGetSingleLessonQuery } from "../../../app/ApiCalls/lessonSlice";

const Lesson = () => {
  const params = useParams();
  const { data: lesson, isLoading, isError } = useGetSingleLessonQuery(params.video);
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: lesson?.data?.attributes?.VideoId,
        provider: "youtube",
      },
    ],
  };
  if (isLoading) {
    return <h1 className="text-2xl text-center mt-5">جاري التحميل...</h1>
  }
  console.log(lesson?.data?.attributes?.VideoId);
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
