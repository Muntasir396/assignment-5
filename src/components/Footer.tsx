function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-12">


                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">


                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-xs font-bold text-white">
                                DS
                            </div>

                            <h2 className="text-lg font-bold text-gray-900">
                                Dev Stack
                            </h2>
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                            Build a better development stack by exploring modern
                            technologies and choosing the tools that fit your projects.
                        </p>


                        <div className="mt-5 flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600 hover:text-pink-500"
                            >
                                Git
                            </a>

                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600 hover:text-pink-500"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600 hover:text-pink-500"
                            >
                                in
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Product
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="#technologies" className="hover:text-pink-500">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#projects" className="hover:text-pink-500">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#features" className="hover:text-pink-500">
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="#about" className="hover:text-pink-500">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="hover:text-pink-500">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Terms of Service
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>


                <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-gray-900">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-gray-900">
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer