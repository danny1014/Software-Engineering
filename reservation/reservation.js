function onSubmitClick(event) {
  event.preventDefault();

  const member = event.target.member.value;
  const time = event.target.time;
  let selectTime = "";

  for (let i = 0; i < time.length; i++) {
    const element = time[i];
    if (element.checked === true) {
      selectTime = element.id;
    }
  }

  console.log(member);
  console.log(selectTime);
}

document
  .getElementById("formReservation")
  .addEventListener("submit", onSubmitClick);
