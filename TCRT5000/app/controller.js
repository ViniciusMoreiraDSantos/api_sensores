const express = require('express');
const { ArduinoDataTemp } = require('./newserial');
const Database = require('./database');
const router = express.Router();



router.get('/', (request, response, next) => {
    let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataTemp.List.length).toFixed(2);

    response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
    });

});

router.get('/tempo_permanencia', (request, response, next) => {
    var result = Database.tempoPermanencia(); //Raylane
    response.json({
        data: result
    });
});

module.exports = router;