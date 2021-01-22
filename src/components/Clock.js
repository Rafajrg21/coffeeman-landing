import { useEffect } from 'react';
import styles from './clock.module.css';
import moment from 'moment';

function changeTime() {
    let hour = moment().format('HH');
    let minute = moment().format('mm');
    let second = moment().format('ss');

    let H1 = document.getElementById('hour1');
    let H2 = document.getElementById('hour2');
    let M1 = document.getElementById('minute1');
    let M2 = document.getElementById('minute2');
    let S1 = document.getElementById('second1');
    let S2 = document.getElementById('second2');

    changeTxt(H1, hour.substr(0,1));
    changeTxt(H2, hour.substr(1,1));
    changeTxt(M1, minute.substr(0,1));
    changeTxt(M2, minute.substr(1,1));
    changeTxt(S1, second.substr(0,1));
    changeTxt(S2, second.substr(1,1));

    setTimeout(changeTime, 1000);
} 

function changeTxt(obj, txt) {
    if(obj.innerText !== txt) {
        obj.className = 'hide';
        setTimeout(() => {
            obj.innerText = txt;
            obj.className = 'show';
        }, 500)
        
    }
}

const Clock = () => {
    useEffect(() => {
        changeTime();
    })

    return (
        <div className={styles.baseForClock}>
            <div className={styles.digitalClock}>
                <div className={styles.hour}>
                    <span id="hour1"></span>
                    <span id="hour2"></span>
                </div>
                <div className={styles.minute}>
                    <span id="minute1"></span>
                    <span id="minute2"></span>
                </div>
                <div className={styles.second}>
                    <span id="second1"></span>
                    <span id="second2"></span>
                </div>
            </div>
        </div>
    )
};

export default Clock;