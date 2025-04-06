import './Navbar.css'
function Navbar(){
    return(
        <nav className={"navbar"}>
                <a className={"site-title"} href={"https://fieldmedic.net"}>Field Medic</a>
                <ul className={"navbarlist"}>
                    <li><a href={"/albums"}>Albums</a></li>
                    <li><a href={"/about"}>About</a></li>
                </ul>
        </nav>
    )
}
export default Navbar