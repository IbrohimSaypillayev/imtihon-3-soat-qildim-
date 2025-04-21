let birinchi  = +prompt("1-sonni kiriting:");
let ikkinchi = prompt("Amalni tanlang:\n1) +\n2) -\n3) *\n4) /").trim();
let uchunchi = +prompt("2-sonni kiriting:");

let operator = "";

if (ikkinchi === "1") {
    operator = "+";
} else if (ikkinchi === "2") {
    operator = "-";
} else if (ikkinchi === "3") {
    operator = "*";
} else if (ikkinchi === "4") {
    operator = "/";
} else {
    alert("O eshak, 1 dan 4 gacha son kiriting!");
    operator = "?";
}

document.querySelector(".--qoshiluvchi").textContent = birinchi;
document.querySelector(".---qoshiluvchi").textContent = operator;
document.querySelector(".----qoshiluvchi").textContent = uchunchi;

document.querySelector(".button").addEventListener("click", function () {
    let result;

    if (operator === "+") {
        result = birinchi + uchunchi;
    } else if (operator === "-") {
        result = birinchi - uchunchi;
    } else if (operator === "*") {
        result = birinchi * uchunchi;
    } else if (operator === "/") {
        if (uchunchi === 0) {
            result = "o eshak nolga bolish mumkin emas !!";
        } else {
            result = birinchi / uchunchi;
        }
    } else {
        result = "Amal noto‘g‘ri tanlangan!";
    }

    document.querySelector(".jovobi-chiqsh").innerHTML = `<p style="text-align:center; margin-top:20px;">Javob: ${result}</p>`;
});
