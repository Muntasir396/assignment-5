import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

const TechnologySection = lazy(
  () => import("./components/TechnologySection")
)

function App() {
  return (
    <div>
      <Navbar />

      <Banner />

      <Suspense
        fallback={
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

              <p className="mt-4 text-sm text-gray-500">
                Loading technologies...
              </p>
            </div>
          </div>
        }
      >
        <TechnologySection />
      </Suspense>

      <Footer />
    </div>
  )
}

export default App