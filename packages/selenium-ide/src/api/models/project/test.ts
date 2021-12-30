import { TestShape } from '@seleniumhq/side-model'
import loadingID from 'api/constants/loadingID'
import command from './command'

export type Shape = TestShape
const test: TestShape = {
  id: loadingID,
  name: '',
  commands: [command],
}

export default test
