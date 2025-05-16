import * as util from "./main.js"

describe('Cosine function', () => {
    test('should get 0.5 as result of cos(Pi/3)', () => {
        expect(util.cos(Math.PI/3)).toBeCloseTo(0.5, 10)
    })
})

describe('Tangent function', () => {
    test('should get 1 as result of tan(Pi/4)', () => {
        expect(util.tan(Math.PI/4)).toBeCloseTo(1, 10)
    })
})

describe('Arcsine function', () => {
    test('should get Pi/6 as result of asin(0.5)', () => {
        expect(util.asin(0.5)).toBeCloseTo(Math.PI / 6, 10)
    })
})