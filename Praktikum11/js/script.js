document.querySelectorAll("#option a").forEach((a) => {
    //jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    //Pilihan User
    let pilihanUser = element.target.innerText;

    //Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    //Membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    //Pilihan random komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //Jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer) {
        setTimeout(() => {alert("Draw")}, 300); 
    }

    //Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors") {
        setTimeout(() => {alert("User Win");}, 300);
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock") {
        setTimeout(() => {alert("User Winn");}, 300);
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper") {
        setTimeout(() => {alert("User Winnn");}), 500;
    }

    //Jika pilihan bot menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors") {
        setTimeout(() => {alert("Bot Win");}, 300);
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock") {
        setTimeout(() => {alert("Bot Winn");}, 300);
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper") {
        setTimeout(() => {alert("Bot Winnn");}, 300);
    }

}