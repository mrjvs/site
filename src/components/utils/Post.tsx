import { Heading } from '../typography/Heading';
import { Icon } from '../typography/Icon';
import { Link } from '../typography/Link';
import { Paragraph } from '../typography/Paragraph';
import { NiceDate } from './NiceDate';

export type PostExcerpt = {
  title: string;
  excerpt: string;
  url: string;
  publishDate: Date;
};

export type TinyPostProps = {
  post: PostExcerpt;
};

export type LargePostProps = {
  post: PostExcerpt;
};

export function TinyPost(props: TinyPostProps) {
  return (
    <a
      href={props.post.url}
      class="group hover:bg-shade-600 -m-4 p-4 rounded-lg active:scale-105 transition duration-100"
    >
      <article>
        <Heading noSpacing>
          <span class="flex items-center">
            {props.post.title}
            <span class="group-hover:translate-x-0 -translate-x-2 text-2xl mt-0.5 group-hover:opacity-50 opacity-0 transition duration-100">
              <Icon icon="chevronRight" />
            </span>
          </span>
        </Heading>
        <Paragraph noSpacing class="mb-3 mt-2">
          {props.post.excerpt}
        </Paragraph>
        <NiceDate date={props.post.publishDate} />
      </article>
    </a>
  );
}

export function LargePost(props: LargePostProps) {
  return (
    <article>
      <NiceDate date={props.post.publishDate} />
      <Heading noSpacing>{props.post.title}</Heading>
      <Paragraph noSpacing class="mb-3 mt-2">
        {props.post.excerpt}
      </Paragraph>
      <Link to={props.post.url}>Read post</Link>
    </article>
  );
}
