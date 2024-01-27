

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto flex flex-col items-center">
                {/* Social Media Links */}
                <div className="mb-6">
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

                {/* Footer Text */}
                <p className="text-sm text-gray-500">&copy; 2024 Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;