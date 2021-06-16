<template>
  <div>
    <quill-editor v-model="data" class="editor" ref="myTextEditor" />
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
  name: "vWysiwyg",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    data: ""
  }),
  watch: {
    data(val) {
      this.$emit("onChange", val);
    }
  }
};
</script>

<style lang="scss">
.editor {
  height: 20rem;
  padding-bottom: 35px;
  .ql-container {
    background: #fff;
  }
}
</style>
