function App() {
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
    const menus = [];
    for (let index = 0; index < menuData.length; index++) {
      menus.push(
        <form>
          <img src={menuData[index].img} alt={menuData[index].name} />
          <p>{menuData[index].name}</p>
        </form>
      );
    }
  };

  return <div>{menuRendering()}</div>;
}

export default App;
