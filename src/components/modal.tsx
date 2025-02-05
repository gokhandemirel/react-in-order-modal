'use client';

import Button from '@/components/button';

interface IModalProps {
  title?: string;
  content?: string;
  onClose?: () => void;
}

export default function Modal({ title, content, onClose }: IModalProps) {
  return (
    <div className="grid items-center justify-center w-full min-h-screen bg-[#444]/[0.5] fixed left-0 top-0">
      <div className="flex flex-col gap-[10px] w-[400px] p-[20px] bg-white rounded-[6px]">
        <div className="font-semibold">{title}</div>
        <div>{content}</div>
        <div className="flex justify-end">
          <Button onClick={onClose}>Kapat</Button>
        </div>
      </div>
    </div>
  );
}
