class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function removeDupes(root) {
    if (root == null || root.next === null) {
        return root;
    }

    let curr = root;
    let next = curr.next;
    let prev = curr;
    

    while (curr != null) {
        while (next != null) {
            if (curr.data == next.data)
                prev.next = next.next;
            else
                prev = next;
            
            next = next.next;

        }
        curr = curr.next;
        prev = curr;
        
    }
    return root;
}

function printlist(list){

    //console.log('Printing!!')
    let curr = list;
    let arr =[];

    if(list==null)
        return "";
        
    if(curr.next == null)
    {
        
        console.log(curr.data);
        return;
    }
    while(curr != null){
        arr.push(curr.data);
        curr=curr.next;
    }
    console.log(arr.join('->'))


}

list = new Node(3, null);
printlist(removeDupes(list)); //3

n0 = new Node(1, null);
n1 = new Node(2, n0);
n2 = new Node(3, n1);
n3 = new Node(7, n2);
n4 = new Node(5, n3);
n5 = new Node(3, n4);

//3->5->7->3->2->1
printlist(removeDupes(n5)); //3->5->7->2











