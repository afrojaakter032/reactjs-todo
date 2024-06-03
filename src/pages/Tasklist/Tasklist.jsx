import Layout from "../../components/Layout/Layout";


function Tasklist() {
    return (
        <>
            <Layout>
                <div className="flex items-center justify-center mt-10">
                    <div className="max-w-[220px] rounded shadow-lg bg-[#38BBBC] p-6">
                        <form action="#" method="POST" className="flex flex-col items-center">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Task Title</label>
                                <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Task" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Starts_at</label>
                                <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Task Start" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Status</label>
                                <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Task Status" />
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Tasklist;
