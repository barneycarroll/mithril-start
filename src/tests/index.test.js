var o = require('mithril/ospec/ospec')

o("addition", function() {
    o(1 + 1).equals(2)
})
o("subtraction", function() {
    o(1 - 1).notEquals(2)
})

o.spec('math', function () {
  o('addition works', function () {
    o(8).equals(10)
  })
})
