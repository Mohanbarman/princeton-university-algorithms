/**
 * Given {n} members
 * and a logfile containing {m} timestamps forming connection 
 * logfile format {timestamp} {member1} {member2} assume logfile is sorted by {timestamp}
 * Task :
 *  - Find earliest time in which all members are connected
 *  - Running time should be {m*log(n)}
 */

export class SocialNetworkConnectivity {
  id: number[];
  size: number[];
  initialTimestamp: number;
  allConnectedIn: number = -1;

  constructor(n: number, initialTimestamp: number) {
    this.id = [];
    this.size = [];
    this.initialTimestamp = initialTimestamp;
    for (let i = 0; i < n; i++) {
      this.id.push(i);
      this.size.push(1);
    }
  }

  private root(node: number) {
    while (node !== this.id[node]) node = this.id[node];
    return node;
  }

  public union(timestamp: number, x: number, y: number): void {
    const xRoot: number = this.root(x);
    const yRoot: number = this.root(y);

    if (xRoot === yRoot) return;

    if (this.size[xRoot] < this.size[yRoot]) {
      this.id[xRoot] = this.id[yRoot];
      this.size[yRoot] += this.size[xRoot];
    } else {
      this.id[yRoot] = this.id[xRoot];
      this.size[xRoot] += this.size[yRoot];
    }

    // Checking weather all nodes are connected
    if (this.id.length === this.size[xRoot] || this.id.length === this.size[yRoot]) {
      this.allConnectedIn = timestamp;
    }
  }

  public isAllConnected(): number {
    if (this.allConnectedIn === -1) return -1;
    return this.allConnectedIn - this.initialTimestamp;
  }

  public connected(x: number, y: number): boolean {
    return this.root(x) === this.root(y);
  }

}