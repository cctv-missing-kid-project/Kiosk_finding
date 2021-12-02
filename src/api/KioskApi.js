import axios from 'axios';       
import FormData from 'form-data';                                                                           

class KioskApi {
    URL = '/api/kiosk/';
    sendingFaceImg(image) {
        let data = new FormData();
        data.append('file', image)
        return axios.post(this.URL+'faceImg/', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }

    getGroup(id) {
        return axios.get(this.URL+`getGroup/${id}`)
                    .then(response => response.data)
    }

    getMemberLocation(id) {
        return axios.post(this.URL+`getMemberLocation/${id}`)
                    .then(response => response.data)
    }

} 

export default new KioskApi();