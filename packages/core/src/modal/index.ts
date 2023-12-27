import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Modal from './src/index.vue'

export const InModal: SFCWithInstall<typeof Modal> = withInstall(
  Modal,
  'InModal'
)
InModal.name = 'InModal'
export default InModal
export * from './src/modal'
export type ModalInstance = InstanceType<typeof Modal>
