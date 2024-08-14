import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { selectAuth, userRegister } from "../../app/Features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cPassword: "",
    level: "",
    term: "",
  });
  const handleSubmit = ()=>{
    dispatch(userRegister(user))
  }
  return (
    <div className="p-6 bg-gray-50">
      <div className="text-center mb-16">
        <h4 className="text-gray-800 text-4xl leading-snug font-semibold mt-6">
          سجِّل حساب جديد علشان <br /> تنضم
          <span className="text-primary">"للمتفوقين"</span>
        </h4>
      </div>
      <form className="bg-white max-w-4xl mx-auto px-7 py-4 rounded-xl border-2 shadow-sm mb-14">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="fullName" className="text-gray-800 text-sm mb-2 block">
              اسمك كامل
            </label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب اسمك كامل"
              value={user.fullName}
              onChange={(e)=>{setUser({...user, fullName:e.target.value})}}
            />
          </div>

          
          <div>
            <label htmlFor="username" className="text-gray-800 text-sm mb-2 block">
              اسم المستخدم
            </label>
            <input
              name="name"
              type="text"
              id="username"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب اسم المستخدم"
              value={user.username}
              onChange={(e)=>{setUser({...user, username:e.target.value})}}
            />
          </div>


          <div>
            <label htmlFor="email" className="text-gray-800 text-sm mb-2 block">ايميلك</label>
            <input
              name="email"
              type="text"
              id="email"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب ايميلك"
              value={user.email}
              onChange={(e)=>{setUser({...user, email:e.target.value})}}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="text-gray-800 text-sm mb-2 block">
              رقم تلفونك
            </label>
            <input
              name="number"
              type="text"
              id="phoneNumber"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب رقم تلفونك"
              value={user.phoneNumber}
              onChange={(e)=>{setUser({...user, phoneNumber:e.target.value})}}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-800 text-sm mb-2 block">الباسورد</label>
            <input
              name="password"
              type="password"
              id="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب الباسورد"
              value={user.password}
              onChange={(e)=>{setUser({...user, password:e.target.value})}}
            />
          </div>
          
          <div>
            <label htmlFor="rePassword" className="text-gray-800 text-sm mb-2 block">
              اكد الباسورد
            </label>
            <input
              name="cpassword"
              type="password"
              id="rePassword"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب الباسورد تاني"
              value={user.cPassword}
              onChange={(e)=>{setUser({...user, cPassword:e.target.value})}}
            />
          </div>

          <div>
            <label htmlFor="level" className="text-gray-800 text-sm mb-2 block">
              المرحلة الدراسية
            </label>
            <select id="level" value={user.level} onChange={(e)=>{setUser({...user, level:e.target.value})}}
              name="level"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
            >
              <option value="" selected disabled>
                اختار مرحلتك
              </option>
              <option value="secondary1">اولي ثانوي</option>
              <option value="secondary2">تانية ثانوي</option>
              <option value="secondary3">تالتة ثانوي</option>
            </select>
          </div>

          <div>
            <label htmlFor="term" className="text-gray-800 text-sm mb-2 block">
              الفصل الدراسي
            </label>
            <select id="term"
              name="term" value={user.term} onChange={(e)=>{setUser({...user, term:e.target.value})}}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
            >
              <option value="" selected disabled>
                اختار الفصل الدراسي
              </option>
              <option value="term1">الترم الاول</option>
              <option value="term2">الترم التاني</option>
            </select>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm">
              <p>عندك حساب قبل كده؟</p>
                <Link
                  to="/login"
                  className="text-primary hover:underline font-semibold"
                >
                  تسجيل الدخول 
                </Link>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Button  onClick={handleSubmit}
            type="button"
            colorScheme="green"
            className="w-full py-6"
            isLoading={loading}
          >
            إنشاء الحساب
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
