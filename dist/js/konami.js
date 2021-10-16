function vimmiaHuikka(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

document.addEventListener("DOMContentLoaded", function(){
	var np = "SmFub3MgVmFsbXVuZW4gLSBCdXNzaXB5cyZhdW1sO2tpbGwmYXVtbDsgKEJsb29kIFJhdmUgQm9tYmFrbGFhdCBSZW1peCk";
	vimmiaHuikka(function () {
		document.body.classList.add("k");
		var a = new Audio(atob("bXVzaWMvazEubXAz"), 1.5*1337/1*3*4.1337%80, true);
		a.loop = true;
		a.play();
		npt=document.createElement('p');
		npt.innerText = atob("Tm93IHBsYXlpbmc6IA")+atob(np).replace(/&auml;/g,"ä");
		var c=document.getElementById("countdown");
		c.parentNode.insertBefore(npt,c.nextSibling);

	});
});


