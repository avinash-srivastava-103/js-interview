/* Creating a array on N natural numbers */

var arr = Array.apply(null, {length: 10}).map(function(value, index) {
	return index+1;
});
