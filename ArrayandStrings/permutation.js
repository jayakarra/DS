Object.assign(String.prototype,{

    isPermutation(str2){

        let s1=this.split("").sort();
        let s2=str2.split("").sort();
        
        if( s1.join("") == s2.join("") )
            return true;
        else
            return false;
    }

} )

console.log("abc".isPermutation("cba")); //true
console.log("aaabc".isPermutation("cba")); //false

