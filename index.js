import login from "./login.js";
import register from "./register.js";

let root = document.getElementById("root")

let allAnchors = document.querySelectorAll("a")

let router = {
    "/login": login,
    "/register": register
}


function handleClick(e) {
    e.preventDefault();
    let path = e.target.pathname
    history.pushState(null, "", `${path}`)
    root.innerHTML = router[path]()


}

allAnchors.forEach((anchor) => {
    anchor.addEventListener("click", handleClick);
})
