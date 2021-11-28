import React, { PropsWithChildren } from "react";
import { Modal as NextModal } from "@nextui-org/react";

interface IProps {
  visible: boolean;
  closeHandler: () => void;
}

export const Modal = (props: PropsWithChildren<IProps>) => {
  const { children, visible, closeHandler } = props;
  return (
    <NextModal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <NextModal.Body>{children}</NextModal.Body>
    </NextModal>
  );
};
