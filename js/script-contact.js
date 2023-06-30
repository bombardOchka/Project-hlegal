function checkParams() {
  const fio = $("#fio").val();
  const email = $("#email").val();
  const phone = $("#phone").val();
  const text = $("#text").val();

  if (
    fio.length != 0 &&
    email.length != 0 &&
    phone.length != 0 &&
    text.length != 0
  ) {
    $(".btn-send").removeAttr("disabled");
  } else {
    $(".btn-send").attr("disabled", "disabled");
    $(".form-field").addClass("req");
  }
}

$(".btn-send").click(function () {
  $(".btn.btn-send").text("Sent");
  $(".btn.btn-send").css({
    "background-color": "#EDEDF7",
    color: "#323264",
    "box-shadow": "none",
    "border-color": "#EDEDF7",
  });
  $(".form-field").attr("disabled", "disabled");
});

/*----------------------------*/
const button = document.querySelector(".popupBtn");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".close");
const burger = document.querySelector(".burger");

button.addEventListener("click", clickHandler);
popup.addEventListener("click", closeHandler);

function clickHandler() {
  popup.classList.add("active");
  burger.classList.add("hidden");
}

function closeHandler(event) {
  if (event.target === popup || event.target === close) {
    popup.classList.remove("active");
    burger.classList.remove("hidden");
  }
}
