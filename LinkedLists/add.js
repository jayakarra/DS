class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

n3 = new Node(8, null);
n4 = new Node(1, n3);
list1 = new Node(7, n4);


n1 = new Node(2, null);
n2 = new Node(9, n1);
list2 = new Node(5, n2);


//7->1->6 - list 1
//5->9->2 - list 2


function add(l1 , l2, carry=0)
{
    
    let a=0;
    let b=0;
    if(l1 == null && l2==null){
        if(carry > 0)
            return new Node(carry, null);
        else
            return null;
    }

    let n1= null;
    let n2=null;

    if(l1!=null) {
        a = l1.data;
        n1 = l1.next;
    }

    if(l2!=null){
        b = l2.data;
        n2=l2.next
    }
    
    let t  = a+b+carry;

    carry = Math.floor((t)/10);

    //console.log("add: " + (a+b) + " carry: " + carry + " remain " + ((t) % 10) );
    

    let n = new Node((t%10),null)

    n.next =  add(n1, n2,carry);
    
    return n;
}


let tot1 = add(list1 , list2);


function printlist(list) {

    //console.log('Printing!!')
    let curr = list;
    let arr = [];

    if (list == null)
        return "";

    if (curr.next == null) {

        console.log(curr.data);
        return;
    }
    while (curr != null) {
        arr.push(curr.data);
        curr = curr.next;
    }
    console.log(arr.join('->'))


}

printlist(tot1) // 2->1->1->1


