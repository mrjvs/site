export type ContainerProps = {
  children: any;
};

export function Container(props: ContainerProps) {
  return <div class="max-w-[600px] w-full mx-auto">{props.children}</div>;
}
