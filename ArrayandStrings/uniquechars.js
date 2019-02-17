//find if string has unique chars...
Object.assign(String.prototype, {
    HasUniqueChars(){
        for(let i =0; i < this.length; i++){
            for(let j =i+1; j < this.length; j++){
                if(this[i] == this[j])
                    return false; 
            }
         }
         return true;
    }
});

 // sort and loop once 
Object.assign(String.prototype, {
    HasUniqueChars2(){
        let s = this.split("");
        s.sort();
        for(let i =0; i < s.length-1; i++){
            if(s[i] == s[i+1])
                return false; 
        }
         
         return true;
    }
});

console.log("abcd".HasUniqueChars()); // true

console.log("abccd".HasUniqueChars()); // false

//Big(O) = n*n

// Improve Sort and Check adjacent chars
// sort nlogn

console.log("1abcd".HasUniqueChars2()); // true

console.log("dabccd".HasUniqueChars2()); // false



