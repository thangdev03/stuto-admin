export const getFluctuationRate = (lists) => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    let lastTotal = 0;
    let count = 0;
    let rate = 0;
    lists.forEach(obj => {
        const createdMonth = new Date(obj.createdAt).getMonth();
        const createdYear = new Date(obj.createdAt).getFullYear();

        if (createdYear === thisYear && createdMonth === thisMonth - 1) {
            lastTotal += 1;
        } else if (createdYear === thisYear - 1 && createdMonth === 11 && thisMonth == 0) {
            lastTotal += 1;
        }

        if (createdMonth === thisMonth && createdYear === thisYear) {
            count += 1;
        }
    });

    if (lastTotal !== 0) {
        rate = (count >= lastTotal) ? (count/lastTotal * 100) : (-(lastTotal-count)/lastTotal * 100);
    } else {
        rate = count * 100;
    }

    return rate;
}