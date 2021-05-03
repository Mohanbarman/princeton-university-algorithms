export class QuickUnion {
    array: number[];

    constructor(n:number) {
        this.array = [];
        for (let i = 0; i < n; i++) {
            this.array.push(i);
        }
    }

    private root(node:number) {
        while (node !== this.array[node]) node = this.array[node];
        return node;
    }

    public union(x:number, y:number):void {
        const xRoot:number = this.root(x);
        const yRoot:number = this.root(y);

        this.array[xRoot] = this.array[yRoot];
    }

    public connected(x:number, y:number):boolean {
        return this.root(x) === this.root(y);
    }
}