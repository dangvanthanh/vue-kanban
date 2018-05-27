<template>
  <Window title="Vue Kanban" width="400" height="100" margined v-on:close="exit">
    <Box horizontal padded>
      <Text>{{ msg }}</Text>
      <Button v-on:click="reverse">Reverse</Button>
    </Box>
  </Window>
</template>

<script>
import libui from 'libui-node';

export default {
  data () {
    return {
      msg: 'First Desktop App Using Vuido'
    }
  },
  methods: {
    reverse () {
      this.msg = this.msg.split('').reverse().join('');
    },
    exit() {
      libui.stopLoop();
    }
  }
}
</script>
