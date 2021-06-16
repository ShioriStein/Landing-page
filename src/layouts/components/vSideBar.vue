<template>
  <v-list dense nav>
    <template v-for="(item, index) in menuItems">
      <v-list-group
        class="menu-item"
        v-if="item.children"
        :key="index"
        no-action
      >
        <template v-slot:prependIcon>
          <v-icon class="menu-item-icon" v-text="item.icon" color="#fff">
          </v-icon>
        </template>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="menu-item-text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          link
          :to="child.to"
          v-for="(child, index) in item.children"
          :key="index"
          class="menu-item"
          active-class="highlighted"
          :class="child.to.name === $route.name ? 'highlighted' : ''"
        >
          <v-list-item-title class="menu-item-text">{{
            child.title
          }}</v-list-item-title>
          <v-list-item-icon class="menu-item-icon">
            <v-icon color="#fff" v-text="child.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-list-item
        class="menu-item"
        dense
        link
        :to="item.to"
        v-else
        :key="index"
        active-class="highlighted"
        :class="item.to.name === $route.name ? 'highlighted' : ''"
      >
        <v-list-item-icon class="menu-item-icon">
          <v-icon color="#fff" v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title class="menu-item-text">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import menuItems from "@/layouts/components/menuItems";
export default {
  name: "vSideBar",
  data: () => ({
    menuItems
  })
};
</script>

<style lang="scss" scoped>
.menu-item {
  min-height: 44px !important;

  &-text {
    text-align: left;
    font-size: 1.15rem !important;
    color: #fff;
    line-height: 1.2 !important;
    font-weight: 300 !important;
  }
}

.highlighted {
  background-color: #34626c !important;
}
</style>
