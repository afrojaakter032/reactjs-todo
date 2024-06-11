import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";


function TaskCreate() {
    return (
        <>
            <Layout>
                <div className="flex items-center justify-center mt-10">
                    <div className="w-[500px] rounded shadow-lg bg-white p-6">
                        <form action="#" method="POST">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" for="name">Task Name</label>
                                <input className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Task" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" for="email">Starts_at</label>
                                <input className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Task Start" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" for="password">Status</label>
                                <input className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Task Status" />
                            </div>
                        </form>
                        <div className="flex items-center justify-center mt-5 space-x-4">
                            <Link to="/tasks/list" className="bg-[#38BBBC] text-white text-center w-full text-lg font-bold py-2 px-4 rounded">Submit</Link>
                            <Link to="/tasks/list" className="bg-red-500 text-white text-center w-full text-lg font-bold py-2 px-4 rounded">Cancel</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TaskCreate;
