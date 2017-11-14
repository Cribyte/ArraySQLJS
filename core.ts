//----------------------------------------------------------
//MinSQLJS v1.0.0 Alpha | November 2017                    |
//Kristian Batalo                                          |
//dev.cribyte.com                                          |
//----------------------------------------------------------
class MinSQLJS {
    private sl_obj:any;
    public select(...params):any{
        try {
            return this.neededSelectData(params);
        } catch (error) {
            console.log(error);     
        }
    }
    public selectConsole(...params):MinSQLJS {
        try {
            console.log(this.neededSelectData(params));
            return this;
        } catch (error) {
            console.log(error);     
        }
    }
    public selectFor(doing:Function):MinSQLJS{
        try {
            for(let u of this.sl_obj){
                try {
                    doing(u);
                } catch (error) {
                    console.log(error);
                    break;
                }
            }
            return this;
        } catch (error) {
            console.log(error);     
        }
    }
    public delete(index:number, ...args):MinSQLJS {
        try {
            this.sl_obj.splice(index,1);
            return this;            
        } catch (error) {
            console.log(error);     
        }
    }
    public update(index:number, value:any):MinSQLJS {
        try {
            this.sl_obj[index]=value;
            return this;            
        } catch (error) {
            console.log(error);     
        }
    }
    public append(index:number, value:any):MinSQLJS {
        try {
            this.sl_obj[index]= this.sl_obj[index] + value;
            return this;            
        } catch (error) {
            console.log(error);     
        }
    }
    public insert(...args):MinSQLJS {
        try {
            if(args.length > 0){
                for(let i of args){
                    this.sl_obj.push(i);                
                }
            }
            else {
                this.errorCode(2);
            }
            return this;            
        } catch (error) {
            console.log(error);     
        }
    }
    public then(callback:Function){
        try {
            callback();
        } catch (error) {
            console.log(error);
        }
    }
    public appendObject(index:number,obj:any[]):MinSQLJS {
        try {
            if (obj.length > 0) {
                for(let j of obj){
                    this.sl_obj[index][j.key] = j.value;                
                }            
            } else {
                this.errorCode(2);
            }
            return this;            
        } catch (error) {
            console.log(error);     
        }
    }
    public selectCurrentObj(array:any[]):MinSQLJS {
        try {
            if(Array.isArray(array)){
                this.sl_obj = array;
                return this;
            }
            else {
                this.sl_obj = null;                
                this.errorCode(0);
                return this;
            }

        } catch (error) {
            console.log(error);
        }
    }
    public sort(sort:string = 'asc'):MinSQLJS {
        try {
            let sort_func;
            if(sort == 'asc'){
                this.sl_obj.sort(function(a, b){return a-b});
            }
            else if(sort == 'desc'){
                this.sl_obj.sort(function(a, b){return b-a});                
            }
            else {
                this.errorCode(1);
            }
            return this;
        } catch (error) {
            console.log(error);
        }
    }
    public sortBy(property:string):MinSQLJS {
        try {
            this.sl_obj.sort(this.dynamicSort(property));
            return this;
        } catch (error) {
            console.log(error);
        }
    }
    private dynamicSort(property:string):Function {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }  
    private neededSelectData(params:any[]):any[] {
        let data_params = [];
        if(params.length > 0){
            for(let j of this.sl_obj){
                for(let z of params){
                    data_params.push(j[z])                    
                }
            }
        }
        else{
            data_params = this.sl_obj;
        }
        return data_params;
    }
    private errorCode(code:number):void {
        let error = [
            "Invalid Parameter: Argument is not an Array", 
            "Invalid Parameter: You must set asc or desc as Argument!",
            "Invalid Parameter: You must pass minimum of one Argument!"
        ];
        console.log("MinSQLJS ERROR: " + error[code]);
    }
}
let msj_lib = new MinSQLJS();
let _  = (array:any)=>{ return msj_lib.selectCurrentObj(array)};
let mj = _;

