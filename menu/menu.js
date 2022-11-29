$(document).ready(function () {
  menuInit();
});

const menuData = [
  {
    name: "메뉴1",
    img: "##",
    price: 5000,
    information: "메뉴 1 상세정보",
  },
  {
    name: "메뉴2",
    img: "##",
    price: 7000,
    information: "메뉴2 상세정보",
  },
];

function menuInit() {
  let menus = document.getElementsByClassName("menus");
  menus.innerHTML = "";

  for (let i = 0; i < menuData.length; i++) {
    const menuName = `<p>${menuData[i].name}</p>`;
    const menuImg = `<img src='${menuData[i].img}' alt="${menuData[i].name}">`;

    menus.innerHTML =
      menus.innerHTML +
      `<div class="menu" id="${menuData[i].name}">${menuName}${menuImg} </div>`;
  }

  const popup = document.getElementsByClassName("menuPopup");
  const menusDiv = Array.from(document.getElementsByClassName("menu"));

  const onMenuClick = (event) => {
    for (let i = 0; i < menuData.length; i++) {
      if (event.target.id === menuData[i].name) {
        const menuName = `<h1>${menuData[i].name}</h1>`;
        const menuImg = `<img src='${menuData[i].img}' alt="${menuData[i].name}">`;
        const menuInformation = `<p>${menuData[i].information}</p>`;

        popup.innerHTML = menuImg + menuName + menuInformation;
        return;
      }
    }
  };
  menusDiv.forEach((menu) => menu.addEventListener("click", onMenuClick));
}
