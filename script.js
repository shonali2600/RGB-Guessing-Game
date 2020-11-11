var numOfColor = 6;
var colors = generateColor(numOfColor);
var pickedColor = pickColor();

var squares = document.getElementsByClassName("squares");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

colorDisplay.textContent = pickedColor;
reset.addEventListener("click",function(){
    colors = generateColor(numOfColor);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    message.textContent = " ";
});
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("active");
    hardBtn.classList.remove("active");
    numOfColor = 3;
    colors = generateColor(numOfColor);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

});
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("active");
    easyBtn.classList.remove("active");
    numOfColor = 6;
    colors = generateColor(numOfColor);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Correct!!!"
            changeColor(pickedColor);
            reset.textContent = "Play again?";
        }
        else{
            this.style.backgroundColor = "black";
            message.textContent = "Try Again!!!";
        }
    });
}
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateColor(num){
    var arr= [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}
