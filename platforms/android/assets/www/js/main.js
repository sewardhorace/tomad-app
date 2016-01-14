var messages = ["third", "first", "second"];
$.support.cors=true;
$("button").each(function (idx){
  console.log("setup");
  var data = {args : messages[idx]};
  $(this).on("touchstart",function (e) {
    $.ajax({
        type: "POST",
        url: "https://api.particle.io/v1/devices/3f0020000e47343432313031/activate?access_token=8b2439c0e2c61259753e35803af98fe2953ac2ca",
        data: data,
        success: function (data) {
          console.log("lit up section "+data.return_value);
        }
    });
  });
});
