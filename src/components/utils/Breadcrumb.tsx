import { Show, For } from 'solid-js';

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

function BreadcrumbItemComp(props: BreadcrumbItem) {
  const content = () => <span class="text-sm">{props.label}</span>;

  return (
    <>
      <Show when={props.to}>
        <a
          href={props.to}
          class="text-shade-500 hover:text-primary-100 transition-colors duration-100"
        >
          {content()}
        </a>
      </Show>
      <Show when={!props.to}>
        <span class="text-shade-400">{content()}</span>
      </Show>
    </>
  );
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <div class="flex items-center mt-5">
      <For each={props.items}>
        {(item, i) => (
          <>
            <Show when={i() > 0}>
              <span class="mx-3 bg-shade-700 h-4 w-px rotate-12 block" />
            </Show>
            <BreadcrumbItemComp to={item.to} label={item.label} />
          </>
        )}
      </For>
    </div>
  );
}
