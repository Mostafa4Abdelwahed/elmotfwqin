import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import Card from "../../../Components/ui/SmallCard";

const Subjects = () => {
  return (
    <Container>
      <Header title="اللغات" desc="قم بإختيار اللغة لعرض التفاصيل" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 pb-10">
        <Card
          title="عربي"
          thumbnail="https://dummyimage.com/400x400"
          link="arabic/teachers"
        />
        <Card
          title="فيزياء"
          thumbnail="https://dummyimage.com/400x400"
          link="physics/teachers"
        />
        <Card
          title="كيمياء"
          thumbnail="https://dummyimage.com/400x400"
          link="chemistry/teachers"
        />
        <Card
          title="احياء"
          thumbnail="https://dummyimage.com/400x400"
          link="alive/teachers"
        />
        <Card
          title="تاريخ"
          thumbnail="https://dummyimage.com/400x400"
          link="date/teachers"
        />
        <Card
          title="جغرافيا"
          thumbnail="https://dummyimage.com/400x400"
          link="geography/teachers"
        />
        <Card
          title="فرنساوي"
          thumbnail="https://dummyimage.com/400x400"
          link="french/teachers"
        />
        <Card
          title="انجليزي"
          thumbnail="https://dummyimage.com/400x400"
          link="english/teachers"
        />
        <Card
          title="رياضة"
          thumbnail="https://dummyimage.com/400x400"
          link="math/teachers"
        />
        <Card
          title="فلسفة"
          thumbnail="https://dummyimage.com/400x400"
          link="philosophy/teachers"
        />
      </div>
    </Container>
  );
};

export default Subjects;
