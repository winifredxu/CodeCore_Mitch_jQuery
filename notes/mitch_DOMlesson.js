/* DOM Tree Diagram

=> window, document, documentElement, childNotes, parentNode
=> node list, node

- DEMO: 

*/

var countIter = function(node) {
	var total = 1;
	var len = node.childNodes.length; 

	for (var i=0; i<len; i+=1) {
		total += countChildren(node.childNodes[i]);
	};
	return total;
}

countIter(document.documentElement.childNodes);

// there is a method that does this for you: 

/* document.location.href
Exercise: print URL
Change our dynamic page to write the page's current URL to page using document.write
*/