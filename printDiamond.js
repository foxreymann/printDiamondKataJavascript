diamond = function(widest) {
  var inner = inner_diamond(widest);
  var lhs = inner.slice(0,inner.length /2);  
  var rhs = inner.slice(inner.length /2 + 1);  
  return lhs.concat(rhs);
}

inner_diamond = function(widest) {
  if(widest == 'A') {
    return ['A','A'];  
  } else {
    var smaller = inner_diamond(previous_letter(widest));
    for(var i = 0; i < smaller.length; i++) {
      smaller[i] = ' ' + smaller[i];
    } 
    var lhs = smaller.slice(0, smaller.length / 2);  
    var rhs = smaller.slice(smaller.length / 2);
    var row = widest + spaces(widest) + widest;
    var middle = [row,row];
    return lhs.concat(middle,rhs);
  }
}

spaces = function(widest) {
  var result = '';
  var max = 2 * (widest.charCodeAt(0) - 'B'.charCodeAt(0)) + 1;
  for(var i = 0; i < max; i++) {
    result += ' ';    
  }
  return result;
}

previous_letter = function(widest) {
  return String.fromCharCode(widest.charCodeAt(0) - 1);
}
