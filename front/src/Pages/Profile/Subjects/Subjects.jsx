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
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="arabic/units"
        />
        <Card
          title="فيزياء"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="physics/units"
        />
        <Card
          title="كيمياء"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="chemistry/units"
        />
        <Card
          title="احياء"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="alive/units"
        />
        <Card
          title="تاريخ"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="date/units"
        />
        <Card
          title="جغرافيا"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="geography/units"
        />
        <Card
          title="فرنساوي"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="french/units"
        />
        <Card
          title="انجليزي"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="english/units"
        />
        <Card
          title="رياضة"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="math/units"
        />
        <Card
          title="فلسفة"
          thumbnail="https://l.top4top.io/p_3132a0bx51.png"
          link="philosophy/units"
        />
      </div>
    </Container>
  );
};

export default Subjects;
