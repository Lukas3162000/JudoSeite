import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F3EC]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}