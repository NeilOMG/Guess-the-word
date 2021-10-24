var player_1_name=""
var player_2_name=""

function login(){

player_1_name=document.getElementById("input1").value
player_2_name=document.getElementById("input2").value

if(player_1_name=="" && player_2_name==""){


document.getElementById("input1").placeholder="Name Required"
document.getElementById("input2").placeholder="Name Required"
document.getElementById("input1").classList.add("input")
document.getElementById("input2").classList.add("input")

}

else if(player_1_name==""){

    document.getElementById("input1").placeholder="Name Required"
    document.getElementById("input1").classList.add("input")
}

else if(player_2_name==""){

    document.getElementById("input2").placeholder="Name Required"
    document.getElementById("input2").classList.add("input")
}

else{

    localStorage.setItem("player_1" , player_1_name)
    localStorage.setItem("player_2" , player_2_name)
    window.location="game_page.html"
}

}