function getColor(colorNumber){
    colorNumber = parseInt(Math.floor(Math.random()*4)+1);
    switch(colorNumber){
        case 1: 
                console.log("red");
                break;
        case 2: console.log("yellow");
                break;
        case 3: console.log("blue");
                break;
        case 4: console.log("green");
                break;
        default: return "black";
                    break;
    }

}
/* El resultado de la funcion getColor es UN color (red yellow blue green black).
Al llamar a getAllStudentColors me debería dar un array de 10 colores seleccionados randomly.
*/
function getAllStudentColors(students){
    
	for (students = 1; students <= 10; students++){
        colorNumber = parseInt(Math.floor(Math.random()*4)+1);       
        getColor(colorNumber);
        /* Dentro del loop llamo a getColor() para pasarle 
        el numero random (colorNumber)
        para que devuelva getColor un color */
        
    }
    let asignacionColores = [getColor(colorNumber)];
    
} /* let asignacionColores = [ "resultado de la funcion getAllStudentColors"] 
        console.log(asignacionColores); push 
    NO SE COMO DECIRLE QUE ME DE LOS RESULTADOS DE GETCOLOR 10 VECES EN UN ARRAY
*/


//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

