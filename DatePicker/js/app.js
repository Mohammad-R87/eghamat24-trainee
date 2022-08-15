class DatePicker {
    constructor(elm) {
        this.root = elm;
        this.root.setAttribute('autocomplete', 'off');
        this.calernder = document.createElement('div');
        this.calernder.classList.add('calendar');
        document.body.appendChild(this.calernder);

        let template = `
            <div class="sp-cal-title">
            <a><i class="fa-solid fa-angles-right"></i></a>
            <a><i class="fa-solid fa-angle-right"></i></a>
            <span class="cal-caption"></span>
            <a><i class="fa-solid fa-angle-left"></i></a>
            <a><i class="fa-solid fa-angles-left"></i></a>
            </div>
            <div class="sp-cal-label-days">
                <span>ش</span>
                <span>ی</span>
                <span>د</span>
                <span>س</span>
                <span>چ</span>
                <span>پ</span>
                <span>ج</span>
            </div>
            <div class="sp-cal-days"></div>
            <a class="go-today">برو به امروز</a>
           `;
        this.calernder.innerHTML = template;
        this.daysDiv = this.calernder.getElementsByClassName('sp-cal-days')[0];
        this.goToday = this.calernder.getElementsByClassName('go-today')[0];
        this.daysList = [];
        this.isCalenderVisible = false;
        moment.locale('fa');
        let date = new moment();
        this.today = date.date();
        this.month = date.month();
        this.year = date.year();
        this.markedDay = 0;
        this.markedMonth = 0;
        this.markedYear = 0;
        this.mouseX = 0;
        this.mouseY = 0;


        this.root.addEventListener('focus', e => {
            this.showCalender();
        })

        document.addEventListener('click', e => {
            if (this.isCalenderVisible) {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                let rect = this.calernder.getBoundingClientRect();
                if (this.mouseX > rect.left && this.mouseX < rect.right)
                    if (this.mouseY > rect.top && this.mouseY < rect.bottom)
                        return;
                this.hideCalender();
            }
        })

        this.goToday.addEventListener('click', e => {
            let goDay = new moment();
            this.today = goDay.date();
            this.month = goDay.month();
            this.year = goDay.year();
            this.markedDay = goDay.date();
            this.markedMonth = goDay.month;
            this.markedYear = goDay.year;
            let d = String(goDay.date());
            let m = String(goDay.month() + 1);
            let y = String(goDay.year());
            if (d.length == 1) d = '0' + d;
            if (m.length == 1) m = '0' + m;
            this.root.value = `${y}/${m}/${d}`;
            this.hideCalender();
        })

        this.daysDiv.addEventListener('click', e => {
            let bRect = this.daysDiv.getBoundingClientRect();
            let nRows = this.daysList.length / 7;
            let dHeight = bRect.height / nRows;
            let dWidth = bRect.width / 7;
            let yIndex = Math.floor((e.clientY - bRect.top) / dHeight);
            let xIndex = Math.floor((-e.clientX + bRect.right) / dWidth);
            let day = this.daysList[yIndex * 7 + xIndex];
            if (day) {
                this.markedDay = day;
                this.markedMonth = this.month;
                this.markedYear = this.year;
                let d = String(day);
                let m = String(this.month + 1);
                let y = String(this.year);
                if (d.length == 1) d = '0' + d;
                if (m.length == 1) m = '0' + m;
                this.root.value = `${y}/${m}/${d}`;
                this.hideCalender();
            }
        });
        let capBtns = this.calernder.getElementsByClassName('sp-cal-title')[0];
        capBtns = capBtns.getElementsByTagName('a');
        capBtns[0].addEventListener('click', e => {
            this.year--;
            this.renderCalender();
        })
        capBtns[1].addEventListener('click', e => {
            this.month--;
            if (this.month < 0) {
                this.month = 11;
                this.year--;
            }
            this.renderCalender();
        })
        capBtns[2].addEventListener('click', e => {
            this.month++;
            if (this.month > 11) {
                this.month = 0;
                this.year++;
            }
            this.renderCalender();
        })
        capBtns[3].addEventListener('click', e => {
            this.year++;
            this.renderCalender();
        });
    }

    getFirstWeekDayOfMonth() {
        let m = moment();
        m.locale('fa');
        m.year(this.year);
        m.month(this.month);
        m.date(this.today);
        return m.startOf('month').weekday()
    }

    showCalender() {
        setTimeout(() => {
            this.isCalenderVisible = true;
        }, 200);
        this.calernder.style.visibility = 'visible';
        let {height, top, left} = this.root.getBoundingClientRect();
        let cRect = this.calernder.getBoundingClientRect();
        let y = top + pageYOffset;
        let x = left + pageXOffset;
        let offset = 4 + height;

        if (top + cRect.height + height > window.innerHeight) {
            offset = -4 - cRect.height;
        }
        this.calernder.style.top = (y + offset) + 'px';
        this.calernder.style.left = x + 'px';
        this.renderCalender();
    }

    hideCalender() {
        this.isCalenderVisible = false;
        this.calernder.style.visibility = 'hidden';
    }

    renderCalender() {
        let cap = this.calernder.getElementsByClassName('cal-caption')[0];
        let months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        cap.innerText = `${months[this.month]}, ${this.year}`
        let today = new moment();
        let nDays;
        if (this.month >= 0 && this.month <= 5) {
            nDays = 31;
        } else if (this.month >= 6 && this.month <= 10) {
            nDays = 30;
        } else {
            nDays = 29;
        }
        let startDay = new Date(this.year, this.month, 1).getDate();
        this.daysList = [];
        for (let i = 0; i < startDay - 1; i++) {
            this.daysList.push(0);
        }
        for (let i = -this.getFirstWeekDayOfMonth() + 1; i <= nDays; i++) {
            this.daysList.push(i);
        }
        this.daysDiv.innerHTML = '';
        for (let d of this.daysList) {
            let b = document.createElement('a');
            if (this.month == today.month() && d == today.date() && this.year == today.year()) {
                b.style.border = '2px solid #6200ed';
                console.log(d);
            }
            if (this.markedDay > 0) {
                if (this.markedYear == this.year && this.markedMonth == this.month && d == this.markedDay) {

                    b.style.backgroundColor = '#6200ed';
                    b.style.color = '#fff';
                }
            }
            if (d <= 0) {
                b.style.visibility = "hidden"
            }
            b.innerText = d === 0 ? '' : `${d}`;
            this.daysDiv.appendChild(b);
        }

    }
}