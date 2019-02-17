// find the start of string
let s1 = "waterwbottle"
let s2 = "erwbottlewat"


function rotation(s1, s2, pos = 0) {
    if(pos >= s1.length)
        return false;
    
    pos = s2.indexOf(s1[0], pos);

    //console.log(pos);

    if (pos == -1) {
        return false;
    }
    else {
        // w is found
        let sub1 = s2.substring(0, pos);
        let sub2 = s2.substring(pos);
        s3 = sub2.concat(sub1);
        //console.log(s3);
        //console.log(s3==s1);
        if( s3 == s1){
            return true;
        }
        else    
             if(rotation(s1,s2,pos+1))
                return true;
    }

    return false;
}

console.log(rotation(s1,s2)); //true