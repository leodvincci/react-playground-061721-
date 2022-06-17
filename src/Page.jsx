import "./style.css";
import Footer from "./Footer";
import Info from "./Info";
import About from "./About";

function Page(){

    return(
        <div style={{display:"flex", justifyContent:"space-around"}} className={"main-page"}>


            <Info/>
            <Info/>
            <Info/>


        </div>
    )

}

export default Page