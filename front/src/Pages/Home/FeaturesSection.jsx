import Container from "./../../Components/ui/container";
import easy from "../../assets/Home/icons/easy.png";
import perfect from "../../assets/Home/icons/perfect.png";
import security from "../../assets/Home/icons/security.png";
import FeatureCard from "../../Components/Home/FeatureCard";

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-gray-100 py-16">
      <Container>
        <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
          <p className="px-3 mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            المميزات
          </p>
          <h2 className="max-w-lg mb-2 text-3xl font-bold text-gray-900 sm:text-4xl md:mx-auto">
            مميزات منصة{" "}
            <span className="font-bold animate-pulse text-primary translate-y-11">
              المتفوقين
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            تعرف على مميزات و اهدف المنصة
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <FeatureCard icon={perfect} title="محتوى تعليمي متميز">
            يقدم موقع "المتفوقين" محتوى تعليمي متنوع وعالي الجودة يغطي مختلف
            المواد الدراسية والمستويات التعليمية. جميع المواد التعليمية من قبل
            خبراء في المجال لضمان تقديم محتوى دقيق وموثوق.
          </FeatureCard>
          <FeatureCard icon={easy} title="سهولة الاستخدام والتنقل">
          يتميز موقع "المتفوقين" بتصميم واجهة مستخدم بسيطة وسهلة الاستخدام،
              مما يجعل التنقل بين الدروس والمواد التعليمية سلسًا وسريعًا. يمكن
              للطلاب الوصول إلى محتوى الموقع بسهولة على مختلف الأجهزة.
          </FeatureCard>
          <FeatureCard icon={security} title="خصوصية وأمان">
          يولي الموقع أهمية كبيرة لخصوصية وأمان بيانات الطلاب، حيث يتم حماية
              المعلومات الشخصية باستخدام تقنيات أمان متقدمة، بالإضافة إلى
              الالتزام بأعلى معايير حماية البيانات لضمان عدم الوصول غير المصرح
              به.
          </FeatureCard>
        </div>
      </Container>
    </div>
  );
};

export default FeaturesSection;
