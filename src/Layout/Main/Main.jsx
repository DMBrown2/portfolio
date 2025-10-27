import { Outlet } from "react-router-dom";


export default function Main() {
  return (
    <>

    <main
    className="main-container">
      <Outlet />
    </main>

    </>
  )
}