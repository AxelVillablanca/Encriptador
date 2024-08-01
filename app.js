console.log("La paleta de colores fue sacada del tomo 14 de Chainsaw Man ;)")

const botonEncriptar = document.getElementById("boton1");
const botonDesencriptar = document.getElementById("boton2");
const rawText = document.getElementById("texto")



// Encriptador 
function verificarEncriptar(textarea){

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



// Encriptador 
function verificarDesencriptar(textarea){

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
    const lista = document.querySelector("ul")
    const contenido = document.createElement("li");
    contenido.textContent = texto;
    contenido.classList.add("encriptado");
    lista.appendChild(contenido);
}







function encriptar(){
    document.getElementsByTagName("h2")[0].style.display="none";    
    let texto = verificarEncriptar(rawText.value);
    
    insertar(texto);
    rawText.value=""
}

function desencriptar(){
    document.getElementsByTagName("h2")[0].style.display="none";    
    let texto = verificarDesencriptar(rawText.value);
    
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





/**
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
 */