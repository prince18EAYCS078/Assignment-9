"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomerUserController = class CustomerUserController {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async find(id, filter) {
        return this.customerRepository.users(id).find(filter);
    }
    async create(id, user) {
        return this.customerRepository.users(id).create(user);
    }
    async patch(id, user, where) {
        return this.customerRepository.users(id).patch(user, where);
    }
    async delete(id, where) {
        return this.customerRepository.users(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/customers/{id}/users', {
        responses: {
            '200': {
                description: 'Array of Customer has many User',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.User) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerUserController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/customers/{id}/users', {
        responses: {
            '200': {
                description: 'Customer model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.User) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User, {
                    title: 'NewUserInCustomer',
                    exclude: ['id'],
                    optional: ['cid']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerUserController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/customers/{id}/users', {
        responses: {
            '200': {
                description: 'Customer.User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerUserController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/customers/{id}/users', {
        responses: {
            '200': {
                description: 'Customer.User DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerUserController.prototype, "delete", null);
CustomerUserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CustomerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CustomerRepository])
], CustomerUserController);
exports.CustomerUserController = CustomerUserController;
//# sourceMappingURL=customer-user.controller.js.map