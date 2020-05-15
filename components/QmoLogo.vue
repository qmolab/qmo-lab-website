<template>
  <div>
    <div class="logoContainer">
      <div id="spinner" class="qmoLogo spinning" />
      <div class="qmoLogo textLogo" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QmoLogo',
    data() {
      return { spinner: undefined };
    },
    mounted() {
      this.spinner = document.getElementById('spinner');
      this.spinner.addEventListener('animationend', () => {
        this.spinner.className = 'qmoLogo';
      });
    },
    updated() {
      this.spin();
    },
    methods: {
      spin() {
        this.spinner.className = 'qmoLogo spinning';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .logoContainer {
    position: relative;
    min-width: 194px;
    width: 100%;
    .qmoLogo {
      position: absolute;
      top: 0;
      &#spinner {
        left: 0;
        background-position: -1px center;
        border-radius: 50%;
        width: 30%;
        &.spinning {
          animation: spin 1.12s ease;
        }
      }
      &.textLogo {
        right: 0;
        background-position: right center;
        width: 68%;
      }
    }
  }
</style>
