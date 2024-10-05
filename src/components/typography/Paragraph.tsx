import { JSXElement } from 'solid-js';

export type ParagraphProps = {
  children?: JSXElement;
  class?: string;
};

export function Paragraph(props: ParagraphProps) {
  return (
    <p
      classList={{
        ['text-sm text-shade-400 leading-relaxed']: true,
        [props.class ?? '']: true,
      }}
    >
      {props.children}
    </p>
  );
}
