const axios = require('axios');
const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);

  // Make GET request to /api/debug/reset
  axios.get(`http://localhost:${PORT}/api/debug/reset`)
    .then(response => {
      console.log('GET request successful:', response.data);
    })
    .catch(error => {
      console.error('Error making GET request:', error.message);
    });

  // Make GET request to /api/photos
  axios.get(`http://localhost:${PORT}/api/photos`)
    .then(response => {
      console.log('GET request to /api/photos successful:', response.data);
    })
    .catch(error => {
      console.error('Error making GET request to /api/photos:', error.message);
    });

  // Make GET request to /api/topics
  axios.get(`http://localhost:${PORT}/api/topics`)
    .then(response => {
      console.log('GET request to /api/topics successful:', response.data);
    })
    .catch(error => {
      console.error('Error making GET request to /api/topics:', error.message);
    });
});
