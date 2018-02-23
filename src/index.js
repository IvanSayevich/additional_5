module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let result;
  
  for(let i=0; i < bracketsConfig.length; i++){
    let string = bracketsConfig[i][0].concat(bracketsConfig[i][1]);
    arr.push(string);
    //console.log(bracketsConfig[i], arr);
  }
  
  function checkMatch(string,array){
    let str = string;
    let arr = array;
    for (i=0;i<arr.length;i++){
      str = str.replace(arr[i],'')
     // console.log(str, arr);
    }
    
    let found = (str.length!=string.length)?true:false;
    //console.log(found+"!");

    if (found){ 
     //console.log(1, str.length, found);
      checkMatch(str, arr);
    }else if(str.length !== 0 && !found){
      //console.log(2, str.length, found);
      result = false; 
    }else if(str.length === 0){
      //console.log(3, str.length, str);
      result = true;
    }
  }
  
  checkMatch(str,arr);
  
  return result;
}
