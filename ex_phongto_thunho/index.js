/**
 * Bai1
 */

// Cach binh thuong

function btnZoomInHome() {
  var fontSize = document.getElementById("home").style.fontSize;

  var fSize = Number(fontSize.replace("px", ""));

  fSize += 5;
  console.log(fSize);

  document.getElementById("home").style.fontSize = fSize + "px";
}

function btnZoomOutHome() {
  var fontSize = document.getElementById("home").style.fontSize;

  var fSize = Number(fontSize.replace("px", ""));
  fSize -= 5;
  document.getElementById("home").style.fontSize = fSize + "px";
}
