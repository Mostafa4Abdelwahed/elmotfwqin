import CertificateCard from "../../../Components/Profile/Certificates/CertificateCard";
import CertificatesSkeleton from "../../../Components/Skeletons/CertificatesSkeleton";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";

const Certificates = () => {
  const isLoading = false;
  if (isLoading) {
    return <CertificatesSkeleton />;
  }
  return (
    <Container>
      <Header title="الشهادات" desc="الوحدات المحفوظة للمشاهدة لاحقا" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
        <CertificateCard mr="محمد رضوان" subject="فيزياء" unity="الباب الاول" />
      </div>
    </Container>
  );
};

export default Certificates;
