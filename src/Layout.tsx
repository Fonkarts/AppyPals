import { Outlet } from "react-router"
import SideBarNavigation from "./common/sidebar-navigation/SideBarNavigation"
import TopBar from "./common/sidebar-navigation/topbar/TopBar"

const Layout= () => {

    return (
      <>
      <div className='layout-container'>
        <TopBar/>
        <SideBarNavigation/>
        <Outlet/>
      </div>
      </>
    )
  }
  
  export default Layout