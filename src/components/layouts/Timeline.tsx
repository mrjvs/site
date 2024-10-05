import { JSXElement } from 'solid-js';

export type TimelineProps = {
  children?: JSXElement;
};

export function Timeline(props: TimelineProps) {
  return (
    <div class="relative">
      <div class="absolute left-1 top-4 bottom-4 bg-shade-700 w-px" />
      <div>{props.children}</div>
    </div>
  );
}

export type TimelineBubbleProps = {
  children?: JSXElement;
  class?: string;
};

export function TimelineBubble(props: TimelineBubbleProps) {
  return (
    <div
      classList={{
        'relative mb-6': true,
        [props.class ?? '']: true,
      }}
    >
      <div class="absolute top-4 left-1 bg-gradient-to-b from-primary-100/40 to-transparent w-px h-12" />
      <div class="absolute top-4 left-[3px] bg-primary-100 rounded-full w-[3px] h-[3px]" />
      <div class="pl-5 pt-0.5">{props.children}</div>
    </div>
  );
}
