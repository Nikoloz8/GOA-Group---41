// Codewars Solutions

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
  let string = ""
  count = str.length - 1
  for (let i = count; i >= 0; i--){
    string = string + str[i]
  }
  return string
}


// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/train/javascript

function main(verb, noun){
  return verb + noun
}

// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function(l , w) {
  if (l == w){
    return l * w
  } else{
    return 2 * (l + w)
  }
};

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0){
    return -num
  } else{
    return num
  }
}

// https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
  return -number
}