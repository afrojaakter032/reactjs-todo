import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function Home() {
    return (
        <>
            <Layout>
                <section className="hero-section">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 place-content-between">
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-7xl text-center text-[#38BBBC] p-3">Organize your work and life, finally.</div>
                                <div className="flex items-center justify-center mt-10">
                                    {/* <Link className="rounded-xl bg-orange-600  p-5 text-white" to ="/tasklist">Add Your Task</Link> */}
                                    <Link to ="/addtask" class="relative inline-block text-lg group">
                                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#38BBBC] transition-colors duration-300 ease-out border-2 border-[#38BBBC] rounded-lg group-hover:text-white">
                                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#38BBBC] group-hover:-rotate-180 ease"></span>
                                    <span class="relative">Add Your Task</span>
                                    </span>
                                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#38BBBC] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src="./assets/images/tasklist2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* button */}
                <div className="text-center mt-28 text-3xl text-white flex justify-center items-center">
                    {/* <button className="rounded-3xl bg-orange-500 px-7 py-6">Get Started. It's FREE <i class="ph ph-arrow-right"></i></button> */}
                    <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#38BBBC] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#38BBBC] group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get Started. It's FREE </span>
                    </a>
                </div>
                {/* todo layout */}
                <div className="todo-layout mt-20">
                    <div className="container mx-auto">
                        <div>
                            <img src="./assets/images/todo-layout.png" alt="" />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home;
