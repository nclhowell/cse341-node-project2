const validator = require('../helpers/validate');

const saveMtb = (req, res, next) => {
  const validationRule = {
    manufacturer: 'required|string',
    model: 'required|string',
    discipline: 'required|string',
    frontTravel: 'required|string',
    rearTravel: 'required|string',
    brakes: 'required|string',
    terrainPreference: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(444).send({
        success: false,
        message: 'Comon, Man.. your validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveMtb
};
