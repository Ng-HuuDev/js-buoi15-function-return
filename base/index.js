// Cach 1: Xu ly DOM dua tren di giao dien

// document.getElementById("pThongTin").innerHTML = "Helllo cyber";

// document.getElementById("sThongTin").innerHTML = "hello BootCamp 72";

// document.getElementById("aThongTin").innerHTML = "Chao Ban";

/**
 *  -----Ham dung de tai su dung logic code lap di lap lai nhieu lan
 * --------- Chia 1 bai toan lon thanh 1 bai toan con
 */

function inNoiDung(id, noiDung) {
  // input: tham so
  document.getElementById(id).innerHTML = noiDung;
  // style cho the
  document.getElementById(id).style.fontSize = "20px";
} // khai bao ham => chua dc thuc thi

// goi ham

inNoiDung("pThongTin", "Hello CyberSoft");
inNoiDung("sThongTin", "Xin Chao !");
inNoiDung("aThongTin", "Helelo CyberLearn");

/**
 *  ----- HAM CO GIA TRI TRA VE: function return
 */

// var soGioLam = 5;

// var tienLuongTrenGio = 100;

// var tienLuong = soGioLam * tienLuongTrenGio;

function tinhLuong(soGioLam, tienLuongTrenGio) {
  // xu ly
  var tienLuong = soGioLam * tienLuongTrenGio;

  // output
  return tienLuong; // tra ve cai gi thi xuat cai do
}

var tienLuong = tinhLuong(5, 100);
tienLuong += 100;
tienLuong = tienLuong / 3;
tienLuong = tienLuong / 2;
console.log("🚀 ~ tienLuong:", tienLuong);

/**
 *  --- Su dung function return : de tinh diem trung binh
 *
 */
