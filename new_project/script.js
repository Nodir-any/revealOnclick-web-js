const revealBtn = document.querySelector('.reveal-btn');
const hiddenText = document.querySelector('.hidden-text');

function revalEverything(){

	if(hiddenText.classList.contains('reveal-btn')
){
		hiddenText.classList.remove('reveal-btn')
	}else{
  		hiddenText.classList.add('reveal-btn')
  }
}


revealBtn.addEventListener('click', revalEverything);	