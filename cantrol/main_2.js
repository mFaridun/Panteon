// Qo’yliqqa, Chorsuga va Oloy bozorga boradigan avtobuslarni chiqaradigan dasturni tuzing. Foydalanuvchi Qo’yliqni tanlasa 7, 93 deb chiqaring. Chorsu - 3, 54, 12. Oloy - 434, 5545, 11111.

let name = "Qo'yliq"

if (name == "Qo'yliq") {
  console.log(7, 93);
}
else {
    if (name == "Chorsu") {
  console.log(3, 54, 12);
}

else {
  console.log(434, 5545, 11111);
}
}

// Foydalanuvchi yoshini kiritish kerak. Yoshi 0 dan 30 gacha bo’lsa, unga “yoshsiz” deb yozing. Yoshi 30 dan 60 gacha bo’lsa, unga “kattasiz” deb yozing. Yoshi 60 dan yuqori bo’lsa, unga siz qarisiz deb yozing.

let n = 45; // n < 0

if (n > 0 && n <= 30) {
  console.log("yoshsiz");
}
else {
  if (n < 30 && n <= 60) {
  console.log("kattasiz");
}
else {
  console.log("qarisiz");
}
}

// Foydalanuvchidan ismini so’rang. Ismi “Ali” bo’lsa, unga “Salom og’a” deb yozing. Ismi “Ahmad” bo’lsa, unga “Ko’rinmayapsan dostim, nima qilyapsan?” deb yozing.

let lastName = "Ali";

if (lastName == "Ali") {
  console.log("Salom og'a");
}
else {
  if (lastName == "Ahmad") {
  console.log("Jo'ra ko'rinmaysan");
}
else {
  console.log("Bunaqa ism topilmadi !!!");
}
}
