class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function lastkthelement(root,k) {
    if (root == null || root.next === null) {
        return root;
    }


    let curr = root;
    let knext = curr;

    for(let i =0; i< k ;i++){
        if(knext == null)
            return null;
        else
            knext = knext.next;
    }

    while(knext!=null){
        curr= curr.next;
        knext = knext.next;
    }
    
    return curr.data;

}

n0 = new Node(1, null);
n1 = new Node(2, n0);
n2 = new Node(3, n1);
n3 = new Node(7, n2);
n4 = new Node(5, n3);
n5 = new Node(3, n4);

console.log(lastkthelement(n5,2)); //2











