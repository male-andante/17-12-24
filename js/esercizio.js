// Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
const rimuoviTwitter = function() {
    const twitterLink = document.querySelector("aside .list-unstyled li:nth-child(2) a")
    console.log(twitterLink)
    twitterLink.style.display = "none"
    if (twitterLink) {
        twitterLink.style.display = "none";
        console.log("Link Twitter nascosto!"); // Debug
    } else {
        console.log("Elemento non trovato!"); // Debug
    }
    }

window.addEventListener("load", rimuoviTwitter)



//EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

/*addEventListener(onclick, rimuoviPadre(){

})

//EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

addEventListener(onmouseover, alertAutore(){

})*/