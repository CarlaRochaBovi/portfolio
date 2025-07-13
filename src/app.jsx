import Divider from "./pages/components/divider"
import Header from "./pages/components/header"
import Introduction from "./pages/introduction-page"
import AboutPage from "./pages/about-page"
import FuturePage from "./pages/future-page"

export default function App() {

  return (
    <>
      <div className="w-full h-full font-[Poppins] bg-[#f9fafb] relative">

        <Header />
        <Introduction />
        <Divider />
        <AboutPage />
        <Divider />
        <FuturePage />

      </div>
    </>
  )
}

