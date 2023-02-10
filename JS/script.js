function validate() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("Email").value;
    let c = document.getElementById("cal").value;
    let p = document.getElementById("people").value;
    let pla = document.getElementById("places").value;

    let nx = /^[a-z A-Z]{3,15}$/;
    let px = /^[0-9]{1,3}$/;
    let ex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (n == "") {
        alert("name is empty");
        return false;
    } else if (!nx.test(n)) {
        alert("name is not in format");
        return false;
    } else if (!px.test(p)) {
        alert("please select the number of people");
        return false;
    } else if (pla == 0) {
        alert("choose your destination");
        return false;
    } else if (!ex.test(e)) {
        alert("email is not according to format");
        return false;
    } else if (
        document.getElementById("c-1").checked == false &&
        document.getElementById("c-2").checked == false &&
        document.getElementById("c-3").checked == false
    ) {
        alert("please select atleast one checkbox");
        return false;
    } else if (c == "") {
        alert("select travel date");
        return false;
    } else if (
        document.getElementById("agree").checked == false &&
        document.getElementById("disagree").checked == false
    ) {
        alert("agree or disagree");
        return false;
    } else {
        return true;
    }
}
