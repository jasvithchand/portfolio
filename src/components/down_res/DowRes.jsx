import React from 'react';
import PropTypes from 'prop-types';
import './downres.css'

const DownloadResumeButton = ({ fileName}) => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = fileName;
    downloadLink.download = fileName.split('/').pop();
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload} className='btn'>
      Download Resume
    </button>
  );
};

DownloadResumeButton.propTypes = {
  fileName: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
};

export default DownloadResumeButton;
