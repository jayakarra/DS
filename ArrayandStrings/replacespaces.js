

Object.assign(String.prototype,{

    replaceSpaces(){

        function rightShift(arr,index, ishift){
            for(let i = arr.length; i>index ; i--  ){
                if( i+ishift < arr.length)
                    arr[i+ishift] = arr[i];
        
            }
        }

        
        let s= this.split("");
        for(let i = 0; i< s.length ; i++  ){
                if(s[i] == ' '){
                    // right shift by 2 spaces 
                   rightShift(s,i, 2);
                   
                   s[i] = '%';
                   s[++i] = '2';
                   s[++i] = '0';
                  }
           }
           return s.join("");
    } 
})

console.log("ab c 2    ".replaceSpaces()); //ab%20c%202

console.log("a c  ".replaceSpaces()); //a%20c


console.log("Mr. John Smith    ".replaceSpaces()); //Mr.%20John%20Smith

