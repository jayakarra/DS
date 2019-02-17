Object.assign(String.prototype,{

    compress(){

        let s1=[];
        let s = this.split("");
        let cnt = 1;
        s1[0] = s[0];
            
        for(let i=0, j=0; i< s.length; i++)
        {
            if(s[i]==s[i+1]){
                cnt++
             }
            else{
             s1[++j] = cnt;
             s1[++j] = s[i+1];
             j++;
             cnt=1;
            }

        }
        return s1.join("");
    }

} )

console.log("aabcccccaaa".compress()); //a2b1c5a3

console.log("axbcccccaaa".compress()); //a1x1b1c5a3
