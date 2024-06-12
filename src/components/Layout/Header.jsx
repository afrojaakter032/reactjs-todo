import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <section className="navbar-section">
                <div className="md:container">
                    <div className="flex justify-between">
                        <div className="logo flex p-4 gap-2 ">
                            <img src="./assets/images/logo.jpg" alt="logo" height={50} width={50} />
                            <div className="text-3xl text-[#38BBBC] font-semibold flex items-center">TodoList</div>
                        </div>
                        <ul className="list-none flex gap-6 justify-center items-center p-4 text-2xl text-violet-900  cursor-pointer">
                            <li className="hover:text-[#38BBBC]">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:text-[#38BBBC]">
                                <Link to="#">Features</Link>
                            </li>
                            <li className="hover:text-[#38BBBC]">
                                <Link to="#">TaskList</Link>
                            </li>
                            <li className="pl-20">
                                <Link to="/tasks/create" className="rounded-xl bg-[#38BBBC] px-4 py-3 text-white text-lg text-center">Add Your Task</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
