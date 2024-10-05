import { SocialLink } from '~/components/typography/SocialLink';

export function FooterView() {
  return (
    <>
      <footer class="flex py-6 items-center justify-center">
        <div class="flex items-center gap-8">
          <SocialLink icon="email" to="mailto:hello@mrjvs.com">
            hello@mrjvs.com
          </SocialLink>
          <SocialLink icon="github" to="https://github.com/mrjvs">
            mrjvs
          </SocialLink>
        </div>
      </footer>
    </>
  );
}
