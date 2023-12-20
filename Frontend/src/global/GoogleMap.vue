<template>
  <div
    ref="mapContainer"
    style="height: 400px"></div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const mapContainer = ref(null);
    let map; // variable to store the Google Map instance

    onMounted(() => {
      // Load the Google Maps JavaScript API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCxgFXXZZxArswlgzfwPEC59rNP1cD7N44&callback=initMap`;
      script.defer = true;
      script.async = true;
      window.initMap = initMap; // Callback function when the script is loaded
      document.head.appendChild(script);
    });

    function initMap() {
      // Create a new Google Map instance
      map = new google.maps.Map(mapContainer.value, {
        center: { lat: 37.7749, lng: -122.4194 }, // Initial map center (San Francisco, for example)
        zoom: 12, // Initial zoom level
      });
    }

    return {
      mapContainer,
    };
  },
};
</script>
