const CrudRepository = require("./crud-repository");
const {BOOKING} = require('../models')


class CityRespository extends CrudRepository {
    constructor(){
        super(BOOKING)
    }
}

module.exports = CityRespository