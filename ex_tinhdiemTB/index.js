/**
 *
 * Cach 1: DOM binh thuong
 *  */

// function tinhDiemTong() {
//   // tinh diem khoi A
//   // input: diem toan ly hoa
//   // du lieu nguoi dung nhap mac dinh la chuoi. Nen se su dungh ham number de ve so
//   var diemToan = Number(document.getElementById("diemToan").value);
//   var diemLy = Number(document.getElementById("diemLy").value);
//   var diemHoa = Number(document.getElementById("diemHoa").value);

//   var diemTBKA = (diemToan + diemLy + diemHoa) / 3;

//   // hien thi ra giao dien ben ngoai
//   document.getElementById("result1").innerHTML = diemTBKA;

//   // tinh diem khoi C
//   var diemVan = Number(document.getElementById("diemVan").value);
//   var diemSu = Number(document.getElementById("diemSu").value);
//   var diemDia = Number(document.getElementById("diemDia").value);

//   var diemTBKC = (diemVan + diemSu + diemDia) / 3;

//   document.getElementById("result2").innerHTML = diemTBKC;
// }

// Cach 2: su dung function return

function tinhDiemTong() {
  // tinh diem TB khoi A

  var diemToan = Number(document.getElementById("diemToan").value);
  var diemLy = Number(document.getElementById("diemLy").value);
  var diemHoa = Number(document.getElementById("diemHoa").value);

  var diemTBKA = tinhDiemTB(diemToan, diemHoa, diemLy);

  // xuat ket qua ra ngoai man hinh

  document.getElementById("result1").innerHTML = `Diem TB: ${diemTBKA}`;

  // Tinh diem TB Khoi C

  var diemVan = Number(document.getElementById("diemVan").value);
  var diemSu = Number(document.getElementById("diemSu").value);
  var diemDia = Number(document.getElementById("diemDia").value);

  var diemTBKC = tinhDiemTB(diemVan, diemSu, diemDia);

  // xuat ket qua ra ngoai man hinh

  document.getElementById("result2").innerHTML = `Diem TB: ${diemTBKC}`;
}

function tinhDiemTB(diem1, diem2, diem3) {
  var dtb = 0;
  dtb = (diem1 + diem2 + diem3) / 3;

  return dtb;
}
