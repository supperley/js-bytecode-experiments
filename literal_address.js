var theThing = "abc";
var theThing2 = "abc";

// theThing & theThing2 links to the same string literal address  
// "abc" - expression

%DebugPrint(theThing);
%DebugPrint(theThing2);

// if (theThing === theThing2)
// compare addresses

var theArr = [];
theArr.push(theThing);
theArr.push(theThing);
theArr.push(theThing);

%DebugPrint(theArr[0]);
%DebugPrint(theArr[1]);
%DebugPrint(theArr[2]);