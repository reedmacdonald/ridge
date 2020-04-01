import React from "react"

import Image3 from "../components/image3"
import "./twoWallets.css"

const twoWallets = () => {
  return (
    <div id="holderDiv">
      <div id="pictureOne" style={{ maxWidth: "500px" }}>
        <img src={"/1st banner img.jpg"} alt="tired" />
      </div>
      <div id="descriptionOne">
        <div className="container">
          <h1>The Wallet, RedefinedWhat time issit</h1>

          <p>The best way to carry your cash and cards since, well, ever.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div id="pictureTwo" style={{ maxWidth: "500px" }}>
        <Image3 />
      </div>
      <div id="descriptionTwo">
        <div className="container">
          <h1 style={{ textAlign: "right" }}>We Invented It.</h1>

          <p style={{ textAlign: "right" }}>
            The Ridge developed the first dual-track RFID-blocking wallet.
          </p>

          <button style={{ float: "right" }}>Show Now</button>
        </div>
      </div>
    </div>
  )
}
export default twoWallets
