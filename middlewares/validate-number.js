'use strict';

module.exports = () => {
  return (req, res, next) => {
    if(typeof NaN === 'number') {
      req.number = (req.query.number)*(req.query.number)
      next();
    } else {
      next(`${number} is not a number`);
      
    }
  }
}