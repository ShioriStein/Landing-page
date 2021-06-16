<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        {{ time }}
        <v-icon small class="ml-3 mr-1">{{ status.icon }}</v-icon>
        {{ status.title }}
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <div class="d-flex justify-space-between align-center">
              <v-btn
                :disabled="checkInDisabled"
                @click="checkIn"
                min-width="130"
              >
                <v-icon small class="mr-2">mdi-arrow-right-drop-circle</v-icon>
                Check In
              </v-btn>
              <v-btn
                :disabled="checkOutDisabled"
                @click="checkOut"
                min-width="130"
              >
                <v-icon small class="mr-2">mdi-stop-circle</v-icon>
                Check Out
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-textarea
              v-model="dateStatus.summary"
              hide-details
              label="Summary"
              outlined
            ></v-textarea>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text @click="menu = false">
          Cancel
        </v-btn>
        <v-btn
          :disabled="!dateStatus.summary"
          color="primary"
          text
          @click="updateSummary(dateStatus.summary)"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import Moment from "moment";
import { mapActions } from "vuex";

export default {
  name: "vUserTime",
  data: () => ({
    time: "",
    menu: false
  }),
  computed: {
    dateStatus: {
      get() {
        return this.$store.state.userTimes.dateStatus;
      },
      set(val) {
        this.$store.state.userTimes.dateStatus = val;
      }
    },
    status() {
      const { checkIn, checkOut } = this.dateStatus;
      return {
        icon: checkOut
          ? "mdi-stop"
          : !checkIn
          ? "mdi-arrow-right-drop-circle"
          : "mdi-stop-circle",
        title: checkOut ? "Check out" : !checkIn ? "Check in" : "Working"
      };
    },
    checkInDisabled() {
      const { checkIn } = this.dateStatus;
      return !!checkIn;
    },
    checkOutDisabled() {
      const { checkOut } = this.dateStatus;
      return !!checkOut;
    }
  },
  created() {
    this.getForDate().then(res => {
      const { data } = res.data;
      this.dateStatus = data;
    });
  },
  mounted() {
    this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
  },
  beforeDestroy() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    ...mapActions("userTimes", [
      "getForDate",
      "checkIn",
      "checkOut",
      "updateSummary"
    ]),
    updateDateTime() {
      this.time = Moment().format("HH:mm:ss");
      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    }
  }
};
</script>

<style scoped></style>
