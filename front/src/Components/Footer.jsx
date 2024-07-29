import Logo from "./../../public/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="flex items-center justify-center py-12">
          <div>
            <div className="text-teal-600">
                <img src={Logo} className="w-64 mx-auto" alt="Logo" />
            </div>
            <p className="mt-4 max-w-sm text-center text-gray-500">
            منصة المتفوقين هي منصة تعليمية لعرض الدروس بشكل بسيط لجميع الطلاب في جميع المراحل التعليمية ، بنحاول نكون معاك خطوة بخطوة للوصول لأفضل النتائج.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
