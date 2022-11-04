"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const controllers_1 = require("../../controllers");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
describe('ProductController (unit)', () => {
    let repository;
    beforeEach(givenStubbedRepository);
    describe('find()', () => {
        it('retrieves all customers', async () => {
            const controller = new controllers_1.CustomerController(repository);
            const storedCustomer = [
                new models_1.Customer({
                    id: 1,
                    name: 'google',
                    website: 'google.com',
                    address: 'jaipur',
                }),
                new models_1.Customer({
                    id: 2,
                    name: 'fb',
                    website: 'fb.com',
                    address: 'noida',
                }),
            ];
            repository.stubs.find.resolves(storedCustomer);
            const customers = await controller.find();
            (0, testlab_1.expect)(customers).to.deepEqual(storedCustomer);
            testlab_1.sinon.assert.calledWithMatch(repository.stubs.find);
        });
    });
    describe('count()', () => {
        it('should return the total number of customers', async () => {
            const controller = new controllers_1.CustomerController(repository);
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
        it('should return the customer with the given id', async () => {
            const controller = new controllers_1.CustomerController(repository);
            const fetchedCustomer = new models_1.Customer({
                id: 1,
                name: 'google',
                website: 'google.com',
                address: 'noida',
            });
            repository.stubs.findById.resolves(fetchedCustomer);
            const customer = await controller.findById(1);
            (0, testlab_1.expect)(customer).to.deepEqual(fetchedCustomer);
            testlab_1.sinon.assert.calledWithMatch(repository.stubs.findById);
        });
    });
    function givenStubbedRepository() {
        repository = (0, testlab_1.createStubInstance)(repositories_1.CustomerRepository);
    }
});
//# sourceMappingURL=customer.controller.js.map