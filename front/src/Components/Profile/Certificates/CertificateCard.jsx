import Button from "../../../Components/ui/Button"

const CertificateCard = ({mr, subject, unity}) => {
  return (
    <div className="border-2 shadow-sm rounded-md p-5">
        <h1 className="text-xl text-center font-bold">شهادة اتمام ({unity} - {subject} - {mr})</h1>
        <div className="flex items-center flex-col gap-2 mt-3">
            <Button className="w-full">تحميل الشهادة</Button>
            <Button type="outline" className="w-full">عرض الشهادة</Button>
        </div>
        
    </div>
  )
}

export default CertificateCard