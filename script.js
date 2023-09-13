/* Iteration 4: Make the Canvas App Functional */
const imgfaceplate = document.getElementById("face-plate")
const buttonfaceplate=document.getElementById("buttonfaceplate")
buttonfaceplate.oninput=() => {
imgfaceplate.style.fill =buttonfaceplate.value;
}
const imgeyes = document.getElementById("eyes")
const buttoneyes=document.getElementById("button-eyes")
buttoneyes.oninput=() => {
  imgeyes.style.fill = buttoneyes.value;
}
const imghelmet = document.getElementById("helmet")
const buttonhelmet=document.getElementById("button-helmet")
buttonhelmet.oninput=() => {
  imghelmet.style.fill = buttonhelmet.value;
}
const imgbackground = document.getElementById("background")
const buttonbackground=document.getElementById("button-background")
buttonbackground.oninput=() => {
  imgbackground.style.fill = buttonbackground.value;
}

