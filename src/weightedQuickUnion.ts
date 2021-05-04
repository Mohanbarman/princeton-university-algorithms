export class WeightedQuickUnion {
    array: number[];
    size: number[];

    constructor(n:number) {
        this.array = [];
        this.size = [];
        for (let i = 0; i < n; i++) {
            this.array.push(i);
            this.size.push(1);
        }
    }

    private root(node:number) {
        while (node !== this.array[node]) node = this.array[node];
        return node;
    }

    public union(x:number, y:number):void {
        const xRoot:number = this.root(x);
        const yRoot:number = this.root(y);

        if (xRoot === yRoot) return;

        if (this.size[xRoot] < this.size[yRoot]) {
            this.array[xRoot] = this.array[yRoot];
            this.size[yRoot] += this.size[xRoot];
        } else {
            this.array[yRoot] = this.array[xRoot];
            this.size[xRoot] += this.size[yRoot];
        }
    }

    public connected(x:number, y:number):boolean {
        return this.root(x) === this.root(y);
    }
}
