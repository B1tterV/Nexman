<script lang="ts" setup>

useHead({
  title: `Дизайн студия NEXMAN`,
  meta: [
    // Meta
    {
      name: "description",
      content: 'Ценим хорошие решения и людей, которые описывают мета теги.',
    },
    {
      name: "keywords",
      content: 'Студия, Дизайн CRM, Дизайн сайт, Разработка сайта, веб-студия',
    },
    // Open Graph
    {
      property: "og:title",
      content: "Дизайн студия NEXMAN",
    },
    {
      property: "og:description",
      content: 'Ценим хорошие решения и людей, которые описывают мета теги.',
    },
    {
      property: "og:image",
      content: "http://194.87.190.234/images/og-image.jpg",
    },
    {
      property: "og:url",
      content: 'http://194.87.190.234',
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Nexman",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
