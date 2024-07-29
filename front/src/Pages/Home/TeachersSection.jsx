import Slider from "react-slick";
import TeacherCard from "../../Components/Home/TeacherCard"
import Container from "../../Components/ui/container";

const TeachersSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="teachers" className="bg-gray-100 pt-10 pb-20">
      <Container>
        <div className="mb-8 md:mb-12">
          <h2 className="max-w-lg mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            أفضل المدرسين
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            أحدث المدرسين المتواجدين علي المنصة
          </p>
        </div>
        <Slider dir="rtl" {...settings}>
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
          <TeacherCard profile="https://www.tailwind-kit.com/images/person/1.jpg" name="مصطفي محمد" role="مدرس كيمياء" />
        </Slider>
      </Container>
    </div>
  );
};

export default TeachersSection;
