<template>
  <v-bottom-nav :value="true" fixed>
    <v-btn
      color="amber"
      flat
      v-for="(item, i) in items"
      :key="i"
      router
      :to="item.to"
    >
      <span v-text="item.title"></span>
      <v-icon v-html="item.icon"></v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: "menu-app",
  data() {
    return {
      items: [
        { icon: "home", title: "Início", to: "/" },
        { icon: "access_time", title: "Meus Horários", to: "/horarios" },
        { icon: "account_circle", title: "Perfil", to: "/perfil" }
      ]
    };
  },
  mounted() {}
};
</script>
