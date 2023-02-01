console.log("welcome to my zero kata game");
let turn = "X";
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;
console.log("442 = ", isgameover);

const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("textbox");

  let arr = [
    [0, 1, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
    [0, 3, 6, -5, 15, 90,]
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
  ];
  arr.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].childNodes.length !== 0
    ) {
      // console.log("442", e);
      document.querySelector(".info").innerText =
      boxtext[e[0]].innerText + " Won";
      // console.log("442 = ", isgameover);
      isgameover = true;
      gameover.play();
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".textbox");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      // console.log("441 turn=",turn)
      boxtext.innerText = turn;
      // console.log("441 turn=",turn)
      turn = changeturn();
      audioTurn.play();
      // console.log("441 turn=",turn)
      checkWin();
      console.log("442 = ", isgameover);
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn of " + turn;
        // console.log("442 = ", isgameover);
      }
    }
  });
});


  let bt = document.getElementById("reset");
  bt.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".textbox");
    Array.from(boxtexts).forEach((element) => {
      element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
  });

