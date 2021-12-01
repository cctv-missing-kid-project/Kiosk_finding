import { observer } from 'mobx-react';
import React, { Component } from 'react';
import VerifySelfView from '../Components/VerifySelfView';
import KioskStore from '../Stores/KioskStore';

class VerifySelfContainer extends Component {
    kioskStore = KioskStore;
    render() {
        const { capture, img, imgReceived, setRef, init, handleSendingFaceImg, onoff } = this.kioskStore;
        return (
            <div>
                <VerifySelfView capture={capture} 
                                img={img} 
                                imgReceived={imgReceived} 
                                setRef={setRef} 
                                init={init} 
                                handleSendingFaceImg={handleSendingFaceImg}
                                onoff={onoff} />
            </div>
        )
    }
}

export default observer(VerifySelfContainer)