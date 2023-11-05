import { Drawer } from 'antd'
import React from 'react'

const DrawerCoponent = ({ title = 'Drawer', placement = ' right', isOpen = false, children, ...rests }) => {
    return (
        <>
            <Drawer title="Basic Drawer" placement="right" open={isOpen} {...rests}>
                {children}
            </Drawer>
        </>
    )
}

export default DrawerCoponent
