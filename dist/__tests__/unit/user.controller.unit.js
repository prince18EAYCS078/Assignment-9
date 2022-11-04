"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const controllers_1 = require("../../controllers");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
describe('UserController', () => {
    let repository;
    beforeEach(givenStubbedRepository);
    describe('find()', () => {
        it('retrieves all users', async () => {
            const controller = new controllers_1.UserController(repository);
            const storedUsers = [
                new models_1.User({
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
                new models_1.User({
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
            (0, testlab_1.expect)(users).to.deepEqual(storedUsers);
            testlab_1.sinon.assert.calledWithMatch(repository.stubs.find);
        });
    });
    describe('count()', () => {
        it('should return the total number of users', async () => {
            const controller = new controllers_1.UserController(repository);
            let c = {
                count: 2,
            };
            repository.stubs.count.resolves(c);
            const count = await controller.count();
            (0, testlab_1.expect)(count).to.deepEqual(c);
            testlab_1.sinon.assert.calledWithMatch(repository.stubs.count);
        });
    });
    describe('findById()', () => {
        it('should return the user with the given id', async () => {
            const controller = new controllers_1.UserController(repository);
            const fetchedUser = new models_1.User({
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
            const user = await controller.findById(1);
            (0, testlab_1.expect)(user).to.deepEqual(fetchedUser);
            testlab_1.sinon.assert.calledWithMatch(repository.stubs.findById);
        });
    });
    describe('updateById()', () => {
        it('should update the user with the given id', async () => {
            const controller = new controllers_1.UserController(repository);
            const user = new models_1.User({
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
            testlab_1.sinon.assert.calledWithMatch(repository.stubs.updateById, 1);
        });
    });
    function givenStubbedRepository() {
        repository = (0, testlab_1.createStubInstance)(repositories_1.UserRepository);
    }
});
//# sourceMappingURL=user.controller.unit.js.map