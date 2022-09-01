/**随机获取bool值 */

const getRandomBoolean = () => Math.random() >= 0.5

/**获取是否是不是周末 */

const isWeekDay = (date) => [0,6].includes(date.getDay())