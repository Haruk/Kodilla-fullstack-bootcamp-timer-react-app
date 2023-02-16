import styles from './TimeDisplay.module.scss';

const TimeDisplay = ({ time }) => {

    const getTimeInProperFormat = (time) => {
        let milliseconds = Math.floor((time % 1000) / 100);
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;

    }

    return (
        <div className={styles.container}>
            {getTimeInProperFormat(time)}
        </div>
    );
}

export default TimeDisplay;
