<template>
  <Window title="Vue Kanban" width="400" height="100" margined @close="exit">
    <Group title="Group" margined>
      <Box vertical padded>
        <Text>{{ msg }}</Text>
        <Button @click="reverse">Reverse</Button>
        <Checkbox v-model="checkboxState">Checkbox label</Checkbox>
        <Combobox :items="[ 'Option 1', 'Option 2', 'Option 3' ]" v-model="text"/>
        <DatePicker/>
        <DateTimePicker/>
        <DropdownList :items="[ 'Option 1', 'Option 2', 'Option 3' ]" v-model="dselected"/>
        <ProgressBar :value="progress"/>
        <RadioButtons :items="[ 'Option 1', 'Option 2', 'Option 3' ]" v-model="rselected"/>
        <Separator horizontal/>
        <Button @click="increase">Increase</Button>
        <Button @click="decrease">Decrease</Button>
        <Text>{{ slider }}</Text>
        <Slider min="0" max="100" v-model="slider"/>
        <Spinbox min="0" max="100" v-model="spinbox"/>
        <TimePicker />
        <Separator horizontal/>
        <Text>Battery Metter</Text>
        <ProgressBar :value="batteryPercent"/>
        <Text>{{ batteryPercent }}%</Text>
        <Text v-if="batteryIsCharging">Charging</Text>
        <Text v-else>Not Charging</Text>
        <Text>Cycle count: {{ batteryCycle }}</Text>
        <Text>{{ batteryUpdateInfo }}</Text>
      </Box>
    </Group>
  </Window>
</template>

<script>
import libui from 'libui-node';
import si from 'systeminformation';

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
      spinbox: 40,
      batteryCycle: 0,
      batteryPercent: 0,
      batteryIsCharging: false,
      batteryUpdateInfo: false
    };
  },
  mounted() {
    this.updateDataBattery();
    this.$options.interval = setInterval(this.updateDataBattery, 10000);
  },
  beforeDestroy() {
    clearTimeout(this.$options.timeout);
    clearInterval(this.$options.interval);
  },
  methods: {
    updateDataBattery() {
      si.battery(data => {
        this.batteryUpdateInfo = false;
        this.batteryPercent = data.percent;
        this.batteryIsCharging = data.ischarging;
        this.batteryCycle = data.cyclecount;

        this.$options.timeout = setTimeout(() => {
          this.batteryUpdateInfo = true;
        }, 1000);
      });
    },
    reverse() {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('');
    },
    increase() {
      if (this.slider < 100) {
        this.slider++;
      }
    },
    decrease() {
      if (this.slider != 0) {
        this.slider--;
      }
    },
    exit() {
      libui.stopLoop();
    }
  }
};
</script>
