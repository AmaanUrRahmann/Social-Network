import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";

function MyApp({Component, pageprops}){
    return( 
    <>
    <Nav/>
    <Component {...pageprops} />
    </>
    
    )
}
export default MyApp;