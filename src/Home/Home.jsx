import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import myphoto from "../assets/me.jpg"


const Home = () => {
    return (
        <div>
            <section id="home" className="bg-gray-900 text-white py-20">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="mb-8">
                        <img
                            src={myphoto}
                            alt="Your Name"
                            className="rounded-full h-24 w-24 object-cover border-4 border-blue-500"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Hello, I am Ashikur Rahman</h1>
                        <p className="text-lg mb-8">A passionate MERN stack developer creating modern and responsive websites.</p>
                        <div className="flex justify-center">
                            <a
                                href="#portfolio"
                                className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
                            >
                                <Resume></Resume>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;