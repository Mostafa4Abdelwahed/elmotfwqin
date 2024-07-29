import Header from "../../../Components/ui/Header"
import Container from "../../../Components/ui/container";

const Settings = () => {
  return (
    <Container>
      <Header title="الإعدادات" />
      <form className="mx-auto py-4 rounded-xl mb-14">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">اسمك الأول</label>
            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="اكتب اسمك الاول" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">اسمك الأخير</label>
            <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="اكتب اسمك الاخير" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">ايميلك</label>
            <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="اكتب ايميلك" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">رقم تلفونك</label>
            <input name="number" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="اكتب رقم تلفونك" />
          </div>
        </div>

        <div className="mt-7">
          <button type="button" className="py-3.5 px-7 text-sm w-full font-semibold tracking-wider rounded-md text-white bg-primary hover:bg-primary/85 focus:outline-none">
            تعديل
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Settings;
