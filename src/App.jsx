import Navbar from "./Navbar.jsx";
import Albums from "./pages/Albums.jsx"
import About from "./pages/About.jsx"
function App(){
    console.log(window.location)
    let Component
    switch(window.location.pathname){
        case"/":
            Component = Albums
            break
        case "/albums":
            Component = Albums
            break
        case "/about":
            Component = About
            break
    }
    return(
        <>
            <Navbar />
            <Component />
        </>
    )
}
export default App