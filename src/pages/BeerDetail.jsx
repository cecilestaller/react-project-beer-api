import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pfeil from './../components/svg/Pfeil';
import Nav from "../components/Nav";
import './BeerDetail.scss'


const BeerDetail = () => {
    const idParams = useParams();

    console.log(idParams);

    const [beerDetail, setBeerDetail] = useState(null)

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${idParams.beerid}`)
            .then((response) => response.json())
            .then((singlebeerArr) => setBeerDetail((singlebeerArr)))
            .catch((error) => console.log(error))
    }, [])
    console.log(beerDetail)

    // const detailBeer = beerData.filter((singleBeerObj) => {
    //     return singleBeerObj._id.toString() === idParams.beerid.toString();
    // })
    // console.log("angeklicktes bier ist: ", detailBeer);


    return (  
        <section>

            {beerDetail ? (
                        <article className="detail_wrap">
                            <img src={beerDetail.image_url} alt={beerDetail.name} />
                            <h1>{beerDetail.name}</h1>
                            <h2>{beerDetail.tagline}</h2>
                            <div>
                                <h4>First brewed:</h4>
                                <h4>{beerDetail.first_brewed}</h4>
                            </div>
                            <div>
                                <h4>Attenuation-Level:</h4>
                                <h4>{beerDetail.attenuation_level}</h4>
                            </div>
                            <p>{beerDetail.description}</p>
                            <Link className="pfeil_wrap" to='/allbeers'>
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
 
export default BeerDetail;