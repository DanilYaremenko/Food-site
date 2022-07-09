function timer(id, deadline) {

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor( (t / (1000 * 60 * 60 * 24)) );
        const seconds = Math.floor( (t / 1000) % 60 );
        const minutes = Math.floor( (t / 1000 / 60) % 60 );
        const hours = Math.floor( (t / (1000 * 60 * 60) % 24) - 3 ); //We're in GMT+3 time zone

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else if (num < 0) {
            return '00';
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);

}

export default timer;