import { observer } from 'mobx-react';
import React, { Component } from 'react';
import VerifySelfView from '../Components/VerifySelfView';
import KioskStore from '../Stores/KioskStore';

class VerifySelfContainer extends Component {
    kioskStore = KioskStore;
    render() {
        const { capture, img, setRef, init, savePic } = this.kioskStore;
        return (
            <div>
                <VerifySelfView capture={capture} img={img} setRef={setRef} init={init} savePic={savePic} />
            </div>
        )
    }
}

export default observer(VerifySelfContainer)