// BÀi 1: Tìm số chẵn/lẻ nhỏ hơn 100

// vòng lặp for
document.getElementById("timChanLe1").onclick = function () {
  for (var chan = "", le = "", i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      chan += " " + i;
    } else if (i % 2 != 0) {
      le += " " + i;
    }
  }
  document.getElementById("ketQua1").innerHTML =
    " Số chẵn: " + chan + "<br>" + "👉 Số lẻ: " + le;
};

// vòng lặp While
document.getElementById("timChanLe2").onclick = function () {
  var count = 0;
  var chan = "";
  var le = "";
  while (count < 100) {
    if (count % 2 == 0) {
      chan += " " + count;
      console.log(chan);
    } else if (count % 2 != 0) {
      le += " " + count;
    }
    count++;
  }
  document.getElementById("ketQua2").innerHTML =
    " Số chẵn: " + chan + "<br>" + "👉 Số lẻ: " + le;
};

// BÀi 2:  Đếm số chia hết cho 3

// vòng lặp for
document.getElementById("demSoChia3").onclick = function () {
  var count = 0;
  for (var i = 0; i <= 1000; i++) {
    if (i % 3 == 0) {
      count++;
    }
  }
  document.getElementById("result21").innerHTML =
    " Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
};

// vòng lặp While
document.getElementById("demSoChia31").onclick = function () {
  var count = 0,
    i = 0;
  while (i < 1000) {
    if (i % 3 == 0) {
      count++;
    }
    i++;
  }
  document.getElementById("result22").innerHTML =
    " Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
};

// BÀi 3: Tìm số nguyên dương nhỏ nhất
function timSoNguyenNN() {
  var n = 0;
  for (var s = 0; s < 10000; ) {
    n++;
    s += n;
  }

  document.getElementById("ketQua3").innerHTML =
    "Số nguyên dương nhỏ nhất: " + n;
}

// BÀi 4: Tính Tổng
function tinhTong() {
  for (
    var x = Number(document.getElementById("inpX").value),
      n = Number(document.getElementById("inpN").value),
      s = 0,
      i = 1;
    i <= n;
    i++
  )
    s += Math.pow(x, i);

  document.getElementById("txtTong").innerHTML = "Tổng :" + s;
}

// BÀi 5: Tính Giai Thừa

function tinhGiaiThua() {
  for (
    var n = document.getElementById("inpSo").value, s = 1, i = 1;
    i <= n;
    i++
  )
    s *= i;
  document.getElementById("txtGiaiThua").innerHTML = " " + n + "! = " + s;
}

// BÀi 6: Tạo thẻ Div

function taoThe() {
  for (var x = "", n = 0, i = 0; i <= 10; i++) {
    n = i % 2;
    if (n == 0) {
      x += "<div class='bg-danger text-white p-2'>Div chẵn</div>";
    } else {
      x += "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
    }
  }
  document.getElementById("txtTaoThe").innerHTML = x;
}

// BÀi 7: In số nguyên tố

function printNum() {
  var e = document.getElementById("inpNumber").value;
  for (var t = "", n = 1; n <= e; n++) {
    if (ktrSNT(n)) {
      t += " " + n;
    }
  }
  document.getElementById("txtNum").innerHTML = t;
}

function ktrSNT(e) {
  if (e < 2) return false;
  for (var t = 2; t <= Math.sqrt(e); t++) {
    if (e % t == 0) {
      return false;
    }
  }
  return true;
}
