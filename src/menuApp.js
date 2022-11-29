function MenuApp() {
  // 메뉴 데이터(이후 수정 예정)
  const menuData = [
    {
      name: "메뉴1",
      img: "##",
    },
    {
      name: "메뉴2",
      img: "##",
    },
  ];

  const menuRendering = () => {
    for (let index = 0; index < menuData.length; index++) {
      menus.push(
        <form>
          <img src={menuData[index].img} alt={menuData[index].name} />
          <p>{menuData[index].name}</p>
        </form>
      );
    }
  };

  return (
    <div>
      <h1>메뉴 목록 화면</h1>
      {menuRendering}
    </div>
  );
}

export default MenuApp;
