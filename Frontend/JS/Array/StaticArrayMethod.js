Array.isArray([1, 2, 3]);// true

Array.isArray("hello");// false


Array.from("hello");// ["h", "e", "l", "l", "o"]

Array.from({ length: 3 }, (_, index) => index + 1);// [1, 2, 3]


Array.of(10, 20, 30);// [10, 20, 30]