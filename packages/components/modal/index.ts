import { withInstall } from '../install'
import Modal from './src/index.vue'

export const FnModal = withInstall(Modal, 'FnModal')
FnModal.name = 'FnModal'
export default FnModal
export * from './src/modal'
export type ModalInstance = InstanceType<typeof Modal>
