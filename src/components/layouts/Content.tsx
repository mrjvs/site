import { JSXElement, Show } from 'solid-js';
import { Container } from './Container';

export type ContentProps = {
  navigation?: JSXElement;
  footer?: JSXElement;
  children?: JSXElement;
};

export function Content(props: ContentProps) {
  return (
    <div class="grid grid-cols-1 grid-rows-[auto,1fr,auto] min-h-screen">
      <div>
        <Show when={props.navigation}>
          <Container>{props.navigation}</Container>
        </Show>
      </div>
      <Container>
        <div class="mt-48">{props.children}</div>
      </Container>
      <div>
        <Show when={props.footer}>
          <Container>
            <div class="mt-48">{props.footer}</div>
          </Container>
        </Show>
      </div>
    </div>
  );
}
