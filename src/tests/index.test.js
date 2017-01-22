import o from 'ospec'
import functionTest from '../services/function-test'

o('addition', function () {
  o(1 + 1).equals(2)
})
o('subtraction', function () {
  o(1 - 1).notEquals(2)
})

o('import works', function () {
  o(functionTest("lol")).equals("lol")
})
