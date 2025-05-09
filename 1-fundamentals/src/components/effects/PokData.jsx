import { useState, useEffect } from 'react';
const url = 'https://pokeapi.co/api/v2/pokemon/';

const PokData = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const pokemons = await response.json();
        setPokemons(pokemons.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3>github pokemons</h3>
      <ul className='pokemons'>
        {pokemons.map((pokemon) => {
          const {name, url } = pokemon;
          return (
            <li key={name}>
                <p>Name : {name}</p>
                <a href={url}> API URL</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default PokData;