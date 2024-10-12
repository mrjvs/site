import { BuiltinLanguage, createHighlighter, Highlighter } from 'shiki';
import {
  createContext,
  createEffect,
  createResource,
  createSignal,
  JSXElement,
  useContext,
} from 'solid-js';

import classes from './Code.module.css';
import { Icon } from '../typography/Icon';

export type CodeblockProps = {
  content: string;
  class?: string;
  language?: string | null;
};

export type CodeblockAnnotationProps = {
  children: JSXElement;
};

export type CodeblockProviderProps = {
  children: JSXElement;
};

export const HighlighterContext = createContext<() => Highlighter | null>(
  () => null,
);

export function CodeblockProvider(props: CodeblockProviderProps) {
  const [highlighter] = createResource(async () =>
    createHighlighter({
      langs: ['tsx', 'jsx', 'md', 'mdx', 'markdown', 'bash', 'js', 'ts'],
      themes: ['github-dark'],
    }),
  );
  const getHighlighter = () => highlighter() ?? null;
  return (
    <HighlighterContext.Provider value={getHighlighter}>
      {props.children}
    </HighlighterContext.Provider>
  );
}

export function useCodeblockHighlighter() {
  return useContext(HighlighterContext);
}

export function RawCodeblock(props: CodeblockProps) {
  const highlighter = useCodeblockHighlighter();
  const [ref, setRef] = createSignal<HTMLPreElement | undefined>();
  createEffect(() => {
    const current = ref();
    const instance = highlighter();
    const content = props.content;
    if (current && instance && content) {
      current.innerHTML = instance.codeToHtml(content, {
        lang: (props.language ?? undefined) as BuiltinLanguage,
        theme: 'github-dark',
      });
    }
  });
  return (
    <div ref={setRef} class={props.class} lang={props.language ?? undefined} />
  );
}

export function Codeblock(props: CodeblockProps) {
  return (
    <RawCodeblock {...props} class={[props.class, classes.code].join(' ')} />
  );
}

export function CodeblockWarning(props: CodeblockAnnotationProps) {
  return (
    <div class="flex p-4 gap-3">
      <div class="relative">
        <div class="w-px h-48 absolute bg-shade-700 bottom-8 left-3 -translate-x-px" />
        <div class="h-6 w-6 relative bg-rose-500 text-white flex justify-center items-center rounded-full">
          <Icon icon="github" />
        </div>
      </div>
      <div class="flex-1">{props.children}</div>
    </div>
  );
}
