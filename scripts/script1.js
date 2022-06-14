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
const iconMenu = document.querySelector('#menu_icon');
const closeElement = document.querySelector('.close_element');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
	const menuBody = document.querySelector('.menu_body');
	iconMenu.addEventListener("click", function(e){
		menuBody.classList.add('_active');
	});
	closeElement.addEventListener("click", function(e){
		menuBody.classList.remove('_active');
	});
}

let isDown = false;
let startX;
let scrollLeft;

const scrollBar = document.querySelector('.works_examples');
const wrapWorks = document.querySelector('.wrap_works');

scrollBar.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollBar.classList.add('active');
  startX = e.pageX - scrollBar.offsetLeft;
  scrollLeft = scrollBar.scrollLeft;
});
scrollBar.addEventListener('mouseleave', () => {
  isDown = false;
  scrollBar.classList.remove('active');
});
scrollBar.addEventListener('mouseup', () => {
  isDown = false;
  scrollBar.classList.remove('active');
});
scrollBar.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollBar.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  scrollBar.scrollLeft = scrollLeft - walk;
});
/*
wrapWorks.addEventListener('mousedown', (e) => {
	isDown = true;
	//scrollBar.style.transform = `translateX(${e.clientX}px)`;
	console.log(e.clientX);
});
wrapWorks.addEventListener('mouseup', (e) => {
	isDown = false;
	//scrollBar.style.transform = `translateX(${e.clientX}px)`;
	console.log(e.clientX);
});
wrapWorks.addEventListener('mousemove', (e) => {
	isDown ?
	scrollBar.style.transform = `translateX(${e.clientX}px)` :
	null;
	//console.log(e.clientX);
});
*/
