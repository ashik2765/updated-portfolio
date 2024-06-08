import React from 'react'

export default function ProjectCard({project}) {
    const{image,title,description,demoLink,codeLink}=project;
    return (
        (
            <div className="bg-gray-100 p-6 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-100 hover:shadow-2xl">
                <img
                    src={image}  // Replace with the path to your project image
                    alt={title}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-center space-x-4">
                    <a
                        href={demoLink}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        Demo
                    </a>
                    <a
                        href={codeLink}
                        className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300"
                    >
                        Code
                    </a>
                </div>
            </div>
        )
    )
}

