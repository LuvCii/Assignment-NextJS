import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <><div>
            <p>
                side bar
            </p>
        </div><div>
                {children}
            </div></>
    )
}

export default LayoutAdmin