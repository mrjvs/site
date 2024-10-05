import { JSXElement, Show } from 'solid-js';
import { Icon, IconName } from './Icon';

export type SocialLinkProps = {
  children?: JSXElement;
  class?: string;
  icon?: IconName;
  to?: string;
};

export function SocialLink(props: SocialLinkProps) {
  return (
    <a
      href={props.to ?? '#'}
      target="_blank"
      classList={{
        ['text-sm flex group items-center text-shade-400 hover:text-primary-100 transition-colors leading-relaxed']:
          true,
        [props.class ?? '']: true,
      }}
    >
      <Show when={props.icon}>
        <span class="mr-2 text-lg transition-transform duration-200 group-hover:rotate-12 group-hover:scale-105 group-active:rotate-45">
          <Icon icon={props.icon ?? 'email'} />
        </span>
      </Show>
      {props.children}
    </a>
  );
}
