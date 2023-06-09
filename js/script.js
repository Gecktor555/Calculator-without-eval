let a =  '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/'];

const out = document.querySelector('.calc-screen');

function clearAll() {
	a = '';//first number and result
	b = '';//second number
	sign = '';//sign
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	//button no pressed
	if(!event.target.classList.contains('btn')) return;
	//button pressed
	if(event.target.classList.contains('ac')) return;
	
	out.textContent = '';
	//get the pressed button
	const key = event.target.textContent;
	//if the button is pressed 0-9 or .
	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			//console.log(a, b, sign);
			out.textContent = a;
		}
		else if (a!=='' && b!=='' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		}
		else {
			b += key;
			out.textContent = b;
		}
		console.log(a, b, sign);
		return;
	}
	//if the button is pressed + - / *
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.log(a, b, sign);
		return;
	}
	//pressed =
	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "x":
				a = a * b;
				break;
			case "/":
				if (b === '0') {
					out.textContent = 'Error';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
		console.log(a, b, sign);
		
	}
}
