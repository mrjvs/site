import { JSXElement } from 'solid-js';

export type ParagraphProps = {
  children?: JSXElement;
  class?: string;
  noSpacing?: boolean;
};

export function Paragraph(props: ParagraphProps) {
  return (
    <p
      classList={{
        'text-sm text-shade-400 leading-relaxed': true,
        'mb-4': !props.noSpacing,
        [props.class ?? '']: true,
      }}
    >
      {props.children}
    </p>
  );
}
