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

function menuInit() {
  const menus = document.getElementById("menus");
  console.log("success");

  for (let i = 0; i < menuData.length; i++) {
    const menuName = `<p class="menuName" id="name${menuData[i].name}">${menuData[i].name}</p>`;
    const menuImg = `<img class="menuImg" id="img${menuData[i].name}" src='${menuData[i].img}' alt="${menuData[i].name} 이미지">`;

    menus.innerHTML =
      menus.innerHTML +
      `<div class="menu" id=${menuData[i].name}>${menuImg}${menuName}</div>`;
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
