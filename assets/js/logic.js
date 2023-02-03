var highOrderItem = document.getElementById("highscores");
var highListItems = document.createElement("li");
highListItems.textContent = localStorage.getItem("score");
highOrderItem.append(highListItems);

