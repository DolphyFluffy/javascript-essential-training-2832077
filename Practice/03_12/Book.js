/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Book {
    constructor(
        numPages,
        numChapters,
        coverType,
        height,
        width,
        depth,
        coverOpen
    ) {
        this.numPages = numPages;
        this.numChapters = numChapters;
        this.coverType = coverType;
        this.dimensions = {
            height: height,
            width: width,
            depth: depth,
        }
        this.coverOpen = coverOpen;
    }

    toggleCover(coverStatus) {
        this.coverOpencoverOpen = coverStatus;
    }
}

export default Book;