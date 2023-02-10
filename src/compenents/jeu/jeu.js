import React, {useState} from 'react'
import './public/css/jeu.css'

// creation du nombre aleatoire en 1-100
const aleaNombre = Math.floor(Math.random() * 100) + 1;
let tentative =0;
console.log(aleaNombre);

export const Jeu = () => {
    const [devine, setDevine] = useState("");
    const [message, setMessage] = useState("");

  //Permet de changer la valeur 
const Change = (event) => {
    setDevine(event.target.value);
};
  // Verifier si le chiffre est bon
const Submit = (event) => {
    event.preventDefault();
    if (tentative <=9 && devine <= 100){
        if (devine < aleaNombre) {
            setMessage(`Le nombre est plus grand que ${devine}`);
        } else if (devine > aleaNombre) {
            setMessage(`Le nombre est plus petit que ${devine}`);
        } else  {
            setMessage(`Bravo, vous avez trouvé le nombre ${aleaNombre}!`);
        }
    }else if (tentative <=9 && devine > 100) {
        setMessage(`Le nombre est forcément plus petit que 100`)
    } else {
        setMessage(`Vous avez perdu`);
        return
    }
tentative++;
console.log(tentative);
}
//fonction pour recommencer une partie
const Reset = () => {
    setDevine("");
    setMessage("");
    aleaNombre = Math.floor(Math.random() * 100) + 1;
    tentative = 0;
};


return (
    <div className='ensemble'>
        <h1>Devinez le nombre compris entre 1 et 100</h1>
        <form onSubmit={Submit}>
        <input
            type="number"
            value={devine}
            onChange={Change}
            placeholder="Entrer un chiffre"
        />
        <button className='bouton' type="submit">Envoyer</button>
    </form>
        <p>{message}</p>
        <button className='bouton' onClick={Reset}>Recommencer</button>
        <p>Il vous reste {10-tentative} tentatives</p>
    </div>
    );
};

