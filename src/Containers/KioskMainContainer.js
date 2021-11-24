import { observer } from 'mobx-react'
import React, { Component } from 'react'
import KioskMainView from '../Components/KioskMainView'

class KioskMainContainer extends Component {
    render() {
        return (
            <div>
                <KioskMainView />

            </div>
        )
    }
}

export default observer(KioskMainContainer);