import {boundBeginRequest, boundCompleteRequest, boundThrowRequest} from '../data/requests/actions'

function getJs (importStatement) {
  boundBeginRequest()
  return importStatement()
  .then((module) => {
    boundCompleteRequest()
    return module.default
  })
  .catch((err) => {
    boundThrowRequest(err)
  })
}

export {getJs}
