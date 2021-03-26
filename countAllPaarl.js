function allPaarl(regNoForPaarl) {
    //console.log(regNoForPaarl);
     var string = regNoForPaarl.split(', ');
    var arry = [];
  for(var i=0;i<string.length;i++){
    var paarl = string[i];
    if (paarl.includes("CJ")) {
      arry.push(paarl)
    }
    }
    return arry;
  }