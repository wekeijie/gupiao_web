export const httpErrorFormat = errors => {
	let message = '';
	if( Object.keys(errors).length === 0) {
		return 'Network link failed, please try again!'
	}
	else if(errors.hasOwnProperty('response')){	
		Object.keys(errors.response.data.errors).forEach(function(key) {
			message += errors.response.data.errors[key][0] + ";\n\r";
		});
		
	}
	else{
		message += errors.message;
	}
	return message;
}