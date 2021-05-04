import { QuickFind } from '../src';

describe(QuickFind, () => {
    it('should union 2 and 3', () => {
        const quickFind: QuickFind = new QuickFind(10);
        quickFind.union(2, 3);
        expect(quickFind.connected(2, 3)).toBe(true);
    });

    it('should not connect 3 and 4', () => {
        const quickFind: QuickFind = new QuickFind(10);
        expect(quickFind.connected(3, 4)).toBe(false);
    })

    it('should union 4 and 1', () => {
        const quickFind: QuickFind = new QuickFind(10);
        quickFind.union(4, 1);
        expect(quickFind.connected(4, 1)).toBe(true);
    });

    it('should union 8, 7 and 9', () => {
        const quickFind: QuickFind = new QuickFind(10);
        quickFind.union(8, 7);
        quickFind.union(7, 9);
        expect(quickFind.connected(8, 9)).toBe(true);
    });

})