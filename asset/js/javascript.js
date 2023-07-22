
function show() {
    if (document.getElementById('show').style.display == 'block') {
        document.getElementById('show').style.display = 'none'
    } else {
        document.getElementById('show').style.display = 'block'
    }
}



$(document).ready(function () {
    $(".hover-out").mouseover(function () {
        $(".hover-out").css("transform", "translateY(-20px)")
    });
    $(".hover-out").mouseout(function () {
        $(".hover-out").css("transform", "translateY(-20px)")
    })
})