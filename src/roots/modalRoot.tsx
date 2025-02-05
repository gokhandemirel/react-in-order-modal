'use client';

import Modal from '@/components/modal';
import { useModal } from '@/hooks/useModal';

export const ModalRoot = () => {
  const { modals, remove } = useModal();
  return modals.map((item: any, index: number) => {
    return <Modal key={index} title={item.title} content={item.content} onClose={remove} />;
  });
};
