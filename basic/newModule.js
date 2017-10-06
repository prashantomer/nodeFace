function newModuleFunction() {
	console.log('Inside newModuleFunction\n')
}

var newModuleString = "<h1>Showing newModuleString</h1>\n"

module.exports.newModuleString = newModuleString;
module.exports.newModuleFunction = newModuleFunction;