export function CleanObj(obj) {
    obj = obj || {};
    return Object.keys(obj).reduce((acc, key) => (
        obj[key] === undefined
            || obj[key] === ''
            ? acc
            : { ...acc, [key]: obj[key] }
    ), {})
}

export function getIn(obj, path, def, handleFormat) {
    if (typeof obj === 'undefined' || obj === null) return def;
	/**
	 * If the path is a string, convert it to an array
	 * @param  {String|Array} path The path
	 * @return {Array}             The path array
	 */
    var stringToPath = function (path) {
        // If the path isn't a string, return it
        if (typeof path !== 'string') return path;
        // Create new array
        var output = [];
        // Split to an array with dot notation
        path.split('.').forEach(function (item, index) {

            // Split to an array with bracket notation
            item.split(/\[([^}]+)\]/g).forEach(function (key) {

                // Push to the new array
                if (key.length > 0) {
                    output.push(key);
                }

            });
        });
        return output;
    };

    // Get the path as an array
    path = stringToPath(path);
    // Cache the current object
    var current = obj;
    // For each item in the path, dig into the object
    for (var i = 0; i < path.length; i++) {
        // If the item isn't found, return the default (or null)
        if (typeof current[path[i]] === 'undefined' || current[path[i]] === null) return def;
        // Otherwise, update the current  value
        current = current[path[i]];
    }

    if (typeof handleFormat === 'function') return handleFormat(current);
    return current;
};

export function IsEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

export function IsHasValue(obj) {
    return !IsEmpty(obj);
}
