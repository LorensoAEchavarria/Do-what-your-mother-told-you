var happy=["https://blissfullymommy.com/wp-content/uploads/2017/07/The-Secret-to-Being-A-Happy-Mom.png"];
var angry=["http://clipartmag.com/images/angry-cartoon-image-9.jpg"];
var caring=["https://i.ytimg.com/vi/2ybXqGQvdH0/hqdefault.jpg"];
var stressed=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmJAGfz-bDmmkdc4UZLAK-ayvy_k25wofipyHtSrvYz5kbBhq"];

$('button').click(function(){
 var input=$(".browsers").val();
 console.log(input);
    $(".images").html("");
    if(input === "happy"){
        happyMom(input);
    }else if(input==="angry"){
        angryMom(input);
    }else if(input==="caring"){
        caringMom(input);
    }else if(input==="stressed"){
        stressedMom(input);
    }else{
        alert("Please enter happy, mad, caring, or stressed");   
    }
});

function changeBackground(color){
    $("html").css("background-color", color);
}
function changeTextColor(color){
    $("p").css("color", color);
}
function displayImage(image){
    $('.images').append('<img src ="'+ image + '">');
}

function happyMom(){
    changeBackground("yellow");
    changeTextColor("blue");
    displayImage(happy);
    $(".text").append("<ul><li>Doing what your supposed to do.</li></ul>");
}
function angryMom(){
    changeBackground("green");
    changeTextColor("orange");
    displayImage(angry);
    $(".text").append("<ul><li>Having a low grade.</li></ul>");

}
function caringMom(){
    changeBackground("green");
    changeTextColor("orange");
    displayImage(caring);
    $(".text").append("<ul><li>When your sick</li></ul>");

}function stressedMom(){
    changeBackground("green");
    changeTextColor("orange");
    displayImage(stressed);
    $(".text").append("<ul><li>Failing your classes</li></ul>");

}