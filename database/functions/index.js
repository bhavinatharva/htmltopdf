const {onRequest} = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
admin.initializeApp({
  databaseURL: 'https://fir-demo-7f64b-default-rtdb.firebaseio.com',
});

exports.doPostInvoice = onRequest(async (request, response) => {
  try {
    if (request.method.toUpperCase() === 'GET') {
      response.status(403).send({message: 'Get Method is not allowed'});
      return;
    }
    let description = request.body.description;
    let quantity = request.body.quantity;
    let unitPrice = request.body.unitPrice;
    let total = request.body.total;
    if (
      description === undefined &&
      quantity === undefined &&
      unitPrice === undefined &&
      total === undefined
    ) {
      response.status(200).send({
        errors: [
          {description: 'Please enter description feild'},
          {quantity: 'Please enter quantity feild'},
          {unitPrice: 'Please enter unitPrice feild'},
          {total: 'Please enter total feild'},
        ],
      });
      return;
    }

    if (description === undefined) {
      response.status(200).send({
        errors: [{description: 'Please enter description feild'}],
      });
      return;
    }
    if (quantity === undefined) {
      response.status(200).send({
        errors: [{quantity: 'Please enter quantity feild'}],
      });
      return;
    }
    if (unitPrice === undefined) {
      response.status(200).send({
        errors: [{unitPrice: 'Please enter unitPrice feild'}],
      });
      return;
    }
    if (total === undefined) {
      response.status(200).send({
        errors: [{total: 'Please enter total feild'}],
      });
      return;
    }
    const data = request.body;
    const firestore = admin.database();
    const collectionRef = firestore.ref('products');
    await collectionRef.push(data);
    response.status(201).send({message: 'Data added successfully', data});
  } catch (error) {
    console.error('Error adding data:', error);
    response.status(500).send({message: 'Error adding data', error});
  }
});

exports.doGetInvoice = onRequest(async (request, response) => {
  try {
    if (
      request.method.toUpperCase() === 'POST' ||
      request.method.toUpperCase() === 'PUT' ||
      request.method.toUpperCase() === 'DELETE'
    ) {
      response.status(403).send({message: 'This method is not allowed'});
      return;
    }

    const itemsPerPage = request.query.per_page
      ? parseInt(request.query.per_page)
      : 10; // Number of items per page
    const currentPage = request.query.page ? parseInt(request.query.page) : 1; // Number of items per page
    const productsRef = admin.database().ref('products');

    // Calculate the starting point for pagination
    const startAt = (currentPage - 1) * itemsPerPage;

    // Reference to the "products" node in the database
    const results = await productsRef
      .orderByKey() // Order by keys for consistent pagination
      .startAt(startAt.toString())
      .limitToFirst(itemsPerPage)
      .once('value');
    const productsArray = [];
    results.forEach(val => {
      productsArray.push(val.val());
    });
    response.status(201).send({
      message: 'Data fetch successfully',
      data: productsArray,
      meta: {currentPage, itemsPerPage},
    });
  } catch (error) {
    console.error('Error getting data:', error);
    response.status(500).send({message: 'Error adding data', error});
  }
});
