import Layout from "../../components/Layout/Layout";

function TaskList() {
  return (
    <>
      <Layout>
        {/* <table className="w-full font-light dark:text-white">
                <thead className="border-b border-neutral-200 font-medium">
                    <tr>
                        <th className="text-left px-6 py-4 w-[50px]">SL</th>
                        <th className="text-left px-6 py-4">Task Name</th>
                        <th className="text-left px-6 py-4">Starts_at</th>
                        <th className="text-left px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b dark:border-white/10">
                        <td className="text-left px-6 py-4">01</td>
                        <td className="text-left px-6 py-4">Excercise</td>
                        <td className="text-left px-6 py-4">10 AM</td>
                        <td className="text-left px-6 py-4">Done</td>
                    </tr>
                    <tr className="border-b dark:border-white/10">
                        <td className="text-left px-6 py-4">02</td>
                        <td className="text-left px-6 py-4">Excercise</td>
                        <td className="text-left px-6 py-4">10 AM</td>
                        <td className="text-left px-6 py-4">Done</td>
                    </tr>
                    <tr className="border-b dark:border-white/10">
                        <td className="text-left px-6 py-4">03</td>
                        <td className="text-left px-6 py-4">Excercise</td>
                        <td className="text-left px-6 py-4">10 AM</td>
                        <td className="text-left px-6 py-4">Done</td>
                    </tr>
                </tbody>
            </table> */}
            <div class="w-full">
                <div className="container mx-auto px-4">
                    <div className="">
                        <table class="w-full text-sm text-left text-gray-500 border-spacing-y-4 border-separate">
                            <thead class="text-gray-700 uppercase font-bold text-lg shadow-lg shadow-slate-300">
                                <tr className="">
                                    <th class="px-6 py-3 rounded-l-2xl w-[50px]">SL</th>
                                    <th class="px-6 py-3 rounded-l-2xl">Task Name</th>
                                    <th class="px-6 py-3">Starts_At</th>
                                    <th class="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr class="shadow-lg shadow-slate-300 rounded-2xl">
                                    <td class="px-6 py-4 font-medium text-gray-900 rounded-l-2xl">
                                    01
                                    </td>
                                    <td class="px-6 py-4">Excercisse</td>
                                    <td class="px-6 py-4">7AM</td>
                                    <td class="px-6 py-4">Done</td>
                                </tr>
                                <tr class="shadow-lg shadow-slate-300 rounded-2xl">
                                    <td class="px-6 py-4 font-medium text-gray-900 rounded-l-2xl">
                                    02
                                    </td>
                                    <td class="px-6 py-4">Excercisse</td>
                                    <td class="px-6 py-4">7AM</td>
                                    <td class="px-6 py-4">Done</td>
                                </tr>
                                <tr class="shadow-lg shadow-slate-300 rounded-2xl">
                                    <td class="px-6 py-4 font-medium text-gray-900 rounded-l-2xl">
                                    03
                                    </td>
                                    <td class="px-6 py-4">Excercisse</td>
                                    <td class="px-6 py-4">7AM</td>
                                    <td class="px-6 py-4">Done</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </Layout>
    </>
  );
}

export default TaskList;
