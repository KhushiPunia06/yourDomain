
function generatePdf() {
    const username = document.getElementById('username').value;
    const course = document.getElementById('course').value;
    const currentDate = new Date().toDateString(); // Get current date in a readable format
  
    const docDefinition = {
      content: [
        { text: 'Date of Offer: ' + currentDate, margin: [0, 0, 0, 10] },
        { text: `Name: ${username}`, margin: [0, 0, 0, 10] },
        { text: `Course: ${course}`, margin: [0, 0, 0, 10] },
      ],
    };
  
    const fileName = `${course}_${username}_${currentDate}.pdf`; // Construct filename based on course, username, and date
  
    pdfMake.createPdf(docDefinition).download(fileName); // Trigger download with specified filename
  }
  
  
  