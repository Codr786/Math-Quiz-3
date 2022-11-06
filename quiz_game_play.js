function login()
{
    player1_name = localStorage.getItem("player1_name");
    player1_name = localStorage.getItem("player1_name");

    player1_score = 0;
    player2_score = 0;

    document.getElementById("player1_name").innerHTML = player1_name + " : ";
    document.getElementById("player2_name").innerHTML = player2_name + " : ";

    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("question_turnp").innerHTML = "Question Turn - " + player1_name;
    document.getElementById("answer_turnp").innerHTML = "Answe Turn - " + player2_name;

    function send()
    {
        output_p1 = document.getElementById("output_p1").value;
        output_p2 = document.getElementById("output_p2").value;
        actual_answer = parseInt("output_p1") * parseInt("output_p2");
        output = "<h4 id='word-display'>" + output_p1+" * "+output_p2+"</h4>";
        input_box = "<br> Answer : <input type='text' id='input_checkbox'>";
        check_button = "<br> <br> <button onclick='check()' class='btn btn-info'> Check </button>";
        row = output + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("output_1").innerHTML = "";
        document.getElementById("output_2").innerHTML = "";


    }
}