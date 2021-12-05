
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("Player1_Score").innerHTML = player1_score;
document.getElementById("Player2_Score").innerHTML = player2_score;

function send() {
    
    number_1 = document.getElementById("No_1_input").value;
    number_2 = document.getElementById("No_2_input").value;
    
    actual_ans = parseInt(number_1) * parseInt(number_2);

    
    question_word = "<h4>" + number_1 + "X" + number_2 +"</h4>" 
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_word + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("No_1_input").value = "";
    document.getElementById("No_2_input").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_ans) {

    if (answer_turn == "player1" ) {
        player1_score = player1_score + 1;
        document.getElementById("Player1_Score").innerHTML = player1_score;
        console.log("player 1 score -" + player1_score);
    }

    else {
        player2_score = player2_score + 1;
        document.getElementById("Player2_Score").innerHTML = player2_score;
        console.log("player 2 score -" + player2_score);
    }
}

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_Ans").innerHTML = "Answer turn : " + player2_name;

    }
    else {
        answer_turn = "player1";
        document.getElementById("player_Ans").innerHTML = "Answer turn : " + player1_name;
    }
    if (question_turn == "player2") {
        question_turn = "player1";
        document.getElementById("player_Que").innerHTML = "Question turn : " + player1_name;
    }
    else {
        question_turn = "player2";
        document.getElementById("player_Que").innerHTML = "Question turn : " + player2_name;
    }

    document.getElementById("output").innerHTML = "";
}
