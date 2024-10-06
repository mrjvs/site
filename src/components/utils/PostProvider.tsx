import { BuiltinLanguage, createHighlighter } from 'shiki';
import {
  createEffect,
  createResource,
  createSignal,
  JSXElement,
  Show,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { MDXProvider } from 'solid-marked';

export function PostProvider(props: { children: JSXElement }) {
  const [highlighter] = createResource(async () =>
    createHighlighter({
      langs: ['tsx', 'jsx', 'md', 'mdx', 'markdown', 'bash', 'js', 'ts'],
      themes: ['github-dark'],
    }),
  );
  return (
    <MDXProvider
      builtins={{
        Heading(props): JSXElement {
          return (
            <a href={`#${props.id}`}>
              <Dynamic component={`h${props.depth}`} id={props.id}>
                {props.children}
              </Dynamic>
            </a>
          );
        },
        Paragraph(props): JSXElement {
          return <p>{props.children}</p>;
        },
        Root(props): JSXElement {
          return (
            <div class="bg-white m-4 p-4 rounded-lg prose">
              {props.children}
            </div>
          );
        },
        Blockquote(props): JSXElement {
          return <blockquote>{props.children}</blockquote>;
        },
        Image(props): JSXElement {
          return (
            <img src={props.url} alt={props.alt ?? props.title ?? undefined} />
          );
        },
        Code(props): JSXElement {
          const [ref, setRef] = createSignal<HTMLPreElement | undefined>();
          createEffect(() => {
            const current = ref();
            const instance = highlighter();
            const content = props.children;
            if (current && instance && content) {
              current.innerHTML = instance.codeToHtml(content, {
                lang: (props.lang ?? undefined) as BuiltinLanguage,
                theme: 'github-dark',
              });
            }
          });
          return <div ref={setRef} lang={props.lang ?? undefined} />;
        },
        InlineCode(props): JSXElement {
          return <code>{props.children}</code>;
        },
        List(props): JSXElement {
          return (
            <Dynamic
              component={props.ordered ? 'ol' : 'ul'}
              start={props.start ?? undefined}
            >
              {props.children}
            </Dynamic>
          );
        },
        ListItem(props): JSXElement {
          return (
            <li>
              <Show when={'checked' in props} fallback={props.children}>
                <input type="checkbox" checked={props.checked ?? undefined} />
                {props.children}
              </Show>
            </li>
          );
        },
        Link(props): JSXElement {
          return (
            <a href={props.url} title={props.title ?? undefined}>
              {props.children}
            </a>
          );
        },
      }}
    >
      {props.children}
    </MDXProvider>
  );
}
