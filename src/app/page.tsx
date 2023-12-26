import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";

export default function Home() {
  return (
    <main className="bg-[#F6F6F9] h-screen relative ">
      <NavBar />
      <Sidebar />
    </main>
  )
}
