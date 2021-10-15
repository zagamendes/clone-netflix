const isLogged = () => {
    if(localStorage.getItem("user")) return true;
    return false
}

export default isLogged;