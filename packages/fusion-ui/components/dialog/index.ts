import { withInstall } from '../install'
import Dialog from './src/index.vue'

export const FnDialog = withInstall(Dialog, 'FnDialog')
FnDialog.name = 'FnDialog'
export default FnDialog
