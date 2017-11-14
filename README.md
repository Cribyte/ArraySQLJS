# ArraySQLJS
Simple Array Administration Tool

## 1.Embed needed JS File(NodeJS or Client Side) in your project
   ### 1.1 NodeJS
         Import minsql.node.js in a directory (for example: function/minsql.node.js)
         Import by require and a variable (for example: [app.js] | var mj = require('./functions/minsql.node.js');
   ### 1.2 Client Side
         import minsql.min.js in your projects directory
         embed minsql.min.js in <script>
         (Should look like that: <script src="{PATHTOFILE}/minsql.min.js"></script>)

## 2.Have an JavaScript Array!
   Its important that u own an array. ArraySQLJS only accepts arrays!

## 3. API 
   ### 3.1 Structure
      Its simple. You just have to call the Object by _() or mj() and set behind a method.
      _(ARRAY_VAR).FUNCTION()
      mj(ARRAY_VAR.FUNCTION()
      
      For example:
         var my_array = ['Hello' , 'World'];
         _(my_array).selectConsole();
         __________________________________________
         Output: 
         Hello
         World
         
   ### 3.2 SELECT (Get Array Data)
         3.1.1 Get Array public select(...params):any[]
            _().select(); //Brings you all elements of the array
            mj().select(); //Brings you all elements of the array
            
            Example:
            _(my_array).select();
            
            Data:
            [Element1 , Element2]
            
            If your are working with an Array of objects and you like to filter properties. You might pass arguments.
            
            Example:
            var arr_of_obj = [ { name: 'Kris' , age: 19} , {name: 'Joe', age: 20} ];
            _(arr_of_obj).select();
            
            Data: 
            [{ Element1 , Element2} , { Element1, Element2}]
            Object
            
            Filtering Method Example:
            _(arr_of_obj).select('name');
            
            Data:
            [PropertyNameofObjectIndex0 , PropertyNameOfObjectIndex1]
            
            
