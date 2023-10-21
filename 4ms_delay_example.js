// setTimeout(() => {
//     var theStartTimestamp = performance.now();
//     setTimeout(() => {
//         var delta = (performance.now() - theStartTimestamp);
//         console.log(delta);
//     }, 0)
// }, 0)

// 4 ms delay example
setTimeout(() => {
	// 1st nesting
    setTimeout(() => {
		// 2nd nesting
        setTimeout(() => {
			// 3rd nesting
            setTimeout(() => {
				// 4th nesting
                var theStartTimestamp = performance.now();
                setTimeout(() => {
					// 5th nesting
                    var delta = (performance.now() - theStartTimestamp);
                    console.log(delta);
                }, 0) // converts to 4ms
            }, 0)
        }, 0) 
    }, 0)
}, 0)