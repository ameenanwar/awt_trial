const Side_bar = () => {
  const main = {
    backgroundColor: "#26667F",
    width: "200px",
    height: "100%", // let parent control height
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1rem",
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
  const close={
    top:"auto",
    marginLeft:"130px",
    height:"20px",
    fontSize:"30px"
}

  return (
    <div style={main}>
      <div style={category}>
        <h3 style={{ borderBottom: "1px solid white", paddingBottom: "8px" }}>
          <button style={close} >X</button>
        </h3>
        <ul style={ul}>
          <li><a style={link} href="">Mobiles, Computers</a></li>
          <li><a style={link} href="">Sports, Fitness, Bags, Luggage</a></li>
          <li><a style={link} href="">TV, Appliances, Electronics</a></li>
          <li><a style={link} href="">Men's Fashion</a></li>
          <li><a style={link} href="">Women's Fashion</a></li>
          <li><a style={link} href="">Home, Kitchen, Pets</a></li>
          <li><a style={link} href="">Beauty, Health, Grocery</a></li>
          <li><a style={link} href="">Toys, Baby Products, Kids' Fashion</a></li>
          <li><a style={link} href="">Books</a></li>
          <li><a style={link} href="">Music & Video Games</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Side_bar;
