import OwnNavBar from "../Navbar/Navbar"
import Navbar from "../Navbar/Navbar"

const Layout = ({children})=> {
 return (
    <>
    <OwnNavBar />
    <div style={{padding:"20px 0px"}}>
        {children}
    </div>
    </>
 )
}

export default Layout