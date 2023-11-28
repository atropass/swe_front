import PDFDocument from 'pdfkit';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipe = promisify(pipeline);

export default async (req, res) => {
  // Create a PDF document
  const doc = new PDFDocument();

  // Add content to the PDF
  doc.text('Hello World!', 100, 100);

  // Set response headers to indicate a file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="example.pdf"');

  // Finalize PDF file
  doc.end();

  // Stream the PDF into the response
  await pipe(doc, res);
};