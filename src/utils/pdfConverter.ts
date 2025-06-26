
import jsPDF from 'jspdf';

// PDF conversion utility using jsPDF
export const convertImageToPDF = async (imageUrl: string): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        // Create a new jsPDF instance
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        // Get PDF dimensions
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        // Calculate image dimensions to fit in PDF with margins
        const margin = 10;
        const maxWidth = pdfWidth - (margin * 2);
        const maxHeight = pdfHeight - (margin * 2);
        
        const aspectRatio = img.width / img.height;
        let imgWidth = maxWidth;
        let imgHeight = imgWidth / aspectRatio;
        
        if (imgHeight > maxHeight) {
          imgHeight = maxHeight;
          imgWidth = imgHeight * aspectRatio;
        }
        
        // Center the image
        const xPos = (pdfWidth - imgWidth) / 2;
        const yPos = (pdfHeight - imgHeight) / 2;
        
        // Add image to PDF
        pdf.addImage(img, 'JPEG', xPos, yPos, imgWidth, imgHeight);
        
        // Convert to blob
        const pdfBlob = pdf.output('blob');
        resolve(pdfBlob);
        
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = imageUrl;
  });
};

export const downloadPDF = (blob: Blob, filename: string = 'Perumal-S-Resume.pdf') => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up the URL object
  setTimeout(() => URL.revokeObjectURL(url), 100);
};
