import React, {useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Map, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import Leaflet from 'leaflet'

export default function Home() {
 


    const image = new L.Icon({
        iconUrl: require('./markerIcon.png'),
        shadowUrl: require('./markerIcon.png'),
        iconSize:     [40, 40], // size of the icon
        shadowSize:   [40, 40], // size of the shadow
        iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
        shadowAnchor: [20, 20],  // the same for the shadow
        popupAnchor:  [0, -20]// point from which the popup should open relative to the iconAnchor
    })

    const bounds = [[0, 0], [6322,  11374]]
    const style = { height: '100%', width: '100%', margin:"0 auto" }

    return (<>
        <h1>
            This is Home Component
        </h1>
        <div
            style={{
                height :"70vh",
                width:"70vw",
                margin: "0 auto"
            }}
        >
           <MapContainer crs={L.CRS.Simple} minZoom={-4} bounds={bounds} style={style}>
        <ImageOverlay
          bounds={bounds}
          url={require("./AA6305C9.jpg")}
          
        />

        <Marker position={[2000, 4000]} icon={image}>
          <Popup>
          <div onClick={()=>{alert("clicked on villa 1")}}>
                villa 1 details
            </div>
          </Popup>
        </Marker>
        <Marker position={[5000, 6000]}>
          <Popup>
          <div onClick={()=>{alert("clicked on villa 2")}}>
                villa 2 details
            </div>
          </Popup>
        </Marker>
        <Marker position={[3500, 8000]} onClick={()=>{alert("clicked on villa 3")}}>
          <Popup>
            <div onClick={()=>{alert("clicked on villa 3")}}>
                villa 3 details
            </div>
          </Popup>
        </Marker>
      </MapContainer>
        </div>
        </>
    )
}
