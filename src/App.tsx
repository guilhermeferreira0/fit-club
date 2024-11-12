import Atmosphere from "./components/Atmosphere";
import BookClass from "./components/BookClass";
import ExploreProgram from "./components/ExploreProgram";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import MemberReview from "./components/MemberReview";
import PricingPlan from "./components/PricingPlan";

export default function App() {

  return (
    <>
      <Header />
      <main className="px-8 lg:px-60 flex flex-col gap-36 overflow-x-hidden">
        <MainSection />
        <ExploreProgram />
        <BookClass />
        <Atmosphere />
        <PricingPlan />
        <MemberReview />
      </main>
      <Footer />
    </>
  )
}
