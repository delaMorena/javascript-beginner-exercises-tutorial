let bottles = 10;

function sing() {
    
      
    for (bottles < 10; bottles >0; bottles--) {
        console.log(bottles + " bottles of milk on the walk, " + bottles + " bottles of milk. Take one down and pass it around, "+ (bottles - 1) + " bottles of milk on the wall.");
    }
    for (bottles < 2; bottles >=1; bottles--) {
        console.log(bottles + " bottle of milk on the walk, " + bottles + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
    }
    
}

sing();
/*codigo de alex:
// Your code here:
function BottlesMilk() {
    cont = 99;
    inicio = 99;

    do {
        if (cont == 1) {
            console.log(cont+" bottle of milk on the wall, "+cont+" bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        } else if (cont == 0) {
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, "+inicio+" bottles of milk on the wall.");   
        } else {
            console.log(cont+" bottle of milk on the wall, "+cont+" bottle of milk. Take one down and pass it around, "+(cont - 1)+" bottles of milk on the wall.");
            
        }
        cont--;

    } while (cont >=0)
}

BottlesMilk();
*/