console.log("La paleta de colores fue sacada del tomo 14 de Chainsaw Man ;)")
console.log("la paleta de colores fue sacada del tomo 14 de chainsaw man")
const botonEncriptar = document.getElementById("boton1");
const botonDesencriptar = document.getElementById("boton2");
const rawText = document.getElementById("texto");
const excluir = /[A-ZÁÉÍÓÚÑáéíóúñ!@#$%^&*()_+\-=[\]{};':",./<>?\|]/;
const textoVacio = "";
const textosEncriptados = document.querySelector('.textosEncriptados')



//Comprobar Mayusculas y simbolos
function comprobar(textoComprobado){
    if(excluir.test(textoComprobado)){
        alert("El texto debe estar en minusculas y no puede tener simbolos!");
        return textoVacio
    }else{
        return textoComprobado
    }
}

// Encriptador 
function verificarEncriptar(textarea){
    if(textarea == textoVacio){
        return textoVacio
    }

    let textoEncriptado = textarea ;

    if(textoEncriptado.includes("e")){
        textoEncriptado = textoEncriptado.replaceAll("e", 'enter');              
    }if(textoEncriptado.includes("i")){
        textoEncriptado = textoEncriptado.replaceAll("i", 'imes');     
    }if(textoEncriptado.includes("a")){
        textoEncriptado = textoEncriptado.replaceAll("a", 'ai');       
    }if(textoEncriptado.includes("o")){
        textoEncriptado = textoEncriptado.replaceAll("o", 'ober');
    }if(textoEncriptado.includes("u")){
        textoEncriptado = textoEncriptado.replaceAll("u", 'ufat');
    }
    console.log(textarea)
    console.log(textoEncriptado)
    return  textoEncriptado;
}


// Desencriptar 
function verificarDesencriptar(textarea){
    if(textarea == textoVacio){
        return textoVacio
    }

    let textoDesencriptado = textarea ;

    if(textoDesencriptado.includes("enter")){
        textoDesencriptado = textoDesencriptado.replaceAll("enter", 'e');           
    }if(textoDesencriptado.includes("imes")){
        textoDesencriptado = textoDesencriptado.replaceAll("imes", 'i');   
    }if(textoDesencriptado.includes("ai")){
        textoDesencriptado = textoDesencriptado.replaceAll("ai", 'a');  
    }if(textoDesencriptado.includes("ober")){
        textoDesencriptado = textoDesencriptado.replaceAll("ober", 'o');  
    }if(textoDesencriptado.includes("ufat")){
        textoDesencriptado = textoDesencriptado.replaceAll("ufat", 'u');
    }
    console.log(textarea)
    console.log(textoDesencriptado)
    return  textoDesencriptado;
}


//Inserta el texto en el panel de la derecha
function insertar(texto){
    if(texto == textoVacio){
        //Si esta vacio no pasa nada
    }else{
    document.getElementsByTagName("h2")[0].style.display="none";    
    document.getElementsByClassName("mensaje")[0].style.display= "none"

    const lista = document.querySelector("ul")
    const contenido = document.createElement("li");
    contenido.textContent = texto;
    contenido.classList.add("encriptado");
    lista.appendChild(contenido);
    }
}



function encriptar(){
    let textoComprobado = comprobar(rawText.value)
    let texto = verificarEncriptar(textoComprobado);
    
    insertar(texto);
    rawText.value=""
}

function desencriptar(){
    let textoComprobado = comprobar(rawText.value)
    let texto = verificarDesencriptar(textoComprobado);
    
    insertar(texto);
    rawText.value=""
}


botonEncriptar.addEventListener("click",encriptar); //boton encriptar
botonDesencriptar.addEventListener("click",desencriptar);
rawText.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        encriptar()
    }
})

//Copiar texto

textosEncriptados.addEventListener('click', (event)=>{
    if(event.target && event.target.matches('li.encriptado')){
        const textoCopiado = event.target.textContent;
        navigator.clipboard.writeText(textoCopiado.trim())
        .then(() =>{
            console.log('Texto copiado: ', textoCopiado);
        })
        .catch(err =>{
            console.log('Error al copiar al portapapeles: ',err);
        });
    }
});

