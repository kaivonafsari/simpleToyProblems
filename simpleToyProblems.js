var fizzBuzz = function(){
	for (var i = 0; i < 101; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("fizzBuzz");
		}else if (i % 3 === 0) {
			console.log("fizz");
		}else if (i % 5 === 0) {
			console.log("Buzz");
		}else {
			console.log(i)
		}
	}
};

var countTen = function(){
	var answer = [];
	
	var recurse = function(start){
		if (answer.length === 10) {
			return;
		}
		answer.push(start);
		
		start++;
		
		recurse(start);
	};
	
	recurse(0);
	
	return answer;
};

var reverseString = function(string){
	// var str = string.split('');
	var result;

	var recurse = function(string, letter, reverse){
		if (reverse.length === string.length){
			result = reverse;
			return;
		}
		
		reverse +=string[letter];
		letter--;
		recurse(string, letter, reverse);
	};

	recurse(string, string.length-1, "");
	
	return result;
};