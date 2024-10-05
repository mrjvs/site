import { MdiGithub, MingcuteMailFill } from './icon-list';
import { Dynamic } from 'solid-js/web';

export const iconMap = {
  email: MingcuteMailFill,
  github: MdiGithub,
} as const;

export type IconName = keyof typeof iconMap;

export type IconProps = {
  icon: IconName;
  class?: string;
};

export function Icon(props: IconProps) {
  return (
    <span class={props.class}>
      <Dynamic component={iconMap[props.icon]} />
    </span>
  );
}
