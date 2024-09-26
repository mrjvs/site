export type HeadingProps = {
  children: any;
};

export function Heading(props: HeadingProps) {
  return <h1 class="text-xl">{props.children}</h1>;
}
