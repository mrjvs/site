import { JSXElement, Show } from 'solid-js';

export type HeadingProps = {
  children?: JSXElement;
  class?: string;
  subtitle?: string;
  noSpacing?: boolean;
};

export function HeroHeading(props: HeadingProps) {
  return (
    <h1
      classList={{
        ['text-3xl text-shade-300 font-bold font-display']: true,
        'mb-4 mt-2': !props.noSpacing,
        [props.class ?? '']: true,
      }}
    >
      {props.children}
      <Show when={props.subtitle}>
        <span class="text-shade-350">
          {' – '}
          {props.subtitle}
        </span>
      </Show>
    </h1>
  );
}

export function Heading(props: HeadingProps) {
  return (
    <h1
      classList={{
        ['text-lg text-shade-300 font-bold font-display']: true,
        'mb-4 mt-1': !props.noSpacing,
        [props.class ?? '']: true,
      }}
    >
      {props.children}
      <Show when={props.subtitle}>
        <span class="text-shade-350">
          {' – '}
          {props.subtitle}
        </span>
      </Show>
    </h1>
  );
}
