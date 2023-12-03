import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pfeil from './../components/svg/Pfeil';
import Nav from "../components/Nav";
import './BeerDetail.scss'
const RandomBeerDetail = () => {

    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => response.json())
            .then((randomData) => setRandomBeer((randomData)))
            .catch((error) => console.log(error))
    }, [])
    console.log(randomBeer);

    return (  
        <section>
            {randomBeer ? (
                <article className="detail_wrap">
                    <img src={randomBeer.image_url} alt={randomBeer.name} />
                    <h1>{randomBeer.name}</h1>
                    <h2>{randomBeer.tagline}</h2>
                    <div>
                        <h4>First brewed:</h4>
                        <h4>{randomBeer.first_brewed}</h4>
                    </div>
                    <div>
                        <h4>Attenuation-Level:</h4>
                        <h4>{randomBeer.attenuation_level}</h4>
                    </div>
                    <p>{randomBeer.description}</p>
                    <Link to='/'>
                        <Pfeil />
                    </Link>
                    <Nav />
                </article>
            ) : (
                <p>...loading...</p>
            )}
        </section>
    );
}
 
export default RandomBeerDetail;