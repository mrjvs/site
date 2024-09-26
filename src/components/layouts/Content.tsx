import { Container } from './Container';

export type ContentProps = {
  navigation: () => any;
  children: any;
};

export function Content(props: ContentProps) {
  const Navigation = props.navigation ?? (() => <></>);

  return (
    <>
      <Container>
        <Navigation />
      </Container>
      <Container>{props.children}</Container>
    </>
  );
}
