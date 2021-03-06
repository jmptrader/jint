// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Arguments : (ArgumentList : ArgumentList, AssignmentExpression)
 *
 * @path ch11/11.2/11.2.4/S11.2.4_A1.4_T2.js
 * @description Return an internal list whose length is one greater than the
 * length of ArgumentList and whose items are the items of ArgumentList, in order,
 * followed at the end by GetValue(AssignmentExpression), which is the last item of
 * the new list
 */

function f_arg() {
}

//CHECK#1
try {
  f_arg(x,x=1);
  $ERROR('#1.1: function f_arg() {} f_arg(x,x=1) throw ReferenceError. Actual: ' + (f_arg(x,x=1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: function f_arg() {} f_arg(x,x=1) throw ReferenceError. Actual: ' + (e));  
  }
}

