import "./style.css";
import Footer from "./Footer";
import Info from "./Info";
import About from "./About";

function Page(){

    return(
        <div style={{display:"flex", justifyContent:"space-around"}} className={"main-page"}>


            <Info
                img={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
            />
            <Info
                img={"https://images.unsplash.com/photo-1598193550133-5b1d183165de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}

            />
            <Info
                img={"https://pbs.twimg.com/media/FGHxSv8XwAAiIuS.jpg"}
            />


        </div>
    )

}

export default Page