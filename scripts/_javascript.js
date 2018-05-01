/*-----------begin slider--------------*/
window.onload = function(){
//console.log(Siema);
	var timer;
	var mySiema = new Siema ({
		selector: '.slider',
		draggable: false,
		loop: true,
		onInit: function(){
			nextSlide();
		},
		onChange: function(){
			nextSlide();
		}
	});
	function nextSlide(){
		timer = setTimeout(function(){
			mySiema.next();

		}, 4000);
	}
	document.getElementsByClassName('links')[0].onclick = function(){
		clearTimeout(timer);//
		mySiema.prev();

	}
	document.getElementsByClassName('rechts')[0].onclick = function(){
		clearTimeout(timer);//
		mySiema.next();
	}
};
/*-----------einde slider--------------*/

/*---------bovenstaande code geeft melding wanneer de gebruiker in de footer op verzenden klikt. 
Het heeft de bovenstaande melding weer, ter bevestiging dat de e-mail is verzonden----------*/
function myFunction() {
    alert("Je e-mail is verzonden. U hoort zo spoedig mogelijk van ons!");
};
/*-----------einde melding--------------*/
/*-----------begin login melding--------------*/
function inloggen() {
    alert("U bent succesvol ingelogd, klik nu op verder om de bestelling af te ronden.");
};
/*-----------Einde login melding--------------*/