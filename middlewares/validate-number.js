'use strict';

module.exports = () => {
  return (req, res, next) => {
    if(isNaN(-req.query.num )) {
      next(`${req.query.num} is not a number`);
    } else {
      req.num = (+req.query.num)*(+req.query.num)
      next();
      
     
    }
  }
}
// typeof +req.query.num == 'Number'