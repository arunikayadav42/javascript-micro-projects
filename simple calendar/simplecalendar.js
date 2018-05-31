var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function(){
	var choice = select.value;
	if(choice==='january' || choice==='march' || choice==='may' || choice==='july' || choice==='august' || choice==='october' || choice==='december')
			createCalendar(31, choice);
	else if(choice==='february' || choice==='april' || choice==='june' || choice==='september' || choice==='november')
			createCalendar(30, choice);		

}

function createCalendar(days, choice){
	list.innerHTML = '';
	h1.textContent = choice;
	for(var i = 0; i <= days; i++){
		var listitem = document.createElement('li');
		listitem.textContent = i;
		list.appendChild(listitem);
	}
}

createCalendar(31, 'january');