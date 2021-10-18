user_1 = document.getElementById("user1").value;
user_2 = document.getElementById("user2").value;


function login(){
    user_1 = document.getElementById("user1").value;
    user_2 = document.getElementById("user2").value;
    localStorage.setItem("player1", user_1);
    localStorage.setItem("player2", user_2);
    window.location="game.html"
}