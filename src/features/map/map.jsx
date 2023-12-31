import { useEffect, useState, useRef } from 'react'

const Map = () => {
  const [hasError, setHasError] = useState()
  const mapRef = useRef(null)

  useEffect(() => {
    // prettier-ignore
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyCgr2ihChBBZI3HAnEObFCXknfhquiD1zM", v: "weekly"})

    async function initMap() {
      try {
        // My location
        const myLocation = { lat: 44.272558, lng: -121.174278 }
        // Request needed libraries.
        const { Map } = await google.maps.importLibrary('maps')
        const { AdvancedMarkerElement } = await google.maps.importLibrary(
          'marker'
        )
        // The map, centered at My location
        let map = new Map(mapRef.current, {
          zoom: 12,
          center: myLocation,
          disableDefaultUI: true,
          mapId: 'eb6f7feab1c328bb',
        })
        // The marker, positioned at My location
        const marker = new AdvancedMarkerElement({
          map: map,
          position: myLocation,
          title: 'Redmond Oregon',
        })
      } catch (e) {
        setHasError(e.message)
      }
    }
    initMap()
  })

  return !hasError && <div id='map' ref={mapRef}></div>
}

export default Map
