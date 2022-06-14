$(document).ready(function() {

	//E-mail Ajax Send
	$("#our_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      swal({
      text: "Message was sent. Our team will contact you soon.",
      button: "OK"
      });
      console.log('done');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

/*burger menu*/
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
	const menuBody = document.querySelector('.menu_body');
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

/*if (iconMenu.classList.contains('_active')) {
	document.body.classList.remove('_lock');
	iconMenu.classList.remove('_active');
	menuBody.classList.remove('_active');
}*/
