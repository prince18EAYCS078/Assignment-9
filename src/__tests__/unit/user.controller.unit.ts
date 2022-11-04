import {Count} from '@loopback/repository';
import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor
} from '@loopback/testlab';
import {UserController} from '../../controllers';
import {User} from '../../models';
import {UserRepository} from '../../repositories';

describe('UserController', () => {
  let repository: StubbedInstanceWithSinonAccessor<UserRepository>;
  beforeEach(givenStubbedRepository);

  describe('find()', () => {
    it('retrieves all users', async () => {
      const controller = new UserController(repository);
      const storedUsers = [
        new User({
          id: 1,
          firstName: 'prince',
          middleName: 'na',
          lastName: 'suman',
          email: 'prince@sourcefuse.com',
          contact: '6203571750',
          role: 'SuperAdmin',
          address: 'noida',
          cid: 1,
        }),
        new User({
          id: 2,
          firstName: 'Sourav',
          middleName: 'na',
          lastName: 'Bhargava',
          email: 'sourav@sourcefuse.com',
          contact: '8699900787',
          role: 'Admin',
          address: 'noida',
          cid: 2,
        }),
      ];
      repository.stubs.find.resolves(storedUsers);

      const users = await controller.find();
      expect(users).to.deepEqual(storedUsers);

      sinon.assert.calledWithMatch(repository.stubs.find);
    });
  });

  describe('count()', () => {
    it('should return the total number of users', async () => {
      const controller = new UserController(repository);

      let c: Count = {
        count: 2,
      };

      repository.stubs.count.resolves(c);

      const count = await controller.count();
      expect(count).to.deepEqual(c);
      sinon.assert.calledWithMatch(repository.stubs.count);
    });
  });

  describe('findById()', () => {
    it('should return the user with the given id', async () => {
      const controller = new UserController(repository);

      const fetchedUser: User = new User({
        id: 1,
        firstName: 'prince',
        middleName: 'NA',
        lastName: 'suman',
        email: 'prince@sourcefuse.com',
        contact: '6203571750',
        role: 'SuperAdmin',
        address: 'delhi',
        cid: 1,
      });

      repository.stubs.findById.resolves(fetchedUser);

      const user: User = await controller.findById(1);

      expect(user).to.deepEqual(fetchedUser);
      sinon.assert.calledWithMatch(repository.stubs.findById);
    });
  });

  describe('updateById()', () => {
    it('should update the user with the given id', async () => {
      const controller = new UserController(repository);

      const user: User = new User({
        id: 1,
        firstName: 'prince',
        middleName: 'kumar',
        lastName: 'suman',
        email: 'prince@sourcefuse.com',
        contact: '6203571750',
        role: 'SuperAdmin',
        address: 'noida',
        cid: 1,
      });

      await controller.updateById(1, user);

      sinon.assert.calledWithMatch(repository.stubs.updateById, 1);
    });
  });

  function givenStubbedRepository() {
    repository = createStubInstance(UserRepository);
  }
});
