import ProjectCard from "./ProjectCard";


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
                    {projects.map((project, index) => <ProjectCard
                        key={index}
                        project={project}
                    ></ProjectCard>)}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;