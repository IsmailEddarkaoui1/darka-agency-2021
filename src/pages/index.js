// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle ="Welcome to Darka Agency!">
      <p>Lorem ipsum</p>
      <StaticImage        
      alt="OnePiece image!"        
      src="https://i.pinimg.com/564x/91/de/08/91de0880c76a6523e05761e591735743.jpg"      
      />
      <StaticImage
      alt="Kingdom 3rd season"
      src="../images/kingdom3.jpg"
      />
      </Layout>
    </main>
  )
}
// Stap 3: Exporteer je component 
export default IndexPage