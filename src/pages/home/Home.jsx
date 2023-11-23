import Navbar from "../../components/navbar/Navbar.jsx";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/header/Header";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/footer.jsx";


const Home = () => {




    return (

        <div class="home">
            <Navbar />
            <Header />
            <div className="homeContainer">

                <br></br>
                <h1 className="homeTitle">Popular Halls</h1>
                <FeaturedProperties />
                <br></br>


            </div>

            <Footer />

        </div>

    )
}

export default Home
