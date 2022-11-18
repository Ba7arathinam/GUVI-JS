function printNGE(arr, n) {
    var s = [];
  
  
    for(var i = 0; i < n; i++) {
      if(s.length == 0) {
        s.push(arr[i]);
        continue;
      }
  
      while(s.length != 0 && s[s.length - 1] < arr[i]) {
        console.log(s[s.length - 1] + " -> " + arr[i]);
        s.pop();
      }
  
      s.push(arr[i]);
    }
  
    while(s.length != 0) {
      console.log(s[s.length - 1] + " -> -1");
      s.pop();
    }
  }
  
  var arr = [5,3,6,7,15,2,8]
  var n = arr.length;
  printNGE(arr, n)
  
  
  
  
  
  function printNGEWithMap(arr, n) {
    var s = [];
    var map = {}
  
  
    for(var i = 0; i < n; i++) {
      if(s.length == 0) {
        s.push(arr[i]);
        continue;
      }
  
      while(s.length != 0 && s[s.length - 1] < arr[i]) {
        map[s[s.length - 1]] = arr[i];
        //console.log(s[s.length - 1] + " -> " + arr[i]);
        s.pop();
      }
  
      s.push(arr[i]);
    }
  
    while(s.length != 0) {
       map[s[s.length - 1]] = -1;
      //console.log(s[s.length - 1] + " -> -1");
      s.pop();
    }
    for(var i = 0; i <n ; i++) {
      console.log(arr[i] + " -> " + map[arr[i]]);
    }
  
  }
  
  var arr = [5,3,6,7,15,2,8]
  var n = arr.length;
  console.log(arr);
  printNGEWithMap(arr, n)