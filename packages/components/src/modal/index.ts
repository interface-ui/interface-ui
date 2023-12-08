import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Modal from './src/index.vue'

export const FnModal: SFCWithInstall<typeof Modal> = withInstall(
  Modal,
  'FnModal'
)
FnModal.name = 'FnModal'
export default FnModal
export * from './src/modal'
export type ModalInstance = InstanceType<typeof Modal>
