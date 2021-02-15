/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Bookcase {
    constructor(
        // Defines parameters
        height,
        width,
        depth,
        numOfBooks,
        numOfShelves,
        leftDoorState,
        rightDoorState
    ) {
        // Define properties
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.numOfBooks = numOfBooks;
        this.numOfShelves = numOfShelves;
        this.door = {
            left: leftDoorState,
            right: rightDoorState,
        }
    }
    // Add methods like normal functions
    toggleDoor(side, doorOpen) {
        if (side === 'left') {
            this.door.left = doorOpen;
        }
        if (side === 'right') {
            this.door.right = doorOpen;
        }
    }
}

export default Bookcase;