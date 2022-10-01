const revealBtn = document.querySelector('.reveal-btn');    //grabbing the elements
const hiddenText = document.querySelector('.hidden-text');    //grabbing the elements


//funcion declaration

function revalEverything(){

	if(hiddenText.classList.contains('reveal-btn')
){
		hiddenText.classList.remove('reveal-btn')
	}else{
  		hiddenText.classList.add('reveal-btn')
  }
}


//function call

revealBtn.addEventListener('click', revalEverything);	
