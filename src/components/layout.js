import * as React from 'react'
import { Link, useStaticQuery, graphql  } from 'gatsby'
import { container, nav, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'
// const Layout = (props) => {  
//        const pageTitle = props.pageTitle  
//        const children = props.children  
//                                          }
// hier boven zie je een andere manier voor lijn 7!
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header className={siteTitle}>
          {data.site.siteMetadata.title} 
        </header>
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link  to="/" className={navLinkText}>
              Home
            </Link>
            </li>
          <li className={navLinkItem}>
            <Link  to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/artists">
              Artists
            </Link>
          </li>
        </ul> 
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout