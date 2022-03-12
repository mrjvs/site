<template>
  <div class="theme-blue text-center flex justify-center items-center flex-1">
    <Container>
      <div class="max-w-sm mx-auto">
        <div v-if="error.statusCode === 404">
          <div
            class="h-12 w-12 mx-auto mb-4 text-xl rounded-full text-yellow-300 flex justify-center items-center bg-bray-500"
          >
            <Icon icon="question" />
          </div>
          <Heading size="2">Couldn't find that page</Heading>
          <Paragraph>
            What can I say? It's a hard page to write. I'll get it done some day
            though. For now all I can give you is a link back home
          </Paragraph>
          <ArrowLink to="/">Go home</ArrowLink>
        </div>
        <div v-else>
          <div
            class="h-12 w-12 mx-auto mb-4 text-xl rounded-full text-red-300 flex justify-center items-center bg-bray-500"
          >
            <Icon icon="exclamation" />
          </div>
          <Heading size="2">It seems like it broke, sorry</Heading>
          <Paragraph>
            What can I say? It's a hard page to write. I'll get it done some day
            though. For now all I can give you is a link back home
          </Paragraph>
          <ArrowLink to="/">Go home</ArrowLink>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head: {
    bodyAttrs: {
      "data-theme": "blue",
    },
  },
};
</script>
