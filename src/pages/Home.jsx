import { Link } from "react-router-dom";
import './Home.scss'
import allbeers from "./../../public/img/img_allbeers"
import randombeer from "./../../public/img/img_randombeer"

const Home = () => {
    return (  
        <section className="home_wrap">
            <article className="homeArticle_wrap">
                <Link to='/allbeers'>
                    <img src={allbeers} alt="viele flaschen bier" />
                    <h2>All Beers</h2>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores quaerat ut, non dolorem eos.</p>
            </article>
            <article className="homeArticle_wrap">
                <Link to='/randombeer'>
                    <img src={randombeer} alt="viele gläser bier" />
                    <h2>Random Beer</h2>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores quaerat ut, non dolorem eos.</p>
            </article>
        </section>
    );
}
 
export default Home;