import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center py-24 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              تسجيل الدخول
            </h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  الإيميل
                </label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                    placeholder="اكتب الإيميل"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">الباسورد</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                    placeholder="اكتب الباسورد"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-primary hover:underline font-semibold"
                  >
                    نسيت كلمة السر ؟
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-primary hover:bg-primary/75 focus:outline-none"
                >
                  تسجيل الدخول
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                معندكش حساب ؟
                <Link
                  to="/register"
                  className="text-primary mx-2 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  اعمل حساب جديد
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
