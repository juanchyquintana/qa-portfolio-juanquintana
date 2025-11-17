module.exports = (on, config) => {
    on('task', {
        logMessage(message) {
            console.log(message);
            return null;
        },
        calculateSum(a, b) {
            return a + b;
        }
    })
}