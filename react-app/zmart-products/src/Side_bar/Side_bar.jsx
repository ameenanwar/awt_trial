/*import logo from "../assets/logo.png"
import search_button_img from "../assets/search_bar.png"

const Side_bar=()=>

{   const main={
    backgroundColor: "#26667F",
  width: "170px",
  height: "100%",
  display: "flex",           // <-- fix
  flexDirection: "column",      // <-- make row layout
  alignItems: "flex-start" ,
  padding: "1rem",
  position: "fixed",      // sidebar always stays on left
  marginTop: "1px",
  left: 0,
  boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
}
const Category={
    display:"flex",
    color:"white",
    flexDirection:"column",
}
const a={
    color:"white",
}
const ul={
    display:"flex",
    gap:"30px",
    flexDirection:"column"

}


    return (
        <>
        <div style={main}>
            <div style={Category}>
                <h3><u>Shop By Category</u></h3>
                <ul style={ul}>
                    <li> <a style={a} href="">Mobiles, Computers</a></li>
                    <li><a style={a} href="">Sports, Fitness, Bags, Luggage</a></li>
                    <li><a style={a} href="">TV, Appliances, Electronics</a></li>
                    <li><a style={a} href="">Men's Fashion</a></li>
                    <li> <a style={a} href="">Women's Fashion</a></li>
                    <li> <a style={a} href="">Home, Kitchen, Pets</a></li>
                    <li><a style={a} href="">Beauty, Health, Grocery</a></li>
                    <li><a style={a} href="">Toys, Baby Products, Kids' Fashion</a></li>
                    <li><a style={a} href="">Books</a></li>
                    <li> <a style={a} href="">Music & Video Games</a></li>
                </ul>
                    
                    


            </div>
            
        </div>
        

        </>
    )
}

*/
import logo from "../assets/logo.png";
import search_button_img from "../assets/search_bar.png";

const Side_bar = () => {
  const main = {
    backgroundColor: "#26667F",
    width: "200px",
    height: "100vh", // full screen height
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1rem",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
  };

  const category = {
    color: "white",
    width: "100%",
  };

  const ul = {
    listStyle: "none",
    padding: 0,
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const link = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: '"Times New Roman", Times, serif',
    transition: "color 0.2s ease",
  };

  const linkHover = {
    color: "#ffdd57", // golden highlight
  };

  return (
    <div style={main}>
      <div style={category}>
        <h3 style={{ borderBottom: "1px solid white", paddingBottom: "8px" }}>
          Shop By Category
        </h3>
        <ul style={ul}>
          <li>
            <a style={link} href="">
              Mobiles, Computers
            </a>
          </li>
          <li>
            <a style={link} href="">
              Sports, Fitness, Bags, Luggage
            </a>
          </li>
          <li>
            <a style={link} href="">
              TV, Appliances, Electronics
            </a>
          </li>
          <li>
            <a style={link} href="">
              Men's Fashion
            </a>
          </li>
          <li>
            <a style={link} href="">
              Women's Fashion
            </a>
          </li>
          <li>
            <a style={link} href="">
              Home, Kitchen, Pets
            </a>
          </li>
          <li>
            <a style={link} href="">
              Beauty, Health, Grocery
            </a>
          </li>
          <li>
            <a style={link} href="">
              Toys, Baby Products, Kids' Fashion
            </a>
          </li>
          <li>
            <a style={link} href="">
              Books
            </a>
          </li>
          <li>
            <a style={link} href="">
              Music & Video Games
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Side_bar;


