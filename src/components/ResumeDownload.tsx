
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Loader2 } from 'lucide-react';
import { convertImageToPDF, downloadPDF } from '@/utils/pdfConverter';

const ResumeDownload: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Use the uploaded resume image
      const resumeImageUrl = '/lovable-uploads/324a90a1-7337-4004-ae83-d1154cf5d844.png';
      
      // Convert image to PDF
      const pdfBlob = await convertImageToPDF(resumeImageUrl);
      
      // Download the PDF
      downloadPDF(pdfBlob, 'Perumal-S-Resume.pdf');
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: direct image download if PDF conversion fails
      const link = document.createElement('a');
      link.href = '/lovable-uploads/324a90a1-7337-4004-ae83-d1154cf5d844.png';
      link.download = 'Perumal-S-Resume.png';
      link.click();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDownloading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Download className="w-5 h-5" />
      )}
      {isDownloading ? 'Converting to PDF...' : 'Download Resume'}
      <FileText className="w-5 h-5" />
    </motion.button>
  );
};

export default ResumeDownload;
