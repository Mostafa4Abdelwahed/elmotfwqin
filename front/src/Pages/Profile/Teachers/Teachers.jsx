import Container from "../../../Components/ui/container"
import Header from "../../../Components/ui/Header"
import Card from "../../../Components/ui/SmallCard"

const Teachers = () => {
  return (
    <Container>
        <Header title="المدرس" desc="قم بإختيار المدرس لعرض التفاصيل" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 pb-10">
        <Card title="محمد علي" thumbnail="https://dummyimage.com/400x400" link="mohamed-ali/units" />
        <Card title="احمد علاء" thumbnail="https://dummyimage.com/400x400" link="ahmed-alaa/units" />
        <Card title="السيد عادل" thumbnail="https://dummyimage.com/400x400" link="elsayed-adel/units" />
        <Card title="محمود علوان" thumbnail="https://dummyimage.com/400x400" link="mahmoud-ahwan/units" />
        <Card title="احمد ابراهيم" thumbnail="https://dummyimage.com/400x400" link="ahmed-ibrahim/units" />
        <Card title="علاء ايمن" thumbnail="https://dummyimage.com/400x400" link="alaa-aimn/units" />
        <Card title="اياد مؤمن" thumbnail="https://dummyimage.com/400x400" link="eyad-moamen/units" />
        <Card title="شريف عادل" thumbnail="https://dummyimage.com/400x400" link="sherif-adel/units" />
        <Card title="فريد جابر" thumbnail="https://dummyimage.com/400x400" link="farid-gaber/units" />
        <Card title="هنيدي علي" thumbnail="https://dummyimage.com/400x400" link="henidy-aliunits" />
      </div>
    </Container>
  )
}

export default Teachers