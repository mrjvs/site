import { Container } from './Container';

export type ContentProps = {
  navigation: any;
  children: any;
};

export function Content(props: ContentProps) {
  const nav = () => props.navigation ?? null;

  return (
    <>
      <Container>{nav()}</Container>
      <Container>{props.children}</Container>
    </>
  );
}
