import { useGetAllLanguagesQuery } from "../../../app/ApiCalls/languageSlice";
import { useGetUserQuery } from "../../../app/ApiCalls/userSlice";
import LanguagesSkeleton from "../../../Components/Skeletons/LanguagesSkeleton";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import Card from "../../../Components/ui/SmallCard";

const Subjects = () => {
  const {data:user} = useGetUserQuery()
  const { data: languages, isLoading, isError } = useGetAllLanguagesQuery(user?.level);
  if (isLoading) {
    return <LanguagesSkeleton />;
  }
  if (isError){
    return <h1 className="text-4xl text-center font-bold">خطاء في التحميل</h1>
  }
  return (
    <Container>
      <Header title="اللغات" desc="قم بإختيار اللغة لعرض التفاصيل" />
        {
        languages?.data?.length >= 1 ?
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 pb-10">
          {
            languages?.data?.map((language, key) => {
              return <Card
                  key={key}
                  title={language?.attributes?.name}
                  thumbnail={language?.attributes?.image?.data?.attributes?.url}
                  link={`${language?.attributes?.slug}/units`}
                />
            })
          }
        </div>
        :
        <h1 className="text-4xl text-center font-semibold mb-10">لايوجد لغات</h1>
        }
    </Container>
  );
};

export default Subjects;
