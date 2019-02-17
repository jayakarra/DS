Object.assign(String.prototype, {
    reverse(){
        let str2 = [this.length];
    
        for(let i = this.length; i>=0 ; i--  )
        {
            str2[this.length-i] = this[i];
        }
        return str2.join("");
    }

});


console.log("abc".reverse());

