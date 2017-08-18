# np.js
Library with obvious functions behavior. Need to teaching Javascript in school.

#1 - np.type( any );
Always return a string with first argument name of type, all another arguments ignored.

if expression strictly = null -- return 'null'
Any Number expression, except NaN and Infinity -- return 'Number'.
Any Number expression and NaN -- return 'NaN'.
Any Number expression and Infinity (include -Infinity) -- return 'Infinity'.
Any String expression (include empty one) -- return 'String'.
Any Array expression (include empty one) -- return 'Array'.
Any Object expression (include empty one) -- return 'Object'.
Any Function expression (include empty one) -- return 'Function'.
If expression return Boolean true or false -- return 'Boolean'.
if expression undefined or not exist -- return 'undefined'
Empty call np.type(); -- return 'undefined'
