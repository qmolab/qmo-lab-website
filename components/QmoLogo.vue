<template>
  <div class="logoContainer">
    <div id="spinner" class="qmoLogo spinning" />
    <div class="qmoLogo textLogo" />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.spinner = document.getElementById('spinner');
      this.spinner.addEventListener('animationend', () => {
        this.spinner.className = 'qmoLogo';
      });
    },
    updated() {
      this.spinner.className = 'qmoLogo spinning';
      this.spinner.addEventListener('animationend', () => {
        this.spinner.className = 'qmoLogo';
      });
    },
  };
</script>

<style lang="scss">
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
    max-width: 226px;
    width: 100%;
    opacity: 1;
    transition: opacity 0.28s ease;
    .qmoLogo {
      position: absolute;
      top: 0;
      &#spinner {
        left: 0;
        background-position: -1px center;
        border-radius: 50%;
        width: 30%;
        background-color: $header;
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
