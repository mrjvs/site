import { JSXElement } from 'solid-js';

export type StampedCardProps = {
  children?: JSXElement;
};

export function StampedCard(props: StampedCardProps) {
  return (
    <div class="mb-4 relative group/card transition-transform hover:-translate-y-1 overflow-hidden bg-shade-600 rounded-xl p-7">
      <div class="absolute top-0 inset-x-0 bg-gradient-to-b group-hover/card:opacity-100 opacity-0 transition-opacity duration-300 from-shade-550 to-transparent h-24 pointer-events-none" />
      <div class="absolute top-4 sm:top-6 right-4 sm:right-6 grid gap-2 grid-cols-2 grid-rows-2">
        <div class="h-1 w-1 bg-shade-700" />
        <div class="h-1 w-1 bg-primary-100" />
        <div class="h-1 w-1 col-start-2 bg-shade-700" />
      </div>
      <div class="relative">{props.children}</div>
    </div>
  );
}
