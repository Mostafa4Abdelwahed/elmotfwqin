import Row from "../../../Components/Profile/History/Row"

const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
          <div className="min-w-full inline-block">
              <div className="overflow-hidden border rounded-lg border-gray-300">
                  <table className="min-w-full rounded-xl">
                      <thead>
                          <tr className="bg-gray-50">
                              <th scope="col" className="p-5 text-right text-sm leading-6 font-semibold text-gray-900 capitalize"> العنوان </th>
                              <th scope="col" className="p-5 text-right text-sm leading-6 font-semibold text-gray-900 capitalize"> المادة </th>
                              <th scope="col" className="p-5 text-right text-sm leading-6 font-semibold text-gray-900 capitalize"> الوحدة </th>
                              <th scope="col" className="p-5 text-right text-sm leading-6 font-semibold text-gray-900 capitalize"> المستر </th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 ">
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                          <Row title="درس التفاعل الكيميائي الجزء الاول" subject="كيمياء" unity="الباب الاول" mr="محمد القاضي" />
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Table