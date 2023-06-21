<template>
  <form>
    <textarea
      placeholder="Type a message and press enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { timestamp } from "@/firebase/config";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");
    const message = ref("");
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  padding: 10px;
  border: 2px solid #7f7f7f;
  outline: none;
  resize: none;
  background: transparent;
}
</style>
