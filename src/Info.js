import About from "./About";

function Info({img}){

    return(

        <div style={{position:"relative",top:"30px"}}>

            <div style={{textAlign:"center"}}>
                <img  style={{paddingTop:"20px",borderRadius:"28px"}} className={"profile-pic"} src={img} alt=""/>
            </div>

            <div style={{paddingTop:"10px",borderRadius:"0px 0px 20px 20px"}} className={"the-background"}>
                <div className={"info-text"}>
                    <h1 style={{fontWeight:"bolder"}}>Jake Farmers</h1>

                </div>

                <div style={{position:"relative",bottom:"35px",color:"blueviolet"}} className={"info-text"}>
                    <h3>Frontend Developer</h3>
                </div>

                <div style={{position:"relative",bottom:"70px",color:"orchid"}} className={"info-text"}>
                    <p>jakefarmers.dev</p>
                </div>

                <div>
                    <img style={{position:"relative",left:"145px",bottom:"65px",width:"10%"}} src="https://img.icons8.com/nolan/64/linkedin-circled.png"/>

                </div>
                    <div >
                        <About/>

                    </div>
            </div>



        </div>

    )

}

export default Info