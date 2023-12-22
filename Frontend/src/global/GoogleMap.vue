<template>
  <div
    ref="mapContainer"
    style="height: 500px"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import useLocationProperties from '../scripts/Googlemap/map';
const { lat: latitude, long: longitude } = useLocationProperties();
console.log(latitude);

export default {
  setup() {
    const mapContainer = ref(null);
    let map;

    onMounted(() => {
      /*Load the Google Maps JavaScript API*/
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCxgFXXZZxArswlgzfwPEC59rNP1cD7N44&callback=initMap`;
      script.defer = true;
      script.async = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    });

    function initMap() {
      // Create a new Google Map instance
      map = new google.maps.Map(mapContainer.value, {
        center: { lat: latitude.value, lng: longitude.value },
        zoom: 12,
      });
    }

    return {
      mapContainer,
    };
  },
};
</script>
