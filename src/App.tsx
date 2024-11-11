import ExploreProgram from "./components/ExploreProgram";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

export default function App() {

  return (
    <>
      <Header />
      <main className="px-6 lg:px-10 flex flex-col gap-24 mt-24">
        <MainSection />
        <ExploreProgram />
      </main>
    </>
  )
}
