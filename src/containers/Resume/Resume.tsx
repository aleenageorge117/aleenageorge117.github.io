import React from 'react';
import { Document, Page } from 'react-pdf';

const Resume = () => {
    
    return (
        <Document file='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf' />
    );
}

export default Resume;
