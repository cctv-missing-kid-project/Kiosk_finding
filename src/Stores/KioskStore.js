import SelectInput from "@mui/material/Select/SelectInput";
import { makeAutoObservable, runInAction } from "mobx";
import kioskApi from '../api/KioskApi';
import csrftoekn from '../csrftoken';


class KioskStore{
    img = "";
    imgReceived = "";
    message = "";
    customer_id = "";
    count = "";
    onoff = "";

    constructor() {
        makeAutoObservable(this, {}, {autoBind:true})
    }

    init = () => {
        this.img = "";
        this.imgReceived = "";
        this.customer_id = "";
        this.onoff = "";
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture() {
        this.count = 3;
        this.onoff = "on";
        setTimeout(() => {
            const imageSrc = this.webcam.getScreenshot();
            this.img = imageSrc;
        }, 3000)
    }

    async handleSendingFaceImg() {
        // save(this.img, 'image.jpeg');
        try {
            const data = await kioskApi.sendingFaceImg(this.img);
            runInAction(() => this.imgReceived = data['image'])
            runInAction(() => this.customer_id = data['id'])
            console.log(this.customer_id)
        } catch(error) {
        runInAction(() => this.messege = error.message)
        }
        // console.log(this.img, typeof(this.img))
    }
}

export default new KioskStore();