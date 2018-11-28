/* Creating a array on N natural numbers */

var arr = Array.apply(null, {length: 10}).map(function(value, index) {
	return index+1;
});


function compare_obj(a,b){
	console.log(">>compare_obj");

	if(Object.keys(a).length != Object.keys(b).length)
		return false

	for(let i in a){

		console.log(i);

		if(i in b){
    	    //null cases
    	    if(a[i]===null || a[i]===undefined || b[i]===null || b[i]===undefined){
    	    	if(!(a[i]===b[i]))
    	    		return false
    	    	continue;
    	    }
    	    //type not equal
    	    if( typeof(a[i])!=typeof(b[i]))
    	    	return false;
    	    
    	    //primitive-data-type-compare
    	    if( typeof(a[i])!='object' && typeof(b[i])!='object'){
    	    	if(a[i]===b[i])
    	    		continue;
    	    	else
    	    		return false;
    	    }

          //CASES when arrays/objects
          
          //array-array
          if(Array.isArray(a[i]) && Array.isArray(b[i])){
          	if(compare_array(a[i],b[i])==false)
          		return false;
          	continue;
          }
          
          //array-obj,obj-array
          else if( (Array.isArray(a[i]) && !Array.isArray(b[i]))
          	|| (!Array.isArray(a[i]) && Array.isArray(b[i])))
          	return false;
          
          //obj-obj
          else 
          	if(compare_obj(a[i],b[i])==false){
          		return false;
          		continue;
          	}
          }
          else
          	return false; 
      }
      return true;
  }

  function compare_array(a,b){
  	console.log(">>compare_array");

  	if(a.length != b.length)
  		return false;

  	for (let i = 0; i < a.length; i++) {
  		console.log(a[i]);
  		if(a[i]===null || a[i]===undefined || b[i]===null || b[i]===undefined){
  			if(!(a[i]===b[i]))
  				return false
  			continue;
  		}
  		
  		if(typeof(a[i])!=typeof(b[i]))
  			return false;
  		
    //primitive-data-type-compare
    if( typeof(a[i])!='object' && typeof(b[i])!='object'){
    	if( a[i]===b[i])
    		continue;
    	else
    		return false;
    }
    
    //{array,array}
    if(Array.isArray(a[i]) && Array.isArray(b[i])){
    	if(compare_array(a[i],b[i])==false)
    		return false;
    	continue;
    }
    
    //{aray-obj,obj-aray}
    else if( (Array.isArray(a[i]) && !Array.isArray(b[i]))
    	|| (!Array.isArray(a[i]) && Array.isArray(b[i]))
    	)
    	return false;
    
    //{obj,obj}
    else if(compare_obj(a[i],b[i])==false){
    	return false;
    	continue;
    }
}
return true;
}

var obj1 = {
	'a' : 4,
	'b' : {
		'c' : [1,2,3,4,5],
		'd' : [{
			'da' : {
				'daa' : 54
			},
			'db' : {
				'dba' : 32,
				'dbb' : [{
					'dbba' : 22,
					'dbbb' : [12,2]
				}]
			}

		}]
	}
};
var obj2 = {
	'a' : 4,
	'b' : {
		'c' : [1,2,3,4,5],
		'd' : [{
			'da' : {
				'daa' : 54
			},
			'db' : {
				'dba' : 32,
				'dbb' : [{
					'dbba' : 22
				}]
			}

		}]
	}
};

console.log(compare_obj(obj1,obj2));




/**
Flat array
**/

var x = [1,2,3,4,[1,2]]
x.reduce(function(acc, iter) {
  return acc.concat(iter);
}, [])

// For deeply nested array

function flatten(arr) {
  return arr.reduce(function(acc,iter){
    return acc.concat(Array.isArray(iter)? flatten(iter) : iter);
  }, []);
}




/**
Check if two string are anagram
**/

//String to objects
// https://jsfiddle.net/avinash9044001/zLby27n5/
var StringToObj = function(str) {
  return str.split('').reduce(function(acc, iter) {
    acc[iter] = acc[iter] ? acc[iter]+1 : 1;
    return acc;
  }, {});
};

var compareObj = function(obj1, obj2) {
  var arr1 = Object.keys(obj1);
  if(arr1.length !== Object.keys(obj2).length) {
    return false;
  } else {
    return arr1.reduce(function(accBool, iter) {
      return accBool && obj1[iter] === obj2[iter];
    }, true);
  }
};

var anagramUnbounded = function(StringToObj, compareObj, str1, str2) {
  return compareObj(StringToObj(str1), StringToObj(str2));
};
var anagram = anagramUnbounded.bind({}, StringToObj, compareObj);
anagram(str1, str2);
