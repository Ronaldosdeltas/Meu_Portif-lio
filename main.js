    window.onload = function() {
    const enviar = document.getElementById('enviar');
    const text = document.getElementById('text');
    if (enviar){
    enviar.onclick = function(){
        alert('Sua Messagem foi enviada com sucesso'); 
        }
        text.removeAttribute('style')
    }
   

}

