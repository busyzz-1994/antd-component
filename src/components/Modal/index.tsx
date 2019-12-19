import Modal from './Modal';
import Confirm, { ModalFunc } from './confrim';
Modal.confirm = Confirm;
Modal.info = (props: ModalFunc) => {
  Confirm({ ...props, type: 'info' });
};
export default Modal;
