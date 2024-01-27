

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

                {/* Contact Form */}
                <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-gray-700"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-gray-700"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-gray-700"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Connect with me on social media</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <i className="fab fa-linkedin-in fa-2x"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        {/* Add more social media links as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;