import { observer } from 'mobx-react'
import React, { Component } from 'react'
import KioskMainView from '../Components/KioskMainView'
import Backgroud from '../static/images/찾아조1.jpg';

class KioskMainContainer extends Component {
    render() {
        return (
            <div>
                <KioskMainView/>

            </div>
        )
    }
}

export default observer(KioskMainContainer);