import { useEffect, useState } from "react";
import SettingsSkeleton from "../../../Components/Skeletons/SettingsSkeleton";
import Header from "../../../Components/ui/Header";
import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import Container from "../../../Components/ui/container";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../app/ApiCalls/userSlice";

const Settings = () => {
  const { data: user, isLoading } = useGetUserQuery();
  const [userd, setUserd] = useState({
    id: "",
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    level: "",
    term: "",
  });
  useEffect(()=>{
    setUserd({
      id: user?.id,
      username: user?.username,
      fullName: user?.fullName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      level: user?.level,
      term: user?.term,
    })
  },[user])
  const [updateUser, { isLoading: isLoadingUpdate, isSuccess, isError, error }] =
    useUpdateUserMutation();
  if (isLoading) {
    return <SettingsSkeleton />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <Container>
      <Header title="الإعدادات" />

      {/* Handle Error Alert */}
      {isSuccess && (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          تم تحديث بيانات الحساب بنجاح
        </Alert>
      )}

      {/* Handle Error Alert */}
      {isError && (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          {error.data.error.message === "Username already taken" ? "اسم المستخدم موجود قبل كده" 
          : error.data.error.message === "This attribute must be unique" ? "رقم التليفون مربوط بحساب تاني"
          : error.data.error.message === "Email already taken" ? "الايميل مربوط بحساب تاني"
          : error.data.error.message}
        </Alert>
      )}

      <form className="mx-auto py-4 rounded-xl mb-14">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              اسمك كامل
            </label>
            <input
              name="fullName"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب اسمك كامل"
              value={userd.fullName}
              onChange={(e) => {
                setUserd({ ...userd, fullName: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              اسم المستخدم
            </label>
            <input
              name="name"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب اسم المستخدم"
              value={userd.username}
              onChange={(e) => {
                setUserd({ ...userd, username: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">ايميلك</label>
            <input
              name="email"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب ايميلك"
              value={userd.email}
              onChange={(e) => {
                setUserd({ ...userd, email: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              رقم تلفونك
            </label>
            <input
              name="number"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
              placeholder="اكتب رقم تلفونك"
              value={userd.phoneNumber}
              onChange={(e) => {
                setUserd({ ...userd, phoneNumber: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              المرحلة الدراسية
            </label>
            <select
              defaultValue={user?.level}
              onChange={(e) => {
                setUserd({ ...userd, level: e.target.value });
              }}
              name="level"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
            >
              <option value="secondary1">اولي ثانوي</option>
              <option value="secondary2">تانية ثانوي</option>
              <option value="secondary3">تالتة ثانوي</option>
            </select>
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              الفصل الدراسي
            </label>
            <select
              name="term"
              onChange={(e) => {
                setUserd({ ...userd, term: e.target.value });
              }}
              defaultValue={user?.term}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-primary transition-all"
            >
              <option value="term1">الترم الاول</option>
              <option value="term2">الترم التاني</option>
            </select>
          </div>
        </div>

        <div className="mt-7">
          <Button
            colorScheme="green"
            className="py-6 w-full"
            isLoading={isLoadingUpdate}
            onClick={() => {
              updateUser({ id: userd.id, user: userd });
            }}
          >
            تحديث الحساب
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Settings;
