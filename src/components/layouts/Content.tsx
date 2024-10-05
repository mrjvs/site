import { JSXElement, Show } from 'solid-js';
import { Container } from './Container';

export type ContentProps = {
  navigation?: JSXElement;
  children?: JSXElement;
};

export function Content(props: ContentProps) {
  const nav = () => props.navigation ?? null;

  return (
    <>
      <Show when={props.navigation}>
        <Container>{props.navigation}</Container>
      </Show>
      <Container>
        <div class="mt-48">{props.children}</div>
      </Container>
    </>
  );
}
