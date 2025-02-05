'use client';

import { HtmlHTMLAttributes } from 'react';

interface IButtonProps extends HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Button(props: IButtonProps) {
  const { children, ...rest } = props;
  return (
    <div className="px-[10px] py-[5px] bg-[#333] rounded-[4px] text-white cursor-pointer" {...rest}>
      {children}
    </div>
  );
}
