<script lang='ts'>
export default {
  name: 'Message',
};
</script>

<script lang='ts' setup>
import { useMessage } from 'naive-ui';

window.$message = useMessage();
</script>

<template></template>
