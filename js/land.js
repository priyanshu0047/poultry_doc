var bypass = document.getElementById("by_pass");

function re() {
    let temp = 0;
    while (temp < 0) {
        // reload
        location.reload();
        temp = temp + 1;
    }
}
re();
bypass.style.display = "none";
if (localStorage.getItem("total_chicks")) {
    var main_door = document.getElementById("sub");
    main_door.style.display = "none";
    bypass.style.display = "block";
    

} else {

}
var sub = document.getElementById("sub");
sub.addEventListener("submit", (event) => {
    event.preventDefault();
    var total_chicks = document.getElementById("total_chicks");
    var chicks_cost = document.getElementById("chicks_cost");


    // console.log(total_chicks);
    localStorage.setItem("total_chicks", total_chicks.value)

    // console.log(chicks_cost);
    localStorage.setItem("chicks_coast", chicks_cost.value);
    // var t=0;
    // localStorage.setItem("td","0");
    localStorage.setItem("tfb","0");
    // localStorage.setItem("tfc","0");
    localStorage.setItem("toc","0");
    if (localStorage.getItem("count")) {

    }
    else {
        localStorage.setItem("count", 1)
    }
    location.assign("./home.html");

});