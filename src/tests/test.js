import ErrorRepository from "../ErrorRepository";
import Team from "../Team";
import { mag, man } from '../Character';

test('test1', () => {
    const repo = new ErrorRepository();
    repo.errors = new Map();
    repo.errors.set(1, 'gh');
    repo.errors.set(2, 'lk');

    const result = repo.translate();
    expect(result).toEquals('Unknown error');
})

test('test2', () => {
    const repo = new ErrorRepository();
    repo.errors = new Map();
    repo.errors.set(1, 'gh');
    repo.errors.set(2, 'lk');

    const result = repo.translate(1);
    expect(result).toBe('gh');
})

test('test3', () => {
    const team = new Team()
    team.members = new Set()
    team.members.add(mag)
    team.members.add(man)

    const result = team.toArray(members);
    expect(result).toEquals([
        Character {
          name: 'Маг',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: undefined,
          defence: undefined
        },
        Character {
          name: 'Джон',
          type: 'Bowman',
          health: 100,
          level: 1,
          attack: undefined,
          defence: undefined
        }
      ]) 
    })