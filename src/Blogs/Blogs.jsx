import React from 'react'

export default function Blogs() {
    const posts = [
        {
            id: 1,
            title: 'Understanding React Hooks',
            date: 'June 1, 2024',
            content: 'React hooks are functions that let you use state and other React features without writing a class...',
            imageUrl: 'https://i.ibb.co/2vSfStv/hook.jpg'
        },
        {
            id: 2,
            title: 'Getting Started with Tailwind CSS',
            date: 'May 25, 2024',
            content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces...',
            imageUrl: 'https://i.ibb.co/S6hvPpN/tailwindcss.png'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">My Portfolio</div>
                    <div>
                        <a href="#home" className="text-gray-600 hover:text-gray-800 px-4">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-800 px-4">About</a>
                        <a href="#blog" className="text-gray-600 hover:text-gray-800 px-4">Blog</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-800 px-4">Contact</a>
                    </div>
                </div>
            </nav>

            
            <header className="bg-gray-800 text-white text-center py-20">
                <h1 className="text-5xl font-bold">My Blog</h1>
                <p className="mt-4 text-lg">Sharing my knowledge and insights</p>
            </header>

            
            <main className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={post.imageUrl} alt={post.title} className="rounded-t-lg w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                                <p className="text-gray-700 mb-4">{post.content}</p>
                                <a href="#" className="text-blue-600 hover:underline">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
