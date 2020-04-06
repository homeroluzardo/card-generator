window.onload = () => {
  let x = generateSym();
  document.querySelector("#number").innerHTML = generateNumber();
  document.querySelector("#cardtype").innerHTML = x;
  document.querySelector("#cardtype2").innerHTML = x;

  document.querySelector("#btn").addEventListener("click", () => {
    let y = generateSym();
    document.querySelector("#number").innerHTML = generateNumber();
    document.querySelector("#cardtype").innerHTML = y;
    document.querySelector("#cardtype2").innerHTML = y;
  });
};

let generateNumber = () => {
  let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let numIndex = Math.floor(Math.random() * num.length);
  return num[numIndex];
};

let generateSym = () => {
  let sym = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let symIndex = Math.floor(Math.random() * sym.length);
  if (sym[symIndex] === "&#9829" || sym[symIndex] === "&#9830") {
    document.getElementById("cardtype").style.color = "red";
    document.getElementById("cardtype2").style.color = "red";
  } else {
    document.getElementById("cardtype").style.color = "black";
    document.getElementById("cardtype2").style.color = "black";
  }
  return sym[symIndex];
};
