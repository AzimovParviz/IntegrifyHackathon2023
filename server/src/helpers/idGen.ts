export const idGen = () => {
    let counter = 0;

    return function() {
        return counter++;
    }
}