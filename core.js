//----------------------------------------------------------
//MinSQLJS v1.0.0 Alpha | November 2017                    |
//Kristian Batalo                                          |
//dev.cribyte.com                                          |
//----------------------------------------------------------
var MinSQLJS = /** @class */ (function () {
    function MinSQLJS() {
    }
    MinSQLJS.prototype.select = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        try {
            return this.neededSelectData(params);
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.selectConsole = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        try {
            console.log(this.neededSelectData(params));
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.selectFor = function (doing) {
        try {
            for (var _i = 0, _a = this.sl_obj; _i < _a.length; _i++) {
                var u = _a[_i];
                try {
                    doing(u);
                }
                catch (error) {
                    console.log(error);
                    break;
                }
            }
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.delete = function (index) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        try {
            this.sl_obj.splice(index, 1);
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.update = function (index, value) {
        try {
            this.sl_obj[index] = value;
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.append = function (index, value) {
        try {
            this.sl_obj[index] = this.sl_obj[index] + value;
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.insert = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            if (args.length > 0) {
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var i = args_1[_a];
                    this.sl_obj.push(i);
                }
            }
            else {
                this.errorCode(2);
            }
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.then = function (callback) {
        try {
            callback();
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.appendObject = function (index, obj) {
        try {
            if (obj.length > 0) {
                for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                    var j = obj_1[_i];
                    this.sl_obj[index][j.key] = j.value;
                }
            }
            else {
                this.errorCode(2);
            }
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.selectCurrentObj = function (array) {
        try {
            if (Array.isArray(array)) {
                this.sl_obj = array;
                return this;
            }
            else {
                this.sl_obj = null;
                this.errorCode(0);
                return this;
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.sort = function (sort) {
        if (sort === void 0) { sort = 'asc'; }
        try {
            var sort_func = void 0;
            if (sort == 'asc') {
                this.sl_obj.sort(function (a, b) { return a - b; });
            }
            else if (sort == 'desc') {
                this.sl_obj.sort(function (a, b) { return b - a; });
            }
            else {
                this.errorCode(1);
            }
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.sortBy = function (property) {
        try {
            this.sl_obj.sort(this.dynamicSort(property));
            return this;
        }
        catch (error) {
            console.log(error);
        }
    };
    MinSQLJS.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    MinSQLJS.prototype.neededSelectData = function (params) {
        var data_params = [];
        if (params.length > 0) {
            for (var _i = 0, _a = this.sl_obj; _i < _a.length; _i++) {
                var j = _a[_i];
                for (var _b = 0, params_1 = params; _b < params_1.length; _b++) {
                    var z = params_1[_b];
                    data_params.push(j[z]);
                }
            }
        }
        else {
            data_params = this.sl_obj;
        }
        return data_params;
    };
    MinSQLJS.prototype.errorCode = function (code) {
        var error = [
            "Invalid Parameter: Argument is not an Array",
            "Invalid Parameter: You must set asc or desc as Argument!",
            "Invalid Parameter: You must pass minimum of one Argument!"
        ];
        console.log("MinSQLJS ERROR: " + error[code]);
    };
    return MinSQLJS;
}());
var msj_lib = new MinSQLJS();
var _ = function (array) { return msj_lib.selectCurrentObj(array); };
var mj = _;
//# sourceMappingURL=core.js.map