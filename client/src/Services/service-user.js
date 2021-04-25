import axios from "axios";
export let nameUser = '';
export let idUser = '';

export async function getUserId(userPassword) {
    debugger
    await axios.post('http://localhost:4000/user/getUserId', userPassword).then(
        res => {
            console.log(res.text());
            idUser = res;
            alert(idUser);
        },
        err => {
            console.log(`Error: ${err}`);
        }
    )
}

export async function createUser(user) {
    await axios.post('http://localhost:4000/user/createUser', user).then(
        res => {
            console.log('create user: ' + JSON.stringify(res));
            idUser = res.data.user._id;
            localStorage.setItem('token', res.data.token);
        },
        err => {
            console.log(`Error: ${err}`);
        }
    )
}

export async function loginUser(user) {
    console.log(user, "login");
    await axios.post(`http://localhost:4000/user/loginUser`, user)
        .then(
            res => {
                if (res === "You are not registered in the system") {
                    alert('The user is not defined, Please register')
                }
                else {
                    console.log('login user: ' + JSON.stringify(res));
                    idUser = res.data.user._id;
                    console.log(idUser);
                    localStorage.setItem('token', res.data.token);
                }
            }, err => {
                console.log(`Error!!: ${err}`);
            }
        )
}