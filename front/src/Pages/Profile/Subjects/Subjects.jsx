import { useGetAllLanguagesQuery } from "../../../app/ApiCalls/languageSlice";
import LanguagesSkeleton from "../../../Components/Skeletons/LanguagesSkeleton";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import Card from "../../../Components/ui/SmallCard";

const Subjects = () => {
  const { data: languages, isLoading, isError } = useGetAllLanguagesQuery("secondary1");
  if (isLoading) {
    return <LanguagesSkeleton />;
  }
  if (isError) {
    return <h1 className="text-5xl text-center mt-16">Error</h1>
  }
  return (
    <Container>
      <Header title="اللغات" desc="قم بإختيار اللغة لعرض التفاصيل" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 pb-10">
        {
        languages?.data?.map((language, key) => {
          return <Card
              key={key}
              title={language?.attributes?.name}
              thumbnail={`${import.meta.env.VITE_SERVER_URL}${language?.attributes?.image?.data?.attributes?.url}`}
              link={`${language?.attributes?.slug}/units`}
            />
        })
        }
      </div>
    </Container>
  );
};

export default Subjects;
