const _ = require('lodash');
const { getPool, fetchWithPagination } = require('../helpers/db2');
const { logger } = require('../helpers/logger');

const moduleLogger = logger.child({ module: 'todoModel' });

const getOne = async (req) => {
	let row = {};
	// const where = [];
	// const values = [];

	try {
		row = await (await getPool()).query(
			`
        SELECT
        *
        FROM mportal_import_csv

        LIMIT 1
      `
		);
	} catch (e) {
		moduleLogger.error(e);
		throw e;
	}

	moduleLogger.debug({ row }, 'this data from db2');

	return row[0] || [];
};

module.exports = {
	getOne
};
