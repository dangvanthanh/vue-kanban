<template>
  <Window title="Vuido Kanban" width="400" height="100" margined @close="exit">
    <Group title="Tasks" margined>
      <Box padded>
        <Box horizontal padded>
          <TextInput v-model="task"/>
          <Button @click="addNote">Add Note</Button>
        </Box>

        <Box horizontal padded v-for="note in notes" :key="note.id">
            <Text>{{ note.task }}</Text>
            <TextInput v-if="note.editing" v-model="note.task"/>
            <Button @click="deteteNote(note.id)">X</Button>
        </Box>
      </Box>
    </Group>
  </Window>
</template>

<script>
import libui from 'libui-node';
import uuid from 'uuid';

export default {
  data() {
    return {
      task: '',
      notes: [
        { id: uuid.v4(), task: 'Learn Vue.js', editing: false },
        { id: uuid.v4(), task: 'Learn Desktop App with Vuido', editing: false }
      ]
    };
  },
  methods: {
    addNote() {
      this.notes.push({
        id: uuid.v4(),
        task: this.task
      });

      this.task = '';
    },
    deteteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
    },
    exit() {
      libui.stopLoop();
    }
  }
};
</script>
