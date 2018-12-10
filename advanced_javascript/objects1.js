//converting objects to array
//storing the queen as key and beyonce as value of the bnewly object
var arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

function transformFirstAndLast(array) {
    var obj  = {}
    obj[arr[0]] = arr[arr.length-1]
    console.log(obj)
    return obj
  }

  transformFirstAndLast()