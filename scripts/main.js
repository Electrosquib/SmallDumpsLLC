let length = $("#length");
let width = $("#width");
let height = $("#height");
let total = $("#total");

$("#subbutt").click(() => {
    let vol = (length.val() * width.val() * (height.val()/12))*0.037037;
    vol = Math.round(vol *10)/10;
    total.text(vol);
})

function mobile_nav() {
    $(".navbar").toggle();
}