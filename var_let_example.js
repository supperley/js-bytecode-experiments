"use strict"

function bc_func() {
	const bc_showVar = () => {
	console.log(var_declr);
	}
	
	const bc_showLet = () => {
	console.log(let_declr);
	}

	var var_declr = "I'm var";
	let let_declr = "I'm let";
	
	bc_showVar();
	bc_showLet();
}

bc_func();
