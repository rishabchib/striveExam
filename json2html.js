// json2html.js
export default function json2html(data) {
    // Validate if data is an array and not empty
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available.</p>';
    }
  
    // Extract column headers from the first object
    const columns = Object.keys(data[0]);
  
    let html = '<table data-user="rishabchib1@gmail.com">';
  
    // Table header
    html += '<thead><tr>';
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
    html += '</tr></thead>';
  
    // Table body
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      columns.forEach(col => {
        html += `<td>${row[col] || ''}</td>`; // Add a blank if the data is missing
      });
      html += '</tr>';
    });
    html += '</tbody>';
  
    html += '</table>';
    
    return html;
  }
  