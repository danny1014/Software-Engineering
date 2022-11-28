const menuData = [
  {
    name: "메뉴1",
    img: "./img/menuImg.png",
    price: 5000,
    information: "메뉴 1 상세정보",
  },
  {
    name: "메뉴2",
    img: "./img/menuImg.png",
    price: 7000,
    information: "메뉴2 상세정보",
  },
];

function menuInit() {
  let menus = document.getElementById("menus");
  console.log(menus);

  for (let i = 0; i < menuData.length; i++) {
    const menuName = `<p class="menuName">${menuData[i].name}</p>`;
    const menuImg = `<img class="menuImg" src='${menuData[i].img}' alt="${menuData[i].name} 이미지">`;

    menus.innerHTML =
      menus.innerHTML +
      `<div class="menu" id=${menuData[i].name}>${menuImg}${menuName}</div>`;
  }

  const menusDiv = Array.from(document.getElementsByClassName("menu"));
  const popup = document.getElementById("menuPopup");

  const onMenuClick = (event) => {
    console.log("click");
    for (let i = 0; i < menuData.length; i++) {
      console.log(`search ${i}`);
      console.log(event.target);
      console.log(menuData[i].name);
      if (event.target.id === menuData[i].name) {
        console.log("search" + menuData[i]);
        const menuName = `<h1 class="popupName">${menuData[i].name}</h1>`;
        const menuImg = `<img class="popupImg" src='${menuData[i].img}' alt="${menuData[i].name}">`;
        const menuInformation = `<p class="popupInfo">${menuData[i].information}</p>`;

        popup.innerHTML = menuImg + menuName + menuInformation;
        return;
      }
    }
  };
  menusDiv.forEach((menu) => menu.addEventListener("click", onMenuClick));
}

document.addEventListener("DOMContentLoaded", menuInit);
