var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');

admitted.textContent = 'Admit : ';
refused.textContent = 'Refused : ';

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var i = 0;
for( i = 0; i < people.length; i++){
	if(people[i] == 'Phil' || people[i] == 'Lola'){
		refused.textContent += people[i] + ' ,';
	}
	else
		admitted.textContent += people[i] + ' ,';
}
