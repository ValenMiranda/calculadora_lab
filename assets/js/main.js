$(document).ready(function(){

/* Al hacer click en los input del tipo button, se ejecutará una función que:
-Posee dos variables: btn y pantalla. btn guarda el valor del input button que
se ha presionado, gracias a this.
pantalla guarda el valor que mostrará en la input que será nuestra
pantalla de la calculadora.*/

	$("input:button").click(function(){
		btn = $(this).val();
		pantalla = $("#resultado").val();

/* Una vez guardado esos valores, realizaremos una sentencia if/else donde:
-Si el valor del botón presionado es "c", la pantalla debe mostrarse en blanco.	*/		
		if(btn=="c"){
			$("#resultado").val("");

/* -Si no, se ejecutará otra sentencia if/else donde: */			
		}else{

/* Si el valor del botón presionado es igual a "=", evaluará el string que se encuentra
guardado en pantalla y gracias a eval, resolverá la operación.*/
			if(btn=="="){
				$("#resultado").val(eval(pantalla));

/* En el caso de que sea otro botón distinto a "=" el presionado, ingresará en pantalla
el valor del botón presionado, concatenandolo con el o los valores que ya se encontraban guardados en pantalla.*/				
			}else{
				$("#resultado").val(pantalla + btn);
			}
		}
	})
});


/* THIS selecciona al elemento que activí el evento, de esta manera hacemos que el evento
corra de forma individual en cada uno de los elementos (en este caso, de los botones).*/

/* EVAL evalúa el string que se va a concatenando en nuestra pantalla, para ir descifrándolo
como operación. Este funciona de manera básica con sumas, restas, multiplicaciones y divisiones,
ahorrandonos un montón de código que tendríamos que hacer por cada operación.*/