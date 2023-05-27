<script lang='ts'>
export default {
  name: 'DetailsItem',
};
</script>

<script lang='ts' setup>
import { reactive } from 'vue';
import { IDetailsItemProps } from './Details';

const itemProps = defineProps<{
  props: IDetailsItemProps
}>();

const iconStyle = reactive({
  color: itemProps.props.iconColor,
  backgroundColor: itemProps.props.iconBackgroundColor,
});
</script>

<template>
  <div id='details-item'>
    <div :style='iconStyle' class='left-icon'>
      <SymbolIcon :name='props.iconName' />
    </div>
    <div class='right-describe'>
      <span class='description'> {{ props.description }} </span>
      <br />
      <span> {{ props.value }} </span>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '../style.scss';

#details-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47.5%;
  height: 30%;
  margin-bottom: 9px;
  border-radius: $details_item_radius;
  background-color: $details_item_bg_color;

  .left-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 60%;
    border-radius: $details_item_radius;
  }

  .right-describe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    font-size: 6px;

    .description {
      color: $details_item_description_color;
    }
  }
}
</style>
