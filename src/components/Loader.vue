<template>
  <div class="coffee"></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style>
.coffee{
  width: 20px;
  height: 24px;
  border: 1px rgba(255,255,255,1) solid;
  border-radius: 0px 0px 5px 5px;
  position: relative;
  margin: 36px auto;
}
.coffee::after, .coffee::before{
  position: absolute;
  content: "";
}
.coffee::after{
  width: 5px;
  height: 12px;
  border: 1px #fff solid;
  border-left: none;
  border-radius: 0px 20px 20px 0px;
  left: 20px;
}
.coffee::before{
  width: 1px;
  height: 6px;
  background-color: rgba(255,255,255,1);
  top: -10px;
  left: 4px;
  box-shadow: 5px 0px 0px 0px rgba(255,255,255,1),
              5px -5px 0px 0px rgba(255,255,255,1),
              10px 0px 0px 0px rgba(255,255,255,1);
  animation: steam 1s linear infinite alternate;
}

@keyframes steam{
  0%{height: 0px}
  100%{height: 6px;}            
}
</style>