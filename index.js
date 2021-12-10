const [nowDate] = process.argv.slice(2);
const formatDuration = require('date-fns/formatDuration');
const intervalToDuration = require('date-fns/intervalToDuration');
const parse = require('date-fns/parse');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const myDate = parse(nowDate, 'mm-HH-dd-MM-yyyy', new Date());


function timer() {
let duration = intervalToDuration({
    start: myDate, 
    end: new Date(),
})
formatDuration(duration, {
    delimiter: ', '
})
console.log(duration);
}
setInterval(timer, 1000 );

//сделал только обратный отсчет, с событиями не разобрался разрешите досдать позже.










