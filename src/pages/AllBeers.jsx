import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import './AllBeers.scss'

const AllBeers = () => {

    const [beerData, setBeerData] = useState(null)

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => response.json())
            .then((beerArr) => setBeerData((beerArr)))
            .catch((error) => console.log(error))
    }, [])
    console.log(beerData)

    return (  
        <section>
            {beerData ? ( 
                <article>
                    {beerData.map((singleBeerObj, index) => (
                        <div key={index} className="preview_wrap">
                            <img src={singleBeerObj.image_url} alt={singleBeerObj.name} />
                            <div className="info_wrap">
                                <h2>{singleBeerObj.name}</h2>
                                <h3>{singleBeerObj.tagline}</h3>
                                <p>Created by: {singleBeerObj.contributed_by}</p>
                                <Link to={`/details/${singleBeerObj._id}`}>Details</Link>
                            </div>
                        </div>
                    ))}
                    <Nav />
                </article>
            ) : ( 
                <p>...loading...</p>
            )}
        </section>
    );
}
 
export default AllBeers;