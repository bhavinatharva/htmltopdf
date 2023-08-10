export interface InvoiceItem {
  no: number;
  description: string;
  quantity: string;
  unitPrice: string;
  total: string;
}

const doGenerateHTML = (
  list: InvoiceItem[],
  subtotal: string,
  tax: string,
  total: string,
) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport"
          content="width=device-width, initial-scale=1.0 ,height=device-height,  maximum-scale=1.0, user-scalable=0">
  
      <title>Tax Invoice</title>
      <style>
          body {
              font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
              height: 100%;
          }
  
          .invoice {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              background-color: #fff;
          }
  
          .header {
              text-align: center;
              padding-bottom: 20px;
          }
  
          .header h1 {
              color: #007bff;
              margin: 0;
          }
  
          .details {
              margin-bottom: 20px;
              padding-bottom: 10px;
              justify-content: space-between;
          }
  
          .details p {
              margin: 0;
  
          }
  
          .item-list {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
  
          }
  
          .item-list th,
          .item-list td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
          }
  
          .total {
              text-align: right;
              margin-top: 20px;
          }
  
          .signature {
              margin-top: 40px;
          }
  
          .tr {
              background-color: #007bff;
              color: white;
          }
  
          .row {
              display: flex;
          }
      </style>
  </head>
  
  <body>
      <div class="invoice">
          <div class="header">
              <h1>Tax Invoice</h1>
          </div>
          <div class="row details">
              <div>
                  <p><strong>Customer:</strong> John Doe</p>
                  <p><strong>Address:</strong> 123 Main Street, City, Country</p>
              </div>
              <div>
                  <p><strong>Invoice Number:</strong> #INV12345</p>
                  <p><strong>Date:</strong> August 15, 2023</p>
              </div>
  
          </div>
          <table class="item-list">
              <thead>
                  <tr class="tr">
                      <th>No</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total</th>
                  </tr>
              </thead>
              <tbody>
                  ${list.map(item => {
                    return doGetTableRow(item);
                  })}
              </tbody>
          </table>
          <div class="total">
              <p><strong>Subtotal:</strong> $${subtotal}</p>
              <p><strong>Tax (0%):</strong> ${tax}</p>
              <p><strong>Total Amount:</strong> $${total}</p>
          </div>
          <div class="signature">
              <p>Authorized Signature: ___________________________</p>
          </div>
      </div>
  </body>
  
  </html>`;
};
const doGetTableRow = ({
  no,
  description,
  quantity,
  unitPrice,
  total,
}: InvoiceItem) => {
  return `<tr>
  <td>${no}</td>
  <td>${description}</td>
  <td>${quantity}</td>
  <td>$${unitPrice}</td>
  <td>$${total}</td>
</tr>`;
};
export default doGenerateHTML;
