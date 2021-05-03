export class QuickFind {
    array: number[];

    constructor(n:number) {
        this.array = [];
        for (let i = 0; i < n; i++) {
            this.array.push(i);
        }
    }

    public union(x:number, y:number):void {
        const xId:number = this.array[x];
        const yId:number = this.array[y];

        this.array.forEach((value, index) => {
            if (value === xId) this.array[index] = yId;
        })
    }

    public connected(x:number, y:number) {
        return this.array[x] === this.array[y];
    }
}
