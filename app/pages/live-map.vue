<script setup>
import { ref } from 'vue'

const zoom = ref(3)
const center = ref([37.0, 30.0]) // Center between Europe & South Asia

// Travel data
const coords = [
  { name: "Malta", lat: 35.9, lon: 14.5, days: 1 },
  { name: "Italy", lat: 41.9, lon: 12.6, days: 55 },
  { name: "Vatican", lat: 41.9, lon: 12.45, days: 2 },
  { name: "San Marino", lat: 43.9, lon: 12.45, days: 2 },
  { name: "Slovenia", lat: 46.1, lon: 14.8, days: 11 },
  { name: "Croatia", lat: 45.1, lon: 15.2, days: 7 },
  { name: "Bosnia and Herzegovina", lat: 43.9, lon: 17.7, days: 21 },
  { name: "Serbia", lat: 44.8, lon: 20.5, days: 14 },
  { name: "Kosovo", lat: 42.6, lon: 21.0, days: 7 },
  { name: "Montenegro", lat: 42.7, lon: 19.3, days: 8 },
  { name: "Albania", lat: 41.3, lon: 19.8, days: 12 },
  { name: "North Macedonia", lat: 41.6, lon: 21.7, days: 12 },
  { name: "Bulgaria", lat: 42.7, lon: 25.5, days: 20 },
  { name: "Greece", lat: 37.9, lon: 23.7, days: 1 },
  { name: "Turkey", lat: 39.0, lon: 35.0, days: 75 },
  { name: "Georgia", lat: 41.7, lon: 44.8, days: 23 },
  { name: "Armenia", lat: 40.2, lon: 44.5, days: 28 },
  { name: "Iran", lat: 32.4, lon: 53.7, days: 117 },
  { name: "Pakistan", lat: 30.4, lon: 69.3, days: 78 },
  { name: "India", lat: 20.6, lon: 78.9, days: 24 }
]

// Polyline path from coords
const latlngs = coords.map(c => [c.lat, c.lon])
</script>

<template>
  <div style="height:100vh; width:100vw; margin-top:65px">
    <LMap
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
    >
      <!-- Base map -->
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <!-- Travel path -->
      <LPolyline
        :lat-lngs="latlngs"
        color="red"
        :weight="4"
        :opacity="0.85"
      />

      <!-- Markers with popups -->
      <LMarker
        v-for="(c, i) in coords"
        :key="c.name"
        :lat-lng="[c.lat, c.lon]"
      >
        <LPopup>
          <b>{{ i + 1 }}. {{ c.name }}</b><br />
          Days: {{ c.days }}
        </LPopup>
      </LMarker>

      <!-- Walker icon at starting point -->
      <LMarker :lat-lng="[coords[0].lat, coords[0].lon]">
        <LPopup>Start: {{ coords[0].name }}</LPopup>
        <template #icon>
          <div class="walker-icon">🚶‍♂</div>
        </template>
      </LMarker>
    </LMap>
  </div>
</template>

<style scoped>
.walker-icon {
  font-size: 26px;
  line-height: 26px;
  transform: translate(-50%, -50%);
}
</style>
