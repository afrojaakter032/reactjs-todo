import Layout from "../../components/Layout/Layout";

function Tasklist() {
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
                </tbody>
            </table> */}


            <div class=" bg-red-700 w-full">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase">
                        <tr>
                            <th class="px-6 py-3">
                                TABLE
                            </th>
                            <th class="px-6 py-3">
                                TIME
                            </th>
                            <th class="px-6 py-3">
                                QUERY TIME
                            </th>
                            <th class="px-6 py-3">
                                TOTAL QURIES
                            </th>
                            <th class="px-6 py-3">
                                CREATED AT
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-200">
                            <td class="px-6 py-4 font-medium text-gray-900">
                                Default
                            </td>
                            <td class="px-6 py-4">
                                7ms
                            </td>
                            <td class="px-6 py-4">
                                3.59 ms
                            </td>
                            <td class="px-6 py-4">
                                2
                            </td>
                            <td class="px-6 py-4">
                                7 minitues ago
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200">
                            <td class="px-6 py-4 font-medium text-gray-900">
                                Default
                            </td>
                            <td class="px-6 py-4">
                                7ms
                            </td>
                            <td class="px-6 py-4">
                                4.59 ms
                            </td>
                            <td class="px-6 py-4">
                                2
                            </td>
                            <td class="px-6 py-4">
                                10 minitues ago
                            </td>
                        </tr>

                    </tbody>
                </table>
</div>
        </Layout>
        </>
    )
}






export default Tasklist;
