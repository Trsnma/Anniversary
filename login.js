(function () {
  const submit = document.getElementById("submit");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

  // tanggal jadian
  const date = "011024";

  submit.addEventListener("click", () => {
    const inputPassword = password.value;
    if (!inputPassword) {
      message.textContent = "Harap Masukkan Tanggal Jadian";
      message.style.color = "#ff5b5b";
      return;
    }
    if (inputPassword == date) {
      window.location.href = "../html/music.html";
    } else {
      message.textContent = "Tanggal Jadian Salah";
      message.style.color = "#ff5b5b";
    }
  });

  password.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      submit.click();
    }
  });
})();
