const _ = require('lodash');
const { matchedData } = require('express-validator');
const todoModel = require('../models/tmp');
const userModel = require('../models/userModel');
const { logger } = require('../helpers/logger');
const {
	validateRequest,
	handleCustomValidationError,
	handleNotFound,
	handleSuccess,
	handleForbidden
} = require('../helpers/response');
const { getTokenData } = require('../helpers/authentication');

const moduleLogger = logger.child({ module: 'todoController' });

const getdata = async (req, res) => {
	// const tokenData = await getTokenData(req);

	// // Validate request
	// if (tokenData.role !== userModel.userRole.user) {
	// 	return handleForbidden(res, 'Only user can retrieve todo.');
	// }
	// const validationRequest = await validateRequest(req, res, {});
	// if (validationRequest !== null) {
	// 	return validationRequest;
	// }

	// Retrieve only valid parameters
	// const params = matchedData(req, {
	// 	includeOptionals: true,
	// 	onlyValidData: true
	// });

	// const searchOptions = {
	// 	id: params.todoId,
	// 	user_id: tokenData.id,
	// 	status: todoModel.todoStatus.active
	// };

	const row = await todoModel.getOne(req);

	if (_.isEmpty(row)) {
		return handleNotFound(res, 'Todo does not exist in our database.');
	}

	return handleSuccess(res, '', row);
};

module.exports = {
	getdata
};
