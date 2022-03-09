<template>
  <nav>
    <ul class="flex items-center my-8">
      <li class="mr-16">
        <slot name="brand"><NavigationBrand /></slot>
      </li>
      <slot />
    </ul>
  </nav>
</template>
