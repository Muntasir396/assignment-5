function Banner() {
    return (
        <section className="py-24">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6">

                {/* Left Side */}
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold text-gray-900">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-lg text-gray-600">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-3 font-medium text-white">
                            Explore Technologies
                        </button>

                        <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex justify-center">
                    <img
                        src="/banner-stack.png"
                        alt="Development Stack"
                        className="w-96"
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner