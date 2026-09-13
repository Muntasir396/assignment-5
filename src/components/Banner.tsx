function Banner() {
    return (
        <section className="py-16 md:py-20 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between lg:gap-12">


                <div className="w-full text-center lg:w-1/2 lg:text-left">

                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">


                        <a
                            href="#technologies"
                            className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 font-medium text-white"
                        >
                            Explore Technologies
                        </a>


                        <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
                            Learn More
                        </button>

                    </div>
                </div>


                <div className="flex w-full justify-center lg:w-1/2">
                    <img
                        src="/banner-stack.png"
                        alt="Development Stack"
                        className="w-full max-w-md lg:max-w-[420px]"
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner