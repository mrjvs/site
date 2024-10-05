import { JSXElement, Show } from 'solid-js';
import { Container } from './Container';

export type ContentProps = {
  navigation?: JSXElement;
  footer?: JSXElement;
  children?: JSXElement;
};

export function Content(props: ContentProps) {
  return (
    <>
      <Show when={props.navigation}>
        <Container>{props.navigation}</Container>
      </Show>
      <Container>
        <div class="mt-48">{props.children}</div>
      </Container>
      <Show when={props.footer}>
        <Container>
          <div class="mt-48">{props.footer}</div>
        </Container>
      </Show>
    </>
  );
}
