import { useParams } from "react-router-dom";
import { useGetAllUnitisQuery } from "../../../app/ApiCalls/unitySlice";
import UnityCard from "../../../Components/Profile/UnityCard";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";

const Units = () => {
  const params = useParams();
  const { data: unities, isLoading, isError } = useGetAllUnitisQuery({year:"secondary1", lang:params.lang});
  if(isLoading){
    return <h1 className="text-2xl text-center mt-5">Loading...</h1>
  }
  return (
    <Container>
        <Header title="الوحدات" desc="قم بإختيار الوحدة لعرض التفاصيل" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        {
          unities?.data?.map((unity, key) => {
            return <UnityCard key={key} unity={unity} />
          })
        }
      </div>
    </Container>
  );
};

export default Units;
