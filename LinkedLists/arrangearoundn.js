class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
function appendNode(listS,listE, node){
    if(listS==null){
        listS = node;
        listE = listS;
    }
    else{
        listE.next = node;
        listE = node;
    }

    
}
function arrange(list, n){

    let leftS = null;
    let rightS = null;
    let middleS = null;
    
    let leftE = null;
    let rightE = null;
    let middleE = null;

    let curr = list;

    while(curr != null){
       // console.log(curr.data);
        let x = curr.next;
        curr.next= null;
        if(curr.data > n ){
            if(rightS==null){
                rightS = curr;
                rightE = rightS;
            }
            else{
                rightE.next = curr;
                rightE = curr;
            }
        }

        if(curr.data < n ){
            if(leftS==null){
                leftS = curr;
                leftE = leftS;
            }
            else{
                leftE.next = curr;
                leftE = curr;
            }        }

        if(curr.data == n ){
            if(middleS==null){
                middleS = curr;
                middleE = middleS;
            }
            else{
                middleE.next = curr;
                middleE = curr;
            } 
        }
        curr = x;
    }

    leftE.next = middleS;
    middleE.next = rightS;
    
    return leftS;
}


function printlist(list) {

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


n0 = new Node(1, null);
n1 = new Node(2, n0);
n2 = new Node(3, n1);
n3 = new Node(7, n2);
n4 = new Node(5, n3);
n5 = new Node(3, n4);

//3->5->7->3->2->1
printlist(arrange(n5,5)); 

