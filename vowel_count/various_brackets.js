function validBraces(braces) {
  var stack = [];
  braces = braces.split("");
  if (braces.length % 2 !== 0) return false;
  braces.forEach(function(char) {
    if (char == "(") stack.push(char);
    if (char == ")" && stack[stack.length - 1] == "(") stack.pop();
    if (char == "[") stack.push(char);
    if (char == "]" && stack[stack.length - 1] == "[") stack.pop();
    if (char == "{") stack.push(char);
    if (char == "}" && stack[stack.length - 1] == "{") stack.pop();
  });
  return stack.length === 0;
}
