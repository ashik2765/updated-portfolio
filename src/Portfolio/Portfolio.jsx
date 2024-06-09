import ProjectCard from "./ProjectCard";


const Portfolio = () => {

    const projects = [
        {
            title: 'Summer Camp school',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'https://i.ibb.co/tPCxXMs/photography.png',
            demoLink: 'https://summer-camp-cc8a0.web.app/',
            codeLink: 'https://github.com/ashik2765/photography-school-client',
        },
        {
            title: 'Seasonal fruits',
            description: 'Developed a E-commerce Platform with a custom CMS using Next.js and MongoDB.',
            image: 'https://i.ibb.co/hs0cssd/Mango-Village-1.png',
            demoLink: 'https://mongo-village.web.app/',
            codeLink: 'https://github.com/ashik2765/mango-village',
        },
        {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'https://i.ibb.co/g90CLZX/Hero-Gadget.png',
            demoLink: 'https://herogadget.netlify.app/shop',
            codeLink: 'https://github.com/ashik2765/gadgetHous',
        },
        {
            title: 'E-commerce Platform',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'https://i.ibb.co/GPYRz1D/Ema-john.png',
            demoLink: 'https://ema-john-3d90f.web.app/',
            codeLink: 'https://github.com/ashik2765/ema-john',
        },
        {
            title: 'Resturant website',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'https://i.ibb.co/ygqhCvq/cooking.png',
            demoLink: 'https://resplendent-sunshine-7655c6.netlify.app/chef',
            codeLink: 'https://github.com/ashik2765/chef-recipe-hunter-client',
        }, {
            title: 'Toys',
            description: 'Built a responsive e-commerce platform using React and Node.js.',
            image: 'https://i.ibb.co/pb8M2ND/toys.png',
            demoLink: 'https://toy-shop-client-feb00.web.app/',
            codeLink: 'https://github.com/ashik2765/toy-market-client',
        },
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