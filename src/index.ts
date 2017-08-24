export = {
	400: {
		code: 'E103',
		message:
			'Bad request. The request could not be understood by the server due to malformed syntax.',
	},
	401: {
		code: 'E101',
		message: 'Access is denied due to invalid credentials.',
	},
	404: {
		code: 'E100',
		message:
			'Sorry, the page you are trying to access does not exist on this server.',
	},
	500: {
		code: 'E102',
		message: 'Internal server error.',
	},
	saved: {
		code: 'E104',
		message: 'Record has been successfully saved.',
	},
	notSaved: {
		code: 'E105',
		message: 'Save operation failed.',
	},
	updated: {
		code: 'E106',
		message: 'Record has been successfully updated.',
	},
	notUpdated: {
		code: 'E107',
		message: 'Update operation failed.',
	},
	deleted: {
		code: 'E108',
		message: 'Record has been successfully deleted.',
	},
	notDeleted: {
		code: 'E109',
		message: 'Delete operation failed.',
	},
	emailExisting: {
		code: 'E110',
		message: 'The email address you have entered is already registered.',
	},
	registered: {
		code: 'E111',
		message: 'You have successfully registered and logged in.',
	},
	loginSuccess: {
		code: 'E112',
		message: 'You are successfully logged in.',
	},
	loginFail: {
		code: 'E113',
		message: 'The username or password you entered is incorrect.',
	},
	passwordMismatch: {
		code: 'E114',
		message: 'Passwords don\'t match. Please retype. ',
	},
	otpTimeOut: {
		code: 'E115',
		message: 'The submitted one-time password is not valid.',
	},
	otpMismatch: {
		code: 'E116',
		message: 'The submitted one-time password is not correct.',
	},
	otpMatched: {
		code: 'E117',
		message: 'OTP matched successfully.',
	},
	invalidParams: {
		code: 'E118',
		message: 'Invalid parameters detected.',
	},
	success: {
		code: 'E119',
		message: 'Success',
	},
};
