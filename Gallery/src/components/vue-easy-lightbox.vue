<vue-easy-lightbox ...>
<template v-slot:prev-btn="{ prev }">
  <button @click="prev">show the prev</button>
</template>

<template v-slot:next-btn="{ next }">
  <button @click="next">show the next</button>
</template>

<template v-slot:close-btn="{ close }">
  <button @click="close">close lightbox</button>
</template>

<template v-slot:toolbar="{ toolbarMethods }">
  <button @click="toolbarMethods.zoomIn">zoom in</button>
  <button @click="toolbarMethods.zoomOut">zoom out</button>
  <button @click="toolbarMethods.rotateLeft">Anticlockwise rotation</button>
  <button @click="toolbarMethods.rotateRight">clockwise rotation</button>
</template>
</vue-easy-lightbox>