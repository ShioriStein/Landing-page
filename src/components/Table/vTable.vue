<template>
  <div class="employee-wrapper">
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :search="search"
      :item-class="employeeRowClass"
      loading="isLoading"
      item-key="id"
      dense
    >
      <template v-slot:top>
        <div class="employee-wrapper-titleslot">
          <h1>{{ title }}</h1>
          <v-spacer></v-spacer>
          <v-btn tile class="mr-6 add-employee-btn" @click="NewItem">
            <v-icon left> mdi-plus-box </v-icon>
            New {{ title }}
          </v-btn>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
            append-icon="mdi-magnify"
          ></v-text-field>
        </div>
      </template>
      <template v-slot:[`item.avatar`]="{ item }">
        <div class="p-2">
          <v-avatar size="36">
            <v-img :src="item.avatar"> </v-img>
          </v-avatar>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="UpdateItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="RemoveItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array
    },
    items: {
      type: Array
    },
    title: {
      type: String
    },
    hasSearch: {
      type: Boolean,
      default: false
    },
    reload: {
      type: Function
    },
    hasAction: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isLoading: true,
      search: null,
      searched: []
    };
  },
  methods: {
    UpdateItem(item) {
      this.$emit("UpdateItem", item);
    },
    RemoveItem(item) {
      this.$emit("RemoveItem", item);
    },
    NewItem() {
      this.$emit("NewItem");
    },
    employeeRowClass() {
      return "employees-row";
    }
  }
};
</script>

<style lang="scss">
.employee-row {
  height: 66px;
}
.md-field {
  max-width: 300px;
}
.employee-wrapper {
  padding: 25px;
  background-color: #f7f7e8;

  .employee-wrapper-titleslot {
    background-color: #f7f7e8 !important;

    h1 {
      color: rgba(0, 0, 0, 0.6);
    }

    background-color: #f7f7e8;
    display: flex;
    justify-content: center;
    align-items: center;

    .search {
      padding-top: 0 !important;
    }

    .add-employee-btn {
      background-color: #cfd3ce !important;
      border-radius: 15px;
    }
  }
}

.v-data-table-header {
  background-color: #c4c4c4 !important;
}
.employee-wrapper-title {
  margin-bottom: 25px;
  h1 {
    color: rgba(0, 0, 0, 0.6);
  }
  background-color: #f7f7e8;
  display: flex;
  justify-content: center;
  align-items: center;
  .search {
    padding-top: 0 !important;
  }

  .add-employee-btn {
    background-color: #cfd3ce !important;
    border-radius: 15px;
  }
}
</style>
