import { saludar } from './components';
import { heroes } from './heroes'

saludar('Yoariht');

export const getHeroById = (id) => heroes.find( heroe => heroe.id === id );

export const getHeroByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner )

export const infoHeroe = ({ id, name, owner }) => {

    const p = document.createElement('p');
    p.innerText = `El Héroe número ${ id } se llama ${ name } y le pertenece a ${ owner }`;

    document.body.append(p);
};

export const heroesOwner = (heroes) => { 

    const p = document.createElement('p');
    let text = '';
    heroes.forEach( heroe => {
        let {id, name, owner} = heroe;
        
        if(heroes.indexOf(heroe) === heroes.length -1 ){
            text = text.substring(0, text.length -2);
            text += ` y ${name} le pertenecen a ${owner}`;
        }else{
            text += `${name}, `;
        }
    });
    p.innerText = text;
    document.body.append(p);

};

// infoHeroe(getHeroById(2));

// heroesOwner(getHeroByOwner('Dc'));