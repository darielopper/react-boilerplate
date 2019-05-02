function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
})