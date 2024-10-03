const getColor = () =>{

    let randomColor = Math.floor( Math.random() * 16777215 )
    let colorCode = "#" + randomColor.toString (16)
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color-code").innerHTML = colorCode;

}

document.getElementById("click-me").addEventListener(
    "click",
    getColor
)

getColor();

