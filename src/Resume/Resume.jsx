

const Resume = () => {
    const handleDownload = () => {
        window.location.href = '/Updated resume.pdf';
    };
    return (
        <button onClick={handleDownload}>
            Download Resume
        </button>
    );
};

export default Resume;