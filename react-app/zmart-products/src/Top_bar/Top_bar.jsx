import logo from "../assets/logo.png"

import search_button_img from "../assets/search_bar.png"

const Top_bar=()=>

{   const main={
    backgroundColor: "#20232a",
  width: "100%",
  height: "60px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  paddingBottom: "0.5rem",
  display: "flex",           // <-- fix
  flexDirection: "row",      // <-- make row layout
  alignItems: "center"  
            }
  const login_options={
    display:"flex",
    marginLeft:"auto",
    marginRight:"10px",
    gap:"5px",
    marginTop:"auto",
    marginBottom:"2px",
    width:"200px"
  }
 const loginButton = {
  backgroundColor: "#0084ff",
  fontSize: "17px",
  width: "110px",
  height: "40px",
  borderRadius: "4px",
  color: "white",
  fontFamily: '"Times New Roman", Times, serif'

};

const signUpInput= {
  backgroundColor: "white",
  fontSize: "17px",
 width: "110px",
  height: "40px",
  borderRadius: "4px",
  color: "#0084ff",
  border:"none",
  fontFamily: '"Times New Roman", Times, serif'

};



const logo_ = {
  width: "70px",
  height: "70px",
  border: "1px solid white"
};

const search_bar = {
  width: "100%",
  height: "70%",
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: "18px",
  marginBottom:"-10px"
};
const forms={
  display:"flex",
  flexDirection:"row",
}
const search_opt={
  width:"70%",
  height:"80%",
  marginLeft:"120px",
  marginRight:"auto",
  marginBottom:"auto",
  marginTop:"auto",
  display:"flex",
  alignItems:"center",
}
const drop_down={
  width:"50px",
  height:"82%",
  marginTop:"10Px",
  fontFamily: '"Times New Roman", Times, serif'

}
const search_button_style={
  width:"70%px",
  height:"80%",

}
const search_button_div={
  width:"7%",
  height:"82%",
  marginBottom:"-10px"
}

    return (
        <>
        <div style={main}>
            <div ><img src={logo} style={logo_}></img></div>
            <div style={search_opt}>
               <select name="category" id="category-select" style={drop_down}>
                <option value="all" selected>All</option>
                <option value="all-categories">All Categories</option>
                <option value="alexa-skills">Alexa Skills</option>
                <option value="amazon-devices">Amazon Devices</option>
                <option value="amazon-fashion">Amazon Fashion</option>
              </select>
              <input style={search_bar} placeholder=" Discover electronics, fashion, and more…"type="text" ></input>
              <button style={search_button_div} ><img src={search_button_img} style={search_button_style}></img></button>
            </div>
            <div style={login_options}>
            <button style={loginButton}>Cart˚⋆🛍️˚</button>
            <button style={signUpInput}>Home 🏠</button>
            
        </div>  
        </div>
        

        </>
    )
}
    

export default Top_bar;