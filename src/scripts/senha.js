function mostrarSenha(){
  const passwordInput = document.getElementById("password");
  const showPasswordButton = document.getElementById("showPassword");

  showPasswordButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
}