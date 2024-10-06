import { createSignal, onMount } from 'solid-js';

export function BackgroundGradient() {
  const [isOpen, setIsOpen] = createSignal(false);
  onMount(() => {
    setTimeout(() => setIsOpen(true), 100);
  });

  return (
    <div
      classList={{
        'absolute top-0 inset-x-0 bg-gradient-to-b from-shade-550 to-transparent h-[300px] pointer-events-none opacity-0 transition-opacity duration-[2s]':
          true,
        'opacity-100': isOpen(),
      }}
    />
  );
}
