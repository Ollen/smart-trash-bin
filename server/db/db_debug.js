require('./db_connect');

const   all     = require('./all_query');
const   week    = require('./weekly_query');
const   month   = require('./monthly_query');
const   year    = require('./yearly_query');

all.getAllBinData();
all.getAllEmployeeData();
all.getAllEmployeeActivityData();
all.getAllSensorData();

week.getAverageTrashCurrentWeek();
week.getAverageTrashPerWeek();
week.getTopTenMostTrashCurrentWeek();
week.getMostTrashPerWeek();
week.getTopTenMostHumidCurrentWeek();
week.getMostHumidPerWeek();
week.getTrashPeakDayCurrentWeek();
week.getTrashPeakDayPerWeek();
week.getTopTenMostCleaningEmployeeCurrentWeek();
week.getMostCleaningEmployeePerWeek();


Promise.all([
    month.getAverageTrashPerMonth(),
    month.getAverageTrashCurrentMonth(),
    month.getTopTenMostTrashCurrentMonth(),
    month.getMostTrashPerMonth(),
    month.getTopTenMostHumidCurrentMonth(),
    month.getMostHumidPerMonth(),
    month.getTrashPeakDayCurrentMonth(),
    month.getTrashPeakDayPerMonth()
]).then(list => {
    console.log(list);
}).catch(err => {
    console.log('Error');
});