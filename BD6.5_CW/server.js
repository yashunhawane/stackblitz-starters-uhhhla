let { app } = require('./index.js');

app.listen(3000, () => {
  console.log('server is running');
});

module.exports = app;
