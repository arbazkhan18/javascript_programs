//print only keys of an object 
obj = {
    name : 'Sam',
    age : 25,
    hasPets : true
  }

  function getAllKeys(){
      var list = []
      for(key in obj)
      list.push(key)
      console.log(list)
      return list
  }

  getAllKeys(obj)