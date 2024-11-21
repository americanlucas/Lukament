

export const Main = () => {
    return(
        <>
            <main>    
                <div className="flex flex-col items-center align-center justify-center my-8">
                    <div className="font-semibold text-[#F2C94C]">
                        <p>About Us</p>
                    </div>
                    <div className="flex flex-1 text-6xl font-bold text-white max-w-xl text-center m-6">
                        <h1 >Our Mission</h1>
                    </div>
                    <div className="text-center text-zinc-300 font-semibold text-2xl tracking-wide space-y-8">
                        <h3>We're building the future of digital banking to empower people worldwide with modern financial tools.</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center align-center justify-center space-y-8 space-x-0 my-12 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-[360px] bg-zinc-400 rounded-xl py-8 px-8 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-[500px]">
                        <h1 className="text-2xl font-bold text-white mb-4">Our Story</h1>
                        <p className="text-white  font-semibold mb-4 text-xl md:text-lg  ">Founded in 2020, Liggen has grown from a small startup to a trusted financial partner for millions of users worldwide. Our journey is driven by the belief that everyone deserves access to modern banking solutions.</p>
                        <div className="flex flex-row justify-center space-x-8 mt-8">
                            <div className="flex flex-col items-center text-white bg-zinc-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit">
                                <h1 className="text-3xl font-bold mb-2">2M+</h1>
                                <p>Active Users</p>
                            </div>
                            <div className="flex flex-col items-center text-white bg-zinc-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit">
                                <h2 className="text-3xl font-bold mb-2">150+</h2>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[360px] bg-zinc-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-[500px]">
                        <h2 className="text-2xl font-bold text-white my-4">Our Values</h2>
                        <div className="mt-8">
                            <div className=" text-white bg-zinc-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit mb-4 space-y-2">
                                <h2 className="font-bold text-lg">Innovation</h2>
                                <p className="text-md font-semibold md:text-sm">Constantly pushing the boundaries of what's possible in digital banking</p>
                            </div>
                            <div className=" text-white bg-zinc-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit mb-4 space-y-2">
                                <h2 className="font-bold text-lg">Security</h2>
                                <p className="text-md font-semibold md:text-sm">Protecting our users' financial data with state-of-the-art security measures</p>
                            </div>
                            <div className=" text-white bg-zinc-400 rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 h-fit mb-4 space-y-2">
                                <h2 className="font-bold text-lg">Accessibility</h2>
                                <p className="text-md font-semibold md:text-sm">Making modern banking solutions available to everyone, everywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}