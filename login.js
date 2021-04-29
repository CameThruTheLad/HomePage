function loginFunction () {
    var username = document.getElementById("Uname").value;
    var password = document.getElementById("Password").value;

    if (username === 'hannyharman' && password === 'CTTL') {
        window.location.href = "index.html";
    } else if (username === 'queenstown' && password === 'queenstown') {
        window.location.href = "queenstown.html";
    } else {
        alert("Incorrect Username/Password.");
    }
}