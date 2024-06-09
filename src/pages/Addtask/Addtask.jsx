import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";


function Addtask() {
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
                            <Link to="/tasklist" className="bg-[#38BBBC] text-white text-center w-full text-lg font-bold py-2 px-4 rounded">Submit</Link>
                            <button className="bg-red-500 text-white w-full text-lg font-bold py-2 px-4 rounded">Cancel</button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 p-4">
                    <div class="w-64 bg-blue-500 text-white p-4">
                        This div has a fixed width of 16rem (64 pixels).
                    </div>
                    <div class="max-w-sm bg-green-500 text-white p-4">
                        This div can be at most 24rem (96 pixels) wide. Resize the window to see the effect.
                    </div>
                    <div class="min-w-32 bg-red-500 text-white p-4">
                        This div will be at least 8rem (32 pixels) wide. Resize the window to see the effect.
                    </div>
                    <div class="w-32 max-w-sm min-w-16 bg-purple-500 text-white p-4">
                        This div has a fixed width of 8rem (32 pixels), can grow up to 24rem (96 pixels), and shrink to 4rem (16 pixels).
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Addtask;
