import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image2 from "../components/image2"
import SEO from "../components/seo"
import Footer from "../components/footer"
import TwoWallets from "../components/twoWallets"
import ThreeWallets from "../components/threeWallets"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TwoWallets />
    <ThreeWallets />
  </Layout>
)

export default IndexPage
