import fs from 'fs';
import path from 'path';
import { SocialNetworkConnectivity } from '../src';

describe('testing social network connectiviy', () => {
  it('should union correctly', () => {
    const sn = new SocialNetworkConnectivity(10, 0);

    sn.union(1000, 1, 2);
    sn.union(1000, 4, 3);
    sn.union(1000, 4, 1);

    expect(sn.connected(1, 3)).toEqual(true);
  });

  it('should identify earliest time at which all members are connected', () => {
    const content = fs.readFileSync(path.join(__dirname, 'assets', 'socialNetwork.txt'), { encoding: 'utf-8' });
    const logs = content.split('\n').map(i => i.split(' ').map(i => parseInt(i)));

    const sn = new SocialNetworkConnectivity(logs.length, logs[0][0]);
    logs.forEach(([timestamp, x, y]) => sn.union(timestamp, x, y))

    expect(sn.isAllConnected()).toBe(8000);
  })
});