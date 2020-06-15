<template>
  <div class="about">
    <div id="cesiumContainer" style="width: 100%; height:100%"></div>
  </div>
</template>
<script>
    export default {
        name: "sceium_demo",
        mounted() {
            Cesium.Ion.defaultAccessToken =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMzdkNzg4OC01OTI5LTQzNGItOWQ0Yy1jMzQ1ZGUxNjc5ZDgiLCJpZCI6Mjg5NjYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTE2OTA0NTd9.xaT1zx6Kolt6VaZNnQjyGox0yBKzYCuY8cTM4iZ26eo";
            let viewer = new Cesium.Viewer("cesiumContainer", {
                //terrainProvider: Cesium.createWorldTerrain()//此处不能加地形，否则无法显示titleset3DTileset数据，未找到原因
            });

            let tileset = viewer.scene.primitives.add(
                new Cesium.Cesium3DTileset({
                    url: Cesium.IonResource.fromAssetId(111257)
                })
            );
            tileset.readyPromise.then(() => viewer.zoomTo(tileset));

            tileset.readyPromise
                .then(function () {
                    viewer.zoomTo(tileset);

                    // Apply the default style if it exists
                    let extras = tileset.asset.extras;
                    if (
                        Cesium.defined(extras) &&
                        Cesium.defined(extras.ion) &&
                        Cesium.defined(extras.ion.defaultStyle)
                    ) {
                        tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
                    }
                })
                .otherwise(function (error) {
                    console.log(error);
                });

            // let city = viewer.scene.primitives.add(
            //   new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(3839) })
            // );
            // city.readyPromise.then(() =>
            //   viewer.zoomTo(
            //     city,
            //     new Cesium.HeadingPitchRange(
            //       0.0,
            //       -0.5,
            //       city.boundingSphere.radius / 4.0
            //     )
            //   )
            // );
        }
    };
</script>
