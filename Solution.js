
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let hours = time.substring(0, 2);
    let minutes = time.substring(3);

    let numberOfValidClockTimes = 1;

    if (hours === "??") {
        numberOfValidClockTimes = 24;
    } else {
        numberOfValidClockTimes = (hours.charAt(0) === '?') ? ((hours.charAt(1) < '4') ? 3 : 2) : 1;
        numberOfValidClockTimes *= (hours.charAt(1) === '?') ? ((hours.charAt(0) < '2') ? 10 : 4) : 1;
    }

    if (minutes === "??") {
        numberOfValidClockTimes *= 60;
    } else {
        numberOfValidClockTimes *= (minutes.charAt(0) === '?') ? 6 : 1;
        numberOfValidClockTimes *= (minutes.charAt(1) === '?') ? 10 : 1;
    }

    return numberOfValidClockTimes;
};
