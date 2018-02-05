var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  var len = katzDeliLine.length
  return `Welcome, ${name}. You are number ${len} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var next = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${next}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty"
  } else {
    var i = 0
    var string = "The Line is currently: "
    while (i < katzDeliLine.length) {
      string = string + `${i+1}. ${katzDeliLine[i]}, `
      i++
    }
    return string
  }
}
