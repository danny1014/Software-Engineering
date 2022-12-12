const menuData = [
  {
    name: "메뉴1",
    dish: "main",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴1 상세정보",
  },
  {
    name: "메뉴2",
    dish: "main",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴2 상세정보",
  },
  {
    name: "메뉴3",
    dish: "main",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴3 상세정보",
  },
  {
    name: "메뉴4",
    dish: "main",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴4 상세정보",
  },
  {
    name: "메뉴5",
    dish: "main",

    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴5 상세정보",
  },
  {
    name: "메뉴6",
    dish: "main",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴6 상세정보",
  },
  {
    name: "메뉴7",
    dish: "sub",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴7 상세정보",
  },
  {
    name: "메뉴8",
    dish: "sub",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴8 상세정보",
  },
  {
    name: "메뉴9",
    dish: "sub",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴9 상세정보",
  },
  {
    name: "메뉴10",
    dish: "sub",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴10 상세정보",
  },
  {
    name: "메뉴11",
    dish: "sub",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴11 상세정보",
  },
  {
    name: "메뉴12",
    dish: "sub",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴12 상세정보",
  },
  {
    name: "메뉴13",
    dish: "drink",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴10 상세정보",
  },
  {
    name: "메뉴14",
    dish: "drink",
    img: "../img/menuImg.png",
    price: 5000,
    information: "메뉴11 상세정보",
  },
  {
    name: "메뉴15",
    dish: "drink",
    img: "../img/menuImg.png",
    price: 7000,
    information: "메뉴12 상세정보",
  },
];

function menuInit() {
  const main = document.getElementById("main_menus");
  const sub = document.getElementById("sub_menus");
  const drink = document.getElementById("drink_menus");

  console.log("success");

  for (let i = 0; i < menuData.length; i++) {
    const menuName = `<p class="menuName" id="name${menuData[i].name}">${menuData[i].name}</p>`;
    const menuImg = `<img class="menuImg" id="img${menuData[i].name}" src='${menuData[i].img}' alt="${menuData[i].name} 이미지">`;

    if (menuData[i].dish === "main") {
      main.innerHTML =
        main.innerHTML +
        `<div class="menu" id=${menuData[i].name}>${menuImg}${menuName}</div>`;
    } else if (menuData[i].dish === "sub") {
      sub.innerHTML =
        sub.innerHTML +
        `<div class="menu" id=${menuData[i].name}>${menuImg}${menuName}</div>`;
    } else if (menuData[i].dish === "drink") {
      drink.innerHTML =
        drink.innerHTML +
        `<div class="menu" id=${menuData[i].name}>${menuImg}${menuName}</div>`;
    }
  }

  const body = document.querySelector("body");
  const menusDiv = Array.from(document.getElementsByClassName("menu"));
  const popupWrap = document.getElementById("popupWrap");
  const popup = document.getElementById("popupInner");

  console.log(menusDiv);
  // 팝업 닫기 event
  const onCloseClick = () => {
    popup.innerHTML = "";
    popupWrap.style.display = "none";
    body.style.overflow = "visible";
  };

  // 팝업 열기 event
  const onMenuClick = (event) => {
    console.log("click");
    const id = event.target.id;

    for (let i = 0; i < menuData.length; i++) {
      popupWrap.style.display = "block";
      const element = menuData[i];

      console.log("event target: " + event.target);
      console.log("element name: " + element.name);
      console.log("id: " + id + "\n");
      console.log("id" + element.name);

      if (
        id === element.name ||
        id === "img" + element.name ||
        id === "name" + element.name
      ) {
        console.log("search" + element);
        const menuName = `<h1 class="popupName">${element.name}</h1>`;
        const menuImg = `<img class="popupImg" src='${element.img}' alt="${element.name}">`;
        const menuInformation = `<pre class="popupInfo">${element.information}
.
.
.
.
.
        </pre>`;
        const closeBtn = `<button id="closeBtn">닫기</button>`;

        body.style.overflow = "hidden";

        popup.innerHTML = menuImg + menuName + menuInformation + closeBtn;

        document
          .getElementById("closeBtn")
          .addEventListener("click", onCloseClick);

        popupWrap.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        return;
      }
    }
  };

  for (let i = 0; i < menusDiv.length; i++) {
    const element = menusDiv[i];
    element.addEventListener("click", onMenuClick);
  }

  // menusDiv.forEach((menu) => menu.addEventListener("click", onMenuClick));
}

document.addEventListener("DOMContentLoaded", menuInit);
