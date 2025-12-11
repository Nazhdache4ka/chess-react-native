import { ModalCompoundProvider } from './modal-context';
import {
  ModalRoot,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalTrigger,
} from './modal-components';

export const ModalCompound = Object.assign(ModalCompoundProvider, {
  ModalRoot,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalTrigger,
});
