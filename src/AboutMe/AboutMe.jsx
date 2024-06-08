

const AboutMe = () => {
    return (
        <section id="about" className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>

                {/* Introduction */}
                <div className="max-w-2xl mx-auto mb-10">
                    <p className="text-gray-700 leading-loose">
                        Hi there! i am Ashikur Rahman, a passionate web developer with a keen interest in creating innovative and user-friendly websites.
                        My journey in the world of web development started with a curiosity for turning ideas into interactive digital experiences.
                    </p>
                </div>

                {/* Skills */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Skills</h3>
                    <div className="flex flex-wrap justify-center">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">React.js</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">express.js</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">Node.js</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">JavaScript</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">Firebase</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">MongoDB</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">Responsive Design</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">HTML5</span>
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">CSS3</span>
                        {/* Add more skills as needed */}
                    </div>
                </div>

                {/* Education and Experience */}
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
                    <p className="text-gray-700 mb-4">Bachelor of Science in Computer Science - Bangladesh Open University (2024)</p>

                    {/* <h3 className="text-2xl font-bold mb-4 text-gray-800">Experience</h3>
                    <p className="text-gray-700 mb-4">Web Developer - Company XYZ (Year - Year)</p> */}
                    {/* Add more experience details as needed */}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;