import * as React from 'react'
import { Link } from 'gatsby'
import { container, nav, navLinks, navLinkItem, navLinkText } from './layout.module.css'
// const Layout = (props) => {  
//        const pageTitle = props.pageTitle  
//        const children = props.children  
//                                          }
// hier boven zie je een andere manier voor lijn 7!
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
            </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
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