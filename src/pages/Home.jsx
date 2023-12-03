import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
    return (  
        <section className="home_wrap">
            <article className="homeArticle_wrap">
                <Link to='/allbeers'>
                    <img src="./../public/img/img_allbeers.jpg" alt="viele flaschen bier" />
                    <h2>All Beers</h2>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores quaerat ut, non dolorem eos.</p>
            </article>
            <article className="homeArticle_wrap">
                <Link to='/randombeer'>
                    <img src="./../public/img/img_randombeer.png" alt="viele gläser bier" />
                    <h2>Random Beer</h2>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores quaerat ut, non dolorem eos.</p>
            </article>
        </section>
    );
}
 
export default Home;