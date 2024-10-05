import { JSXElement } from 'solid-js';
import { Icon } from './Icon';

export type LinkProps = {
  children?: JSXElement;
  class?: string;
  to?: string;
};

export function Link(props: LinkProps) {
  return (
    <a
      href={props.to ?? '#'}
      classList={{
        ['text-sm flex group font-semibold items-center text-primary-100 transition-colors hover:underline']:
          true,
        [props.class ?? '']: true,
      }}
    >
      <span class="mr-1">{props.children}</span>
      <span class="text-lg transition-transform duration-200 group-hover:rotate-45 group-hover:scale-105 group-active:translate-x-0.5">
        <Icon icon="link" />
      </span>
    </a>
  );
}
