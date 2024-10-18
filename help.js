const { HTMLToJSON } = require('html-to-json-parser');
const element = '<div><ul><li>Hello <strong>World</strong></li></ul></div>';
let result = await HTMLToJSON(element, true); 