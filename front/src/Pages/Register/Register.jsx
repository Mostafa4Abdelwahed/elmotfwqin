import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="p-6 bg-gray-50">

      <div className="text-center mb-16">
        <h4 className="text-gray-800 text-4xl leading-snug font-semibold mt-6">سجِّل حساب جديد علشان <br /> تنضم <span className="text-primary">"للمتفوقين"</span></h4>
      </div>
      <form className="bg-white max-w-4xl mx-auto px-7 py-4 rounded-xl border-2 shadow-sm mb-14">
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
          <div>
            <label className="text-gray-800 text-sm mb-2 block">الباسورد</label>
            <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="اكتب الباسورد" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">اكد الباسورد</label>
            <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all" placeholder="اكتب الباسورد تاني" />
          </div>
          <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-semibold"
                  >
                     عندك حساب قبل كده؟
                  </Link>
                </div>
              </div>

          </div>
        </div>

        <div className="mt-7">
          <button type="button" className="py-3.5 px-7 text-sm w-full font-semibold tracking-wider rounded-md text-white bg-primary hover:bg-primary/85 focus:outline-none">
            إنشاء الحساب
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register