import { useState } from 'react';

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '+', '*', '-', '.'];

	const updateCalc = value => {
		if (
			ops.includes(value) && calc === '' ||
			ops.includes(value) && ops.includes(calc.slice(-1))
		){
			return;
		}

		setCalc(calc + value)

		if(!ops.includes(value)){
			setResult(eval(calc + value).toString())
		}
	}

	const createDigits = () => {
		const digits = [];

		for (let i=1; i<10; i++) {
			digits.push(
				<button onClick = {() => updateCalc(i.toString())} key={i}>{i}</button>
			)
		}

		return digits;
	}

	const calculator = () => {
		setCalc(eval(calc).toString());

		if (calc == '0'){
			return '0';
		}
	}

	const deletelast = () => {
		if(calc == ''){
			return;
		}

		const value = calc.slice(0, -1);
		setCalc(value);
	}
  return (
    <div className="App">
      <div className="calculator">
				<div className="display">
					{ result ? <span>({result})</span> : '' } {calc || '0'}
				</div>
				<div className="operators">
					<button onClick = {() => updateCalc('/')}>/</button>
					<button onClick = {() => updateCalc('+')}>+</button>
					<button onClick = {() => updateCalc('*')}>*</button>
					<button onClick = {() => updateCalc('-')}>-</button>
					
					<button onClick={deletelast} >Del</button>
				</div>
				<div className="digits">
					{ createDigits() }
					<button onClick = {() => updateCalc('.')}>.</button>
					<button onClick = {() => updateCalc('0')}>0</button>

					<button onClick = {calculator}>=</button>
				</div>
			</div>
    </div>
  );
}

export default App;
