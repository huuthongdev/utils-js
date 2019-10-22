export function CountDown(expireAt) {
    const now = Date.now();
    expireAt = new Date(expireAt * 1000).getTime();
    const t = expireAt - now;

    if (t < 0) return {
        status: 'expired',
        label: 'Đã hết hạn',
    };

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((t % (1000 * 60)) / 1000);

    if (days) return {
        status: 'pending',
        label: `Còn lại ${days} ngày`,
    };

    if (hours) return {
        status: 'soon',
        label: `Còn lại ${hours}h:${mins}p`,
    };

    if (mins) return {
        status: 'soon',
        label: `Còn lại ${mins} phút`,
    };

    return {
        status: 'soon',
        label: `Còn lại ${secs} giây`,
    };
}

export function TimeToSeconds(time) {
    if (!time) return;
    time = new Date(time);
    return +Math.floor(time.getTime() / 1000).toFixed(0)
}

export function SecondsToTime(time) {
    if (!time) return;
    try {
        return new Date(time * 1000)
    } catch (error) {
        return;
    }
}

export function FormatToShow(seconds) {
    if (!seconds) return '--';
    const time = new Date(seconds * 1000);
    let hours = time.getHours();
    let min = time.getMinutes();
    min = min < 10 ? `0${min}` : min;
    return `${time.toLocaleDateString('en-GB')} - ${hours}:${min}`;
}