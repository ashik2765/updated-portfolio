

const Portfolio = () => {

    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'project1.jpg',  // Replace with the path to your project image
            demoLink: '#',  // Add your project's demo link
            codeLink: '#',  // Add your project's code repository link
        },
        {
            title: 'Personal Blog',
            description: 'Developed a personal blog with a custom CMS using Next.js and MongoDB.',
            image: 'project2.jpg',  // Replace with the path to your project image
            demoLink: '#',  // Add your project's demo link
            codeLink: '#',  // Add your project's code repository link
        },
        {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'project1.jpg',  // Replace with the path to your project image
            demoLink: '#',  // Add your project's demo link
            codeLink: '#',  // Add your project's code repository link
        },
        {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'project1.jpg',  // Replace with the path to your project image
            demoLink: '#',  // Add your project's demo link
            codeLink: '#',  // Add your project's code repository link
        },
        {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'project1.jpg',  // Replace with the path to your project image
            demoLink: '#',  // Add your project's demo link
            codeLink: '#',  // Add your project's code repository link
        }, {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'project1.jpg',  // Replace with the path to your project image
            demoLink: '#',  // Add your project's demo link
            codeLink: '#',  // Add your project's code repository link
        },
        // Add more projects as needed
    ];

    return (
        <section id="portfolio" className="bg-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg">
                            <img
                                src={project.image}  // Replace with the path to your project image
                                alt={project.title}
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={project.demoLink}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                                >
                                    Demo
                                </a>
                                <a
                                    href={project.codeLink}
                                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;