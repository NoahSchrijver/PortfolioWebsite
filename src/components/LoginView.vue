<template>
  <div
    ref="loginDiv"
    class="pipboy-login"
    tabindex="0"
    @click="focusDivAndProceed"
    @keydown.enter="proceed"
  >
    <!-- Console output linksboven -->
    <div class="console-output">
      <span
        v-for="(line, idx) in fakeConsoleOutput"
        :key="idx"
        class="pipboy-output"
        >{{ line }}</span
      >
    </div>
    <!-- Login prompt gecentreerd -->
    <div class="login-center">
      <pre>
<span class="pipboy-cmd">{{ displayedLogin }}</span><span v-if="!proceeding" class="pipboy-blink">_</span>
<span v-if="proceeding && !accessDone" class="pipboy-output">{{ displayedAccess }}<span class="pipboy-blink">_</span></span>
<span v-if="accessDone" class="pipboy-output">{{ accessText }}</span>
      </pre>
      <div v-if="!proceeding" class="pipboy-hint">(Klik of druk op ENTER)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      loginText: "LOGIN USER",
      displayedLogin: "",
      accessText: "ACCESS GRANTED",
      displayedAccess: "",
      proceeding: false,
      accessDone: false,
      fakeLines: [
        "CONNECTING TO SERVER...",
        "AUTHORIZING USER...",
        "LOADING MODULES...",
        "BYTES RECEIVED: 2048",
        "DECRYPTING DATA...",
        "ACCESSING DATABASE...",
        "VALIDATING CREDENTIALS...",
        "GRANTING PERMISSIONS...",
      ],
      fakeConsoleOutput: [],
    };
  },
  mounted() {
    this.typeLogin();
    window.addEventListener("keydown", this.handleGlobalKeydown);
    this.$nextTick(() => {
      this.$refs.loginDiv.focus();
    });
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleGlobalKeydown);
  },
  methods: {
    typeLogin() {
      let i = 0;
      const interval = setInterval(() => {
        this.displayedLogin += this.loginText[i];
        i++;
        if (i >= this.loginText.length) {
          clearInterval(interval);
        }
      }, 60);
    },
    async startLoginSequence() {
      this.proceeding = true;
      this.fakeConsoleOutput = [];
      // Typ fake console lines één voor één
      for (let line of this.fakeLines) {
        await this.typeFakeLine(line);
      }
      // Daarna typ je ACCESS GRANTED
      this.typeAccessGranted();
    },
    typeFakeLine(line) {
      return new Promise((resolve) => {
        let i = 0;
        let currentLine = "";
        this.fakeConsoleOutput.push("");
        const lineIdx = this.fakeConsoleOutput.length - 1;
        const interval = setInterval(() => {
          currentLine += line[i];
          i++;
          this.fakeConsoleOutput[lineIdx] = currentLine; // <-- fix
          if (i >= line.length) {
            clearInterval(interval);
            this.fakeConsoleOutput[lineIdx] = line; // <-- fix
            setTimeout(resolve, 200 + Math.random() * 300);
          }
        }, 18 + Math.random() * 20);
      });
    },
    typeAccessGranted() {
      let i = 0;
      this.displayedAccess = "";
      this.accessDone = false;
      const interval = setInterval(() => {
        this.displayedAccess += this.accessText[i];
        i++;
        if (i >= this.accessText.length) {
          clearInterval(interval);
          this.accessDone = true;
          setTimeout(() => {
            this.$router.push("/home");
          }, 600);
        }
      }, 50);
    },
    proceed() {
      if (!this.proceeding && this.displayedLogin === this.loginText) {
        this.startLoginSequence();
      }
    },
    focusDivAndProceed() {
      this.$refs.loginDiv.focus();
      this.proceed();
    },
    handleGlobalKeydown(e) {
      if (
        e.key === "Enter" &&
        !this.proceeding &&
        this.displayedLogin === this.loginText
      ) {
        this.startLoginSequence();
      }
    },
  },
};
</script>

<style scoped>
.pipboy-login {
  outline: none;
  cursor: pointer;
  user-select: none;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: transparent;
}

.console-output {
  position: absolute;
  top: 2vh;
  left: 2vw;
  width: 40vw;
  min-width: 250px;
  pointer-events: none;
  z-index: 1;
  text-align: left;
}

.login-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  z-index: 2;
}

pre {
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  font-family: "Share Tech Mono", "Consolas", monospace;
}

.pipboy-cmd {
  color: #7fff7f;
  font-weight: bold;
}
.pipboy-output {
  color: #baffba;
  white-space: pre;
  display: block;
}
.pipboy-blink {
  animation: pipboy-cursor 1s steps(1) infinite;
}
.pipboy-hint {
  color: #baffba;
  margin-top: 1em;
  font-size: 1em;
  opacity: 0.7;
}
@keyframes pipboy-cursor {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
</style>
