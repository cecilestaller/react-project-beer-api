import { Link } from "react-router-dom";
import './Home.scss'
import allbeers from "./../../public/img/img_allbeers.jpg"
import randombeer from "./../../public/img/img_randombeer.png"

const Home = () => {
    return (  
        <section className="home_wrap">
            <article className="homeArticle_wrap">
                <Link to='/allbeers'>
                    <img src={allbeers} alt="viele flaschen bier" />
                    <h2>All Beers</h2>
                </Link>
                <p>Klick the picture get an overview of all our family brewed beers. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores quaerat ut, non dolorem eos.</p>
            </article>
            <article className="homeArticle_wrap">
                <Link to='/randombeer'>
                    <img src={randombeer} alt="viele gläser bier" />
                    <h2>Random Beer</h2>
                </Link>
                <p>Klick the picture to see the details of a random beer of our collection. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores quaerat ut, non dolorem eos.</p>
            </article>
        </section>
    );
}
 
export default Home;