import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Hello, welcome to my Gatsby demo</h1>
    <h2>Much good content be here.</h2>
    <p>
      Pommy ipsum treacle leisurely a fiver conkers squirrel jolly hockey sticks
      Prince Charles, sausage roll man and his whippet bread and butter pudding
      get away with ya spiffing pulled out the eating irons.
    </p>
    <p>
      Her Majesty's pleasure every fortnight taking the mick old chap a right
      royal knees up scouser spam fritters have a kip corgi, muck about chin up
      the dog's dinner Southeners pezzy little scally wedding tackle balderdash.
    </p>
    <p>
      I bid you good day and absolute twoddle the lakes in the goolies sausage
      roll tallywhacker, cheesed off man and his whippet what a doddle and
      pulled out the eating irons. Knee high to a grasshopper i'll be a monkey's
      uncle bits 'n bobs they can sod off off t'pub chips, spend a penny cheesed
      off.
    </p>
  </Layout>
)

export default IndexPage
