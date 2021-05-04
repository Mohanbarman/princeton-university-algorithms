import { WeightedQuickUnion } from '../src';

describe(WeightedQuickUnion, () => {
    it('should union 4 and 1', () => {
        const quickFind: WeightedQuickUnion = new WeightedQuickUnion(10);
        quickFind.union(4, 1);
        expect(quickFind.connected(4, 1)).toBe(true);
    });

    it('should union 8, 7 and 9', () => {
        const quickFind: WeightedQuickUnion = new WeightedQuickUnion(10);
        quickFind.union(8, 7);
        quickFind.union(7, 9);
        expect(quickFind.connected(8, 9)).toBe(true);
    });

    it('should union 2 trees', () => {
        const quickFind: WeightedQuickUnion = new WeightedQuickUnion(10);
        // tree 1
        quickFind.union(1, 4);
        quickFind.union(3, 8);
        quickFind.union(4, 8);
        // tree 2
        quickFind.union(2, 5);
        quickFind.union(6, 2);
        quickFind.union(6, 9);
        quickFind.union(9, 1);
        expect(quickFind.connected(9, 8)).toBe(true);
    });

    it('should balance tree', () => {
        const quickFind: WeightedQuickUnion = new WeightedQuickUnion(10);
        quickFind.union(4, 3);
        quickFind.union(3, 8);
        quickFind.union(6, 5);
        quickFind.union(9, 4);
        quickFind.union(2, 1);
        quickFind.union(5, 0);
        quickFind.union(7, 2);
        quickFind.union(6, 1);
        quickFind.union(7, 3);

        const expectedArray = [6, 2, 6, 4, 6, 6, 6, 2, 4, 4];
        const resultArray = quickFind.array;

        expect(resultArray).toEqual(expectedArray);
    });

})