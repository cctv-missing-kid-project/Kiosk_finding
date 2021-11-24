import { makeAutoObservable, runInAction } from "mobx";
import Webcam from 'react-webcam';
import {save} from 'save-file';




class KioskStore{
    img = "";

    constructor() {
        makeAutoObservable(this, {}, {autoBind:true})
    }

    init = () => {
        this.img = ""
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture() {
        const imageSrc = this.webcam.getScreenshot();
        this.img = imageSrc;
    }

    savePic = () =>  {
        save(this.img, 'image.jpeg');
    }
}

export default new KioskStore();