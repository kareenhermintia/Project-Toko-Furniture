function validate() {
  var username = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  switch ([username, password].join(",")) {
    case "joji,furniture":
      alert("Selamat Datang joji!");
      window.location = "lsukses.html";
      break;
    case "nikizefanya,furniture":
      alert("Selamat Datang niki!");
      window.location = "lsukses.html";
      break;
    case "richbrian,furniture":
      alert("Selamat Datang richbrian!");
      window.location = "lsukses.html";
      break;
    default:
      alert("Login Tidak Berhasil");
      return false;
  }
}
