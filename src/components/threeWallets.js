import React from "react"
import Image5 from "../components/image5"
import Image6 from "../components/image6"
import Image7 from "../components/image7"
import "./threeWallets.css"
const threeWallets = () => {
  return (
    <div id="holderDivOne">
      <div id="div1A">
        <Image5 />
        <h5 style={{ textAlign: "center" }}>GUNMETAL - $75</h5>
        <button
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          SHOP
        </button>
      </div>
      <div id="div1B">
        <Image6 />
        <h5 style={{ textAlign: "center" }}>TITANIUM - $105</h5>
        <button
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          SHOP
        </button>
      </div>
      <div id="div1C">
        <Image7 />
        <h5 style={{ textAlign: "center" }}>CARBON - $125</h5>
        <button
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          SHOP
        </button>
      </div>
    </div>
  )
}

export default threeWallets
