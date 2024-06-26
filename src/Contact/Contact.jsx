import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

import emailjs from 'emailjs-com';
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_USER_ID,)
            .then((result) => {
                setResponseMessage('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');

            }, (error) => {
                setResponseMessage('An error occurred. Please try again later.');
            });
    };

    return (


        <section id="contact" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

                {/* Contact Form */}
                <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-gray-700"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
                    {responseMessage && <div>{responseMessage}</div>}
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Connect with me on social media</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <FaTelegramPlane className="size-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/ashikur-rahman98/" className="text-white hover:text-gray-300 transition duration-300">
                            <FaLinkedin className="size-10" />
                        </a>
                        <a href="https://github.com/ashik2765" className="text-white hover:text-gray-300 transition duration-300">
                            <FaGithub className="size-10" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <FaInstagram className="size-10" />
                        </a>
                        {/* Add more social media links as needed */}
                    </div>
                </div>
            </div>
        </section>




        // <div>
        //     
        //     <form onSubmit={handleSubmit}>
        //         <label htmlFor="name">Name:</label>
        //         <input
        //             type="text"
        //             id="name"
        //             name="name"
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //             required
        //         /><br /><br />

        //         <label htmlFor="email">Email:</label>
        //         <input
        //             type="email"
        //             id="email"
        //             name="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             required
        //         /><br /><br />

        //         <label htmlFor="message">Message:</label><br />
        //         <textarea
        //             id="message"
        //             name="message"
        //             rows="4"
        //             cols="50"
        //             
        //             required
        //         /><br /><br />

        //         <button type="submit">Send</button>
        //     </form>

        //     {responseMessage && <div>{responseMessage}</div>}
        // </div>
    );
};

export default Contact;