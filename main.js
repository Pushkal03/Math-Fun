user1 = document.getElementById("user1").value;
user2 = document.getElementById("user2").value;


function login(){
    window.location="game.html"
    localStorage.setItem("player1", user1);
    localStorage.setItem("player2", user2);
}