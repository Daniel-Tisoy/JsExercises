/*
Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
Math.orbitalPeriod = function (avgAlt) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let period = 2 * Math.PI * (Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM))
    return period;
}


function orbitalPeriod(arr) {

    let result = []

    arr.forEach(({ name, avgAlt }) => {
        let orbitalPeriod = Math.round(Math.orbitalPeriod(avgAlt));
        result.push({ name, orbitalPeriod })
    });

    return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);