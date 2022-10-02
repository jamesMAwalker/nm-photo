import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '../svg/logo'

import { nav_options } from '../../data-lists/nav-options'
import { social_links } from '../../data-lists/social-links'
import { page_links } from '../../data-lists/page-links'
import { baseUrlPng } from '../../cloudinary/base-url'
import { LayoutContext } from '../../context/layout-context'

import {
  layout,
  layoutNavContainer,
  logo,
  nav,
  menuBtn,
  open,
  closed,
  menuOptions,
  menuItem,
  socialOptions,
  socialItem,
  pageLinks,
  pageLink,
  content,
} from './layout.module.scss'

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isCollectionPage, setIsCollectionPage] =
    useState(false)
  const { pathname } = useRouter()

  useEffect(() => {
    setIsCollectionPage(
      nav_options.some((op) => op.path === pathname)
      )
    }, [pathname])
    
    /*
      * Nav options 
      # If on collection page:
        - only menu button shows
        - hovering menu button shows all options and also category indicator in bottom left.  
    */

  return (
    <div className={layout}>
      <div className={layoutNavContainer}>
        <Link href='/'>
          <a className={logo}>
            <Logo />
          </a>
        </Link>
        <nav className={nav}>
          <ul className={menuOptions}>
            <div
              className={menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span className={menuOpen ? open : closed} />
            </div>
            {nav_options.map(({ path, text }) => {
              if (isCollectionPage && path !== pathname)
                return
              return (
                <li className={menuItem} key={text}>
                  <Link href={path}>
                    <a>{text}</a>
                  </Link>
                </li>
              )
            })}
            <li className={socialOptions}>
              {!isCollectionPage &&
                social_links.map(({ id, url, icon }) => {
                  return (
                    <a
                      className={socialItem}
                      key={id}
                      href={url}
                    >
                      {icon}
                    </a>
                  )
                })}
            </li>
          </ul>
        </nav>
        <ul className={pageLinks}>
          {!isCollectionPage &&
            page_links.map(({ path, text }) => {
              return (
                <li className={pageLink} key={text}>
                  <Link href={path}>
                    <a>{text}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
      <main className={content}>{children}</main>
    </div>
  )
}
