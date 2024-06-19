

const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");
const characterList = document.getElementById("character-list")
const personajes = fetch("https://rickandmortyapi.com/api/character/?page=(1)");



nextPage.addEventListener('click', () => {
    fetch("https://rickandmortyapi.com/api/character/?page=(1)")
        .then((response) => {
            if (!response.ok) {
                throw new Error ('Tu solicitud no ha podido ser atendida');
            }
            return response.json(); 
        })
        .then((argumento) => {
            //console.log(argumento.results[2])

        });
        nextPage.innerHTML = argument.result[4, 6, 8];
})
       //console.log(nextPage);
const mostrarImagenes = () => {
    const listaPersonajes = personajes.filter(person => person.results.includes())
}
personajes.innerHTML = listaPersonajes.map(person => )



/*
const personajesRick = fetch("https://rickandmortyapi.com/api/character/?page=(1)");

const listRick = (boxOne, personaje) => {
    const box = document.getElementById(boxOne)
    const person = personajesRick.filter(imagenes => imagenes.results.includes(personaje))
}

listRick("nex-page", personajesRick())
listRick("prev-page", personajesRick())

*/
