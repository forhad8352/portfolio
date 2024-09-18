import React from 'react'

const DownloadPdf = () => {
                  const DownloadPDF = () => {
    const handleDownload = () => {
      // Create an anchor element
      const link = document.createElement("a");
    
      // Set the href to the path of your PDF file
      link.href = "/path-to-your-pdf-file.pdf"; // Replace with the actual file path
    
      // Set the 'download' attribute to suggest a file name
      link.download = "example.pdf"; // Replace with the desired file name
    
      // Append the link to the document body
      document.body.appendChild(link);
    
      // Programmatically click the anchor to trigger the download
      link.click();
    
      // Remove the anchor from the document after download
      document.body.removeChild(link);
    };
  }
  return (
    <div>DownloadPdf</div>
  )
}

export default DownloadPdf