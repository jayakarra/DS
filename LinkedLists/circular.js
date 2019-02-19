class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}


n1 = new Node("1");
n2 = new Node("2");
n3 = new Node("3");
n4 = new Node("4");
n5 = new Node("5");

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n2;



function circular(start){
    
    let arr = [];
    let curr = start;
    while(curr != null){
        if(arr.includes(curr))
            return true;
        
        arr.push(curr);
    }

    return false;
}

console.log(circular(n1));