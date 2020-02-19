// https://adventofcode.com/2015/day/1

const initialFloor = 0;

const moveValues = {
    '(': 1,
    ')': -1,
};

/**
 * Returns the floor index to which the given instructions take Santa
 *
 * @param instructions
 * @returns number the destination floor given by the instructions
 */
const move =
    instructions =>
        Array.from(instructions).reduce((acc, move) => acc + (moveValues[move] || 0), initialFloor);

export default move;