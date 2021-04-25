import axios from "axios";
import { idUser } from "./service-user";
export let listImg = '';



export async function addImageComputer(image) {
    await axios.post('http://localhost:4000/image/addImageComputer', image, { headers: { 'Authorization': `Beare ${localStorage.getItem("token")}`, "Content-Type": "application/json" } }).then(
        res => {
            console.log('create image: ' + JSON.stringify(res));
        },
        err => {
            console.log(`Error: ${err}`);
        }
    )
}

export async function addImgBySite(userId) {
    console.log("token-id", localStorage.getItem("token"), userId);
    await axios.post(`http://localhost:4000/image/addImageStock`, { userId: idUser }, { headers: { 'Authorization': `Beare ${localStorage.getItem("token")}` } })
        .then(
            res => {
                console.log('Add image: ' + JSON.stringify(res));
            },
            err => {
                console.log(`Error: ${err}`);
            }
        )
}


export async function getImgOfUser() {
    console.log(idUser);
    await axios.get(`http://localhost:4000/user/getImg/${idUser}`, { headers: { 'Authorization': `Beare ${localStorage.getItem("token")}`, "Content-Type": "application/json" } })
        .then(
            res => {
                console.log('list of image: ' + JSON.stringify(res));
                listImg = res.data.user.images;
                console.log("listImg:   " + listImg);
            },
            err => {
                console.log(`Error: ${err}`);
            }
        )

}