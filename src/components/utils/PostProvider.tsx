import { BuiltinLanguage, createHighlighter } from 'shiki';
import {
  createEffect,
  createResource,
  createSignal,
  JSXElement,
  Match,
  Show,
  Switch,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { MDXProvider } from 'solid-marked';
import { Heading, HeroHeading } from '../typography/Heading';
import { Paragraph } from '../typography/Paragraph';
import { Link } from '../typography/Link';

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
            <Switch>
              <Match when={props.depth === 1}>
                <HeroHeading>{props.children}</HeroHeading>
              </Match>
              <Match when={props.depth > 1}>
                <Heading>{props.children}</Heading>
              </Match>
            </Switch>
          );
        },
        Paragraph(props): JSXElement {
          return <Paragraph>{props.children}</Paragraph>;
        },
        Root(props): JSXElement {
          return <div>{props.children}</div>;
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
          return <Link to={props.url}>{props.children}</Link>;
        },
      }}
    >
      {props.children}
    </MDXProvider>
  );
}
