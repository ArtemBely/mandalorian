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
