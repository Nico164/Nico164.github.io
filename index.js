let email = document.getElementById("email")
let password = document.getElementById("password")
let e= "admin@admin.com"
let p= "12345"

function signin() {
    if (e==email.value && p==password.value) {
        console.log("berhasil login")
    }
    else console.log("gagal login")
}