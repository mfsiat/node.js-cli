const key = {
  set() {
    console.log('Hello from set');
  },
  show() {
    console.log('Hello from show');
  },
  remove() {
    console.log('Hello from remove');
  }
};

// we are exporting this module globally
module.exports = key;