var ronaldo = document.getElementById("ronaldo");
var messi = document.getElementById("messi");
var display = document.getElementById("display");

ronaldo.addEventListener("click", function() {
    display.innerHTML = "Cristiano Ronaldo is one of the top players in soccer. He has 5 Ballon D'or Awards and is currently playing for Real Madrid. Cristiano Ronaldo is from Portugal and he is going to play in the World Cup in 2018 in Russia. He is considered by many to be the best player in the world. Ronaldo is the highest rated regular player in FIFA 18, the video game version of soccer."
});

messi.addEventListener("click", function() {
    display.innerHTML = "Lionel Messi is also one of the top players in soccer. He also has won 5 Ballon D'or Awards and is currently playing for Barcelon FC. Lionel Messi is from Argentina and he is going to play in the World Cup in 2018 in Russia. He is also considered by many to be the best player in the world. Messi is the 2nd highest rated regular player in FIFA 18, the videdo game version of soccer."
});
