import { JSXElement } from 'solid-js';

export type ContainerProps = {
  children?: JSXElement;
};

export type BreakoutProps = {
  children?: JSXElement;
};

export function Container(props: ContainerProps) {
  return <div class="max-w-[600px] px-8 w-full mx-auto">{props.children}</div>;
}

export function Breakout(props: BreakoutProps) {
  return <div class="-mx-4">{props.children}</div>;
}
