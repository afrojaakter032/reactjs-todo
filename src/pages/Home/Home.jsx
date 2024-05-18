function Home() {
    return (
        <>
            <section className="navbar-section">
                <div className="md:container">
                    <div className="flex justify-between">
                        <div className="logo flex p-4 gap-2 ">
                            <img src="./assets/images/logo.jpg" alt="logo" height={50} width={50} />
                            <div className="text-3xl text-orange-500 font-semibold">TodoList</div>
                        </div>
                        <div className="menubar flex gap-6 justify-center align-middle p-4 text-2xl text-violet-900 cursor-pointer">
                            <div>Home</div>
                            <div>Features</div>
                            <div>TaskList</div>
                            <div className="pl-20">
                                <button className="rounded-xl bg-purple-900 hover:bg-purple-400 px-4 py-3 text-white text-lg text-center">Add Your Task</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section className="hero-section">
                <div className="container bg-slate-400 mx-auto">
                    <div className="grid grid-cols-2">
                        <div>
                            <div className="text-7xl text-center p-3">Organize your work and life, finally.</div>
                            <div className="flex items-center justify-center mt-10">
                                <button className="rounded-xl bg-purple-900 hover:bg-purple-400 p-5 text-white">Add Your Task</button>
                            </div>
                        </div>
                        <div>
                            <img src="./assets/images/banner.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
