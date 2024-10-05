import { JSXElement, Show } from 'solid-js';

export type AvatarProps = {
  children?: JSXElement;
  hideName?: boolean;
  class?: string;
};

export function Avatar(props: AvatarProps) {
  return (
    <div
      classList={{
        ['flex items-center py-1']: true,
        [props.class ?? '']: true,
      }}
    >
      <img
        class="rounded-full h-6 w-6 mr-2"
        src="https://github.com/mrjvs.png"
        alt="mrjvs's profile picture"
      />
      <Show when={!props.hideName}>
        <p class="text-shade-400 text-sm">mrjvs</p>
      </Show>
    </div>
  );
}
