<template>
  <div>
    <v-dialog
      v-model="value"
      :persistent="!closeSignal"
      width="300"
      @input="updateValue"
    >
      <v-card>
        <v-card-text>
          <div class="text-center">
            <v-progress-circular
              :size="70"
              color="primary"
              indeterminate
              v-show="!closeSignal"
            ></v-progress-circular>
          </div>
          <div v-show="closeSignal" class="text-center">
            <h2>{{ message }}</h2>
            <v-icon x-large>mdi-check-circle </v-icon>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ""
    },
    closeSignal: {
      type: Boolean,
      default: false
    },
    actionSignal: {
      type: Boolean,
      default: false
    },
    typeAlert: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isLoading: true,
      search: null,
      searched: [],
      test: "success",
      value: this.actionSignal
    };
  },
  watch: {
    actionSignal(newVal) {
      this.value = newVal;
    }
  },
  methods: {
    alertClose() {
      if (this.toggle == true) {
        this.$emit("alertClose");
      }
    },
    dialogClose() {
      this.$emit("dialogClose");
    },
    updateValue() {
      this.$emit("updateActionSignal", this.value);
    }
  },
  computed: {
    getType() {
      return this.typeAlert || this.test;
    },
    getToggle() {
      return this.toggle;
    }
  }
};
</script>

<style lang="scss"></style>
