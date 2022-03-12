<template>
  <div class="min-h-screen flex flex-col">
    <Flare />
    <Depth />
    <div class="relative flex-1 flex-col flex">
      <Container>
        <Navigation />
      </Container>
      <div class="flex-1 flex flex-col">
        <Nuxt />
      </div>
      <Container>
        <Footer />
      </Container>
    </div>
  </div>
</template>
