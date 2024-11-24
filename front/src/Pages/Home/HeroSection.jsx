import Button from "../../Components/ui/Button";
import Container from "./../../Components/ui/container";
import HeroImg from "./../../assets/Home/heroImg.png";
import CookieService from "../../Services/CookieService";

const HeroSection = () => {
  const token = CookieService.get("jwt");
  return (
    <Container>
      <div id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5">
        <div className="content flex justify-center flex-col gap-5">
          <div className="text-start flex flex-col gap-4">
            <h1 className="text-5xl font-bold">
              أهلا بكم في منصة
            </h1>
            <span className="text-5xl animate-pulse font-bold text-primary">
              المتفوقين
            </span>
          </div>
          <p>
            منصة المتفوقين هي منصة تعليمية لعرض الدروس بشكل بسيط لجميع الطلاب في
            جميع المراحل التعليمية ، بنحاول نكون معاك خطوة بخطوة للوصول لأفضل
            النتائج.
          </p>
          {!token ? (
            <div className="btns grid grid-cols-1 gap-2">
              <Button to="register">ابدء دلوقتي</Button>
              <Button type="outline" to="login">
                دخول
              </Button>
            </div>)
            :
            <Button type="outline" to="profile">
            ابدء الاستكشاف
          </Button>
          }
        </div>
        <img src={HeroImg} className="w-[65%] mx-auto" alt="HeroImg" />
      </div>
    </Container>
  );
};

export default HeroSection;
