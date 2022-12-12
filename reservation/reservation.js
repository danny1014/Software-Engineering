const menuData = [
  {
    name: "메뉴1",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴1 상세정보",
  },
  {
    name: "메뉴2",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴2 상세정보",
  },
  {
    name: "메뉴3",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴3 상세정보",
  },
  {
    name: "메뉴4",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴4 상세정보",
  },
  {
    name: "메뉴5",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴5 상세정보",
  },
  {
    name: "메뉴6",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴6 상세정보",
  },
  {
    name: "메뉴7",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴7 상세정보",
  },
  {
    name: "메뉴8",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴8 상세정보",
  },
  {
    name: "메뉴9",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴9 상세정보",
  },
  {
    name: "메뉴10",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴10 상세정보",
  },
  {
    name: "메뉴11",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴11 상세정보",
  },
  {
    name: "메뉴12",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴12 상세정보",
  },
];

// 메뉴 추가
const menus = document.querySelector(".menus");

for (let i = 0; i < menuData.length; i++) {
  const element = menuData[i];
  const name = `<p class="menuName">${element.name}</p>`;
  const img = `<img class="menuImg" src='${menuData[i].img}' alt="${menuData[i].name} 이미지">`;
  const count = `<input class="menuCount" name="menuCnt" type="number" min='0' step='1' value="0">`;

  menus.innerHTML += `<div class="menu">${img + name + count}</div>`;
}

// 예약 확인 이벤트
var reservationData = {};
function onSubmitClick(event) {
  event.preventDefault();

  const member = event.target.member.value;
  const time = event.target.time;
  const menusCnt = event.target.menuCnt;
  const userName = event.target.name.value;
  const userPhone = event.target.phone.value;

  let selectTime = "";
  for (let i = 0; i < time.length; i++) {
    const element = time[i];
    if (element.checked === true) {
      selectTime = element.id;
    }
  }

  let counts = [];
  for (let i = 0; i < menusCnt.length; i++) {
    const element = menusCnt[i];
    counts.push(element.value);
  }

  reservationData.member = member;
  reservationData.time = time;
  reservationData.menu = counts;
  reservationData.name = userName;
  reservationData.phone = userPhone;

  console.log("인원수: " + member);
  console.log("예약시간: " + selectTime);
  console.log("예약 메뉴: " + counts);
  console.log("예약자명: " + userName);
  console.log("예약자 폰번호: " + userPhone);
  console.log(reservationData);
}

document
  .getElementById("formReservation")
  .addEventListener("submit", onSubmitClick);
