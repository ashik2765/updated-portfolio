

const Resume = () => {
    const handleDownload = () => {
        window.location.href = '/resume.pdf';
    };
    return (
        <button onClick={handleDownload}>
            Download Resume
        </button>
    );
};

export default Resume;