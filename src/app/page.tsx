'use client';

import Button from '@/components/button';
import { useModal } from '@/hooks/useModal';

export default function Home() {
  const { alert } = useModal();

  const openModal = () => {
    alert({
      title: 'Modal - 1',
      content: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero'
    });
  };

  const openModalMultiple = () => {
    alert({
      title: 'Modal - 1',
      content: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero'
    });
    alert({
      title: 'Modal - 2',
      content: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero'
    });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-[10px] p-[20px]">
      <Button onClick={() => openModal()}>Open Modal</Button>
      <Button onClick={() => openModalMultiple()}>Open Modal Multiple</Button>
    </div>
  );
}
