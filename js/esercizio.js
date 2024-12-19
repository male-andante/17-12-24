// Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

window.onload = rimuoviTwitter()

const rimuoviTwitter = function () {
    const twitterLink = document.querySelector("aside .list-unstyled li:nth-child(2) a")
    console.log(twitterLink)
    twitterLink.remove()
    /*if (twitterLink) {
        twitterLink.remove()
        console.log("Link Twitter nascosto!"); // Debug
    } else {
        console.log("Elemento non trovato!"); // Debug
    }*/
}

//window.addEventListener("load", rimuoviTwitter)



//EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".


/*const links = document.querySelectorAll('.stretched-link')
for(let readMore of links){
        readMore.onclick = function(event){
        event.preventDefault() // questo evita che al clic si segua il # del link
        const father = document.querySelector('div.col-md-6')
        event.target.closest(father).remove()}
    }*/

for (let readMore of document.querySelectorAll('.stretched-link')) {
    readMore.onclick = function (event) {
        event.preventDefault() // questo evita che al clic si segua il # del link
        const father = document.querySelector('div.col-md-6')
        event.target.closest(father).remove()
    }
}

//EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.


for (let author of document.querySelectorAll('.blog-post-meta a')) {
    author.addEventListener('mouseover', function (event) {
        alert(event.target.innerText);
    }
)
}