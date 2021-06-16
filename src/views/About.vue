<template>
  <div class="about">
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.senderId }}: {{ message.content }}
      </li>
    </ul>
    <v-text-field label="User id" v-model="userId"></v-text-field>
    <v-text-field label="Content" v-model="content"></v-text-field>
    <v-btn @click="send(userId, content)">SEND</v-btn>
  </div>
</template>

<script>
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnectionState
} from "@microsoft/signalr";

const connection = new HubConnectionBuilder()
  .withUrl("https://localhost:5001/hubs/chat", {
    accessTokenFactory() {
      return localStorage.getItem("accessToken");
    }
  })
  .configureLogging(LogLevel)
  .build();

export default {
  data: () => ({
    userId: "",
    content: "",
    messages: []
  }),
  created() {
    connection.on("ReplaceMessage", chat => {
      this.messages = [...this.messages, chat];
    });
    connection.on("ReceiveMessage", chat => {
      this.messages = [...this.messages, chat];
    });

    connection.start();
  },
  methods: {
    send(userId, content) {
      if (connection.state === HubConnectionState.Connected) {
        connection.invoke("SendMessageTo", userId, content);
      } else {
        connection.start().then(() => {
          connection.invoke("SendMessageTo", userId, content);
        });
      }
    }
  }
};
</script>
