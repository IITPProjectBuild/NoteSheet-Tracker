import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'node:fs';

export default async function createPdf(data, logoPath, writePath) {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();
    // Add a blank page
    const page = pdfDoc.addPage([600, 800]); // you can add another page by creating a binding called page2
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const imageBytes = fs.readFileSync(logoPath); // Replace with your image path
    const image = await pdfDoc.embedPng(imageBytes);
    const imageDims = image.scale(0.05);

    page.drawImage(image, {
        x: 45,
        y: 712,
        width: imageDims.width,
        height: imageDims.height,
    });

    // header
    page.drawText('Indian Institute of Technology Patna', {
        x: 125,
        y: 750,
        size: 24,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });
    page.drawText('Stores and Purchase Section', {
            x: 125,
            y: 720,
            size: 16,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        }
    );
    page.drawRectangle({
        x: 40,
        y: 700,
        width: 520,
        height: 0,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1
    });

    // body
    page.drawText(`Title: ${data.title}`, {
        x: 60,
        y: 660,
        size: 14,
        font: timesRomanFont,
        color: rgb(0, 0, 0)
    })
    page.drawText(`Name of Indentor: ${data.userInfo.nameOfIndentor}\nDepartment: ${data.userInfo.department}\nCategory: ${data.userInfo.category}\nIndent Ref. No.: ${data.userInfo.indentRefNo}`, {
            x: 60,
            y: 630,
            size: 14,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
            lineHeight: 24,
        }
    );
    page.drawText(`Designation: ${data.userInfo.designation}\nAccounting Head: ${data.userInfo.accountingHead}\nFund Code: ${data.userInfo.fundCode}\nDate: ${data.userInfo.date}`, {
            x: 300,
            y: 630,
            size: 14,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
            lineHeight: 24,
        }
    );

    // Define table data
    const tableData = [
        ['Description', 'Justification', 'Quantity', 'Rate', 'Value']
    ];
    for (let item of data.equips) {
        tableData.push([item.description, item.justification, item.quantity, item.rate, item.value]);
    }

    const tableTop = 500;
    const cellWidth = 100;
    const cellHeight = 30;
    const tableLeft = 50;
    // Draw table rows
    tableData.forEach((row, rowIndex) => {
        row.forEach((cellText, colIndex) => {
            const x = tableLeft + colIndex * cellWidth;
            const y = tableTop - rowIndex * cellHeight;

            // Draw cell text
            page.drawText(cellText, {
                x: x + 10,
                y: y - 20,
                size: 12,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            });

            // Draw cell borders
            page.drawRectangle({
                x,
                y: y - cellHeight,
                width: cellWidth,
                height: cellHeight,
                borderColor: rgb(0, 0, 0),
                borderWidth: 1,
            });
        });
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Write the PDF to a file
    fs.writeFileSync(writePath, pdfBytes);
    console.log('PDF generated successfully!');
}