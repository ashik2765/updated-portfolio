import NavBar from "./NavBar";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <section id="home" className="bg-gray-900 text-white py-20">
                <div className="container mx-auto flex flex-col items-center">

                    {/* Photo Section */}
                    <div className="mb-8">
                        <img
                            src="your-profile-photo.jpg"  // Replace with the path to your photo
                            alt="Your Name"
                            className="rounded-full h-24 w-24 object-cover border-4 border-blue-500"
                        />
                    </div>

                    {/* About Section */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Hello, I am Ashikur Rahman</h1>
                        <p className="text-lg mb-8">A passionate web developer creating modern and responsive websites.</p>

                        {/* Call to Action */}
                        <div className="flex justify-center">
                            <a
                                href="#portfolio"
                                className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;