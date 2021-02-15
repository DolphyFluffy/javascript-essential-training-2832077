/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bookcase from "./Bookcase.js";
import Book from "./Book.js";

const houseCase = new Bookcase (
    3,
    2,
    1,
    54,
    4,
    true,
    false
);

const novel = new Book (
    345,
    14,
    "hardcover",
    12,
    8,
    2,
    false
)

console.log(houseCase);
console.log(novel);