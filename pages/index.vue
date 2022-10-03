<template>
  <div class="container mx-auto">
    <Navbar />
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3">
        <Sidebar />
      </div>
      <div class="col-span-9">
        <CardSendPost />
        <CardListPost />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'authenticated',
}
</script>
