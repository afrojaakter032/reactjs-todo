import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function TaskCreate() {
    const submit = (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let starts_at = document.getElementById("starts_at").value;
        let status = document.getElementById("status").value;

        let data = {
            name: name,
            starts_at: starts_at,
            status: status
        };
    }

    return (
        <>
            <Layout>
                <div className="flex items-center justify-center mt-10">
                    <div className="w-[500px] rounded shadow-lg bg-white p-6">
                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                                    Task Name <span className="text-red-800 text-xs">★</span>
                                </label>

                                <input
                                    type="text"
                                    className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                                    name="name"
                                    id="name"
                                    placeholder="Your Task"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="Starts At">
                                    Starts At <span className="text-red-800 text-xs">★</span>
                                </label>

                                <input
                                    type="datetime-local"
                                    className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                    name="starts_at"
                                    id="starts_at"
                                    placeholder="Task Start"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="status">
                                    Select Status <span className="text-red-800 text-xs">★</span>
                                </label>

                                <select
                                    className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                                    name="status"
                                    id="status"
                                    placeholder="Task Status"
                                    required
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-center mt-5 space-x-4">
                                <button type="submit" className="bg-[#38BBBC] text-white text-center w-full text-lg font-bold py-2 px-4 rounded">Submit</button>
                                <Link to="/tasks/list" className="bg-red-500 text-white text-center w-full text-lg font-bold py-2 px-4 rounded">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TaskCreate;
