import mailPreview from "../cmps/mail-preview.cmp.js";

export default {
  props: ["emails"],
  template: `
 <section class="email-list">
        <ul>
            <li v-for="email in emails" :key="email.id" class="email-preview-container" 
            @click="select(email)">
                <mail-preview :email="email"/>
                <div class="actions">
                </div>
            </li>
        </ul>
    </section>
`,
  components: {
    mailPreview,
  },

  data() {
    return {};
  },
  methods: {
    select(email) {
      this.$emit("selected", email);
    },
  },
  computed: {},
};
