import {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
} from "../lab-TDD-starter.js";

import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("add", () => {
    it("should return 9 when given 5 and 4", () => {
        assert.strictEqual(add(5, 4), 9);
    });
});

describe("subtract", () => {
    it("should return 1 when given 2 and 1", () => {
        assert.strictEqual(subtract(2, 1), 1);
    });
});

describe("multiply", () => {
    it("should return 10 when given 2 and 5", () => {
        assert.strictEqual(multiply(2, 5), 10);
    });
});

describe("divide", () => {
    it("should return 6 when given 18 and 3", () => {
        assert.strictEqual(divide(18, 3), 6);
    });
    it("should theow an error when zero-division is attempted", () => {
        assert.throws(() => divide(90, 0));
    });
});

describe("modulas", () => {
    it("should return 2 when given 5 and 3", () => {
        assert.strictEqual(modulas(5, 3), 2);
    });
});

describe("power", () => {
    it("should return 6561 when given 9 and 4", () => {
        assert.strictEqual(power(9, 4), 6561);
    });
});

describe("squareRoot", () => {
    it("should return 6 when given 36", () => {
        assert.strictEqual(squareRoot(36), 6);
    });
});

describe("floor", () => {
    it("should return 9 when given 9.8287", () => {
        assert.strictEqual(floor(9.8287), 9);
    });
});

describe("ceiling", () => {
    it("should return 10 when given 9.2092", () => {
        assert.strictEqual(ceiling(9.2092), 10);
    });
});
