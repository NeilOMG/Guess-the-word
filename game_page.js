player_1_name = localStorage.getItem("player_1");
player_2_name = localStorage.getItem("player_2");

var player_1_score = 0
var player_2_score = 0

document.getElementById("player1_name").innerHTML = player_1_name + ": "
document.getElementById("player2_name").innerHTML = player_2_name + ": "

document.getElementById("player1_score").innerHTML = player_1_score
document.getElementById("player2_score").innerHTML = player_2_score

document.getElementById("player_question").innerHTML = "question turn :" + player_1_name
document.getElementById("player_answer").innerHTML = "answer turn :" + player_2_name


function send() {

    var getWord = document.getElementById("word_input").value;
    word = getWord.toLowerCase();
    console.log(word)

    second_letter = word.charAt(1);
    length_divided_by_2 = Math.floor(word.length / 2)
    middle_letter = word.charAt(length_divided_by_2);
    last_letter = word.charAt(word.length - 1);

    remove_charAt1 = word.replace(second_letter, "_");
    remove_middle_charAt = remove_charAt1.replace(middle_letter, "_");
    remove_last_charAt = remove_middle_charAt.replace(last_letter, "_")

    question = "<h4 id='word_display'>Q:" + remove_last_charAt + "</h4>"
    input = "<br><input type='text' id='input_check_box'>"
    button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>"

    row = question + input + button;

    document.getElementById("output").innerHTML = row
}

question_turn = "player1"
answer_turn = "player2"

function check() {

    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase()

    if (answer == word) {

        if (answer_turn == "player1") {

            player_1_score = player_1_score + 1
            document.getElementById("player1_score").innerHTML = player_1_score

        }
        else {

            player_2_score = player_2_score + 1
            document.getElementById("player2_score").innerHTML = player_2_score

        }

    }

    if(question_turn=="player1"){

        question_turn="player2"
        document.getElementById("player_question").innerHTML = "question turn :" + player_2_name

    }
    else{

        question_turn="player1"
        document.getElementById("player_question").innerHTML = "question turn :" + player_1_name

    }

    if(answer_turn=="player1"){

        answer_turn="player2"
        document.getElementById("player_answer").innerHTML = "answer turn :" + player_2_name

    } 
    else{

        answer_turn="player1"
        document.getElementById("player_answer").innerHTML = "answer turn :" + player_1_name

    }
    
    document.getElementById("output").innerHTML=""

}