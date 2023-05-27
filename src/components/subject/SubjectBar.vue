<script lang='ts'>
export default {
  name: 'SubjectBar',
};
</script>

<script lang='ts' setup>
import Subject from './Subject.vue';
import Details from './details/Details.vue';
import Score from './score/Score.vue';
</script>

<template>
  <div id='subject-bar'>
    <Subject />
    <Details />
    <Score />
  </div>
</template>

<style lang='scss' scoped>
@import './style.scss';

#subject-bar {
  width: $subject_bar_width;
}
</style>
