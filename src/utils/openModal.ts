// const modalRef = useRef<ModalHandle>(null);
export const openModal = (modalRef: any) => {
  if (modalRef.current) {
    modalRef.current.open();
  }
};