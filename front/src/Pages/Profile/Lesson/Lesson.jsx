import { Button } from "@chakra-ui/react";
import Container from "../../../Components/ui/container";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router-dom";
import { useAddLessonToViewsMutation, useCheckLessonIsViewedQuery, useGetSingleLessonQuery } from "../../../app/ApiCalls/lessonSlice";
import LessonSkeleton from "../../../Components/Skeletons/LessonSkeleton";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../../app/ApiCalls/userSlice";

const Lesson = () => {
  const params = useParams();
  const { data:user } = useGetUserQuery();
  const { data } = useCheckLessonIsViewedQuery({userId: user?.id, videoId:params.video})
  const [addToLesonToViews] = useAddLessonToViewsMutation();
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

  const addToHistoryhandler = ()=>{
    addToLesonToViews({userId: user?.id,videoId: params.video})
  }

  useEffect(()=>{
    setvideoId(lesson?.data?.attributes?.VideoId);
  },[lesson])

  if (isLoading) {
    return <LessonSkeleton />;
  }
  if (isError){
    return <h1 className="text-4xl text-center font-bold">خطاء في تحميل الفيديو</h1>
  }
  return (
    <div className="pt-7 relative mx-auto">
      <Container>
        <Plyr source={videoSrc} autoPlay />
        <p className="text-sm mt-0.5">لو الفيديو مظهرش او مشتغلش اعمل تحديث للصفحة</p>
        {
          data?.data?.length >= 1 ? 
          <Button colorScheme="green" isDisabled className="mt-5 w-full">
          تم مشاهدة الفيديو
        </Button>
          : 
        <Button colorScheme="green" onClick={addToHistoryhandler} className="mt-5 w-full">
          تعلييم كمقروء
        </Button>
        }
      </Container>
    </div>
  );
};

export default Lesson;
