<template>
  <Window title="Vue Kanban" width="400" height="100" margined v-on:close="exit">
    <Group title="Group" margined>
      <Box vertical padded>
        <Text>{{ msg }}</Text>
        <Button v-on:click="reverse">Reverse</Button>
        <Checkbox v-model="checkboxState">Checkbox label</Checkbox>
        <Combobox v-bind:items="[ 'Option 1', 'Option 2', 'Option 3' ]" v-model="text"/>
        <DatePicker/>
        <DateTimePicker/>
        <DropdownList v-bind:items="[ 'Option 1', 'Option 2', 'Option 3' ]" v-model="dselected"/>
        <ProgressBar v-bind:value="progress"/>
        <RadioButtons v-bind:items="[ 'Option 1', 'Option 2', 'Option 3' ]" v-model="rselected"/>
        <Separator vertical/>
        <Slider min="0" max="100" v-model="slider"/>
        <Spinbox min="0" max="100" v-model="spinbox"/>
        <TimePicker />
      </Box>
    </Group>
  </Window>
</template>

<script>
import libui from 'libui-node';

export default {
  data() {
    return {
      msg: 'First Desktop App Using Vuido',
      checkboxState: false,
      text: '',
      dselected: 'Option 1',
      progress: 50,
      rselected: 'Option 3',
      slider: 20,
      spinbox: 40
    };
  },
  methods: {
    reverse() {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('');
    },
    exit() {
      libui.stopLoop();
    }
  }
};
</script>
