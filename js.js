function registerUser() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const errorDiv = document.getElementById("error");
  const successDiv = document.getElementById("success");
  errorDiv.innerText = "";
  successDiv.innerText = "";
  const existingUser = JSON.parse(localStorage.getItem("userAccount"));
  if (existingUser && existingUser.username === username) {
    errorDiv.innerText = "Tên đăng nhập đã tồn tại";
    return false;
  }

  const newUser = {
    name,
    phoneNumber: phone,
    email,
    username,
    password,
  };

  localStorage.setItem("userAccount", JSON.stringify(newUser));
  successDiv.innerText = "Đăng ký thành công! Đang chuyển hướng.";

  setTimeout(() => {
    window.location.href = "dangnhap.htm";
  }, 1500);

  return false;
}
