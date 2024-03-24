const sunBtn=document.querySelector(".sun")
const icon=document.querySelector(".icon")

function handleToggle() {  
    const mode=readMode()
    let next;
    if (mode==="light") {
        next="dark"
    }
    else{
        next="light"
    }
    displayMode(next)
    saveMode(next)
}

function saveMode (mode) {
    localStorage.setItem("mode", mode)
}

function readMode () {
    const mode=localStorage.getItem("mode")||"dark"
        return mode
}

function displayMode(mode) {
    if (mode==="light"){
        icon.src="./assets/img/sunrise-fill.svg"
    }
        else {
            icon.src="./assets/img/sunrise.svg"
        }
        document.body.classList=mode
}
    displayMode(readMode())









icon.addEventListener("click",handleToggle)