var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  var len = katzDeliLine.length
  return `Welcome, ${name}. You are number ${len} in line.`
}