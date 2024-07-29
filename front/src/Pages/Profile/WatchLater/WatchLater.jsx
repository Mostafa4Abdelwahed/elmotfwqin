import Container from "../../../Components/ui/container"
import UnityCard from "../../../Components/Profile/UnityCard"
import Header from "../../../Components/ui/Header";

const WatchLater = () => {
  return (
    <Container>
      <Header title="المشاهدة لاحقا" desc="الوحدات المحفوظة للمشاهدة لاحقا" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
        <UnityCard saved
          title="الباب الأول"
          desc="الباب الاول شرح اول 4 دروس في المنهج دروس تمهيدية"
        />
      </div>
    </Container>
  );
};

export default WatchLater;
