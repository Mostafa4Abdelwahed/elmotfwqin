import { useParams } from "react-router-dom";
import { useGetAllUnitisQuery } from "../../../app/ApiCalls/unitySlice";
import UnityCard from "../../../Components/Profile/UnityCard";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import UnitsSkeleton from "../../../Components/Skeletons/UnitsSkeleton";
import { useGetUserQuery } from "../../../app/ApiCalls/userSlice";
import { useState } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Units = () => {
  const params = useParams();
  const [isSuccess, setIsSuccess] = useState("");
  const {data:user} = useGetUserQuery();
  const { data: unities, isLoading, isError } = useGetAllUnitisQuery({
    year: "secondary1",
    lang: params.lang,
    term: user?.term,
  });
  if (isLoading) {
    return <UnitsSkeleton />;
  }
  if (isError){
    return <h1 className="text-4xl text-center font-bold">خطاء في التحميل</h1>
  }
  return (
    <Container>
      <Header title="الوحدات" desc="قم بإختيار الوحدة لعرض التفاصيل" />
      {isSuccess && <Alert status='success' className="mb-5" variant='left-accent'>
        <AlertIcon />
        تم إضافة الوحدة الي القائمة بنجاح
      </Alert>}
        {unities?.data?.length >= 1 ? 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
          {
            unities?.data?.map((unity, key) => {
              return <UnityCard key={key} setSuccess={setIsSuccess} unity={unity} />;
            })
          }
        </div>
        :
        <h1 className="text-4xl text-center font-semibold mb-10">لايوجد وحدات</h1>
      }
    </Container>
  );
};

export default Units;
