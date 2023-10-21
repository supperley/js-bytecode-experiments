function bc_func() {
	function bc_add(theThing2) {
		// theThing ptr === theThing2 ptr -> copy by shared (NOT by value), ECMA 5.2 "reference-like"
		%DebugPrint(theThing2);
	}

	var theThing = "abc";
	%DebugPrint(theThing);
	bc_add(theThing);
}

bc_func();