import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../footer'
import Header from '../header'

type Props = {}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout