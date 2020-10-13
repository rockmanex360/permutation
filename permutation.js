function permutation(str, prefix, arr = []) {
	if (str.length == 0){
		prefix = prefix.split("");
    prefix.splice(prefix.length - (prefix.length - 4), prefix.length - 4);
    var value = prefix.join("");
    arr.push(value);
  } else {
  	for (let i = 0; i < str.length; i++){
    	let rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str[i], arr);
    }
  }
  return arr;
}

let str = "123";
var xx = permutation(str, "XX");
console.log([...new Set(xx)]);
