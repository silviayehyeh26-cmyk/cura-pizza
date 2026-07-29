/*
================================
CURA Developer Console
Version 1.0
================================
*/

const CURA = {

    debug: {
        collider: false,
        fps: false,
        camera: false,
        grid: false
    },

    version: "Engine v1.0",

    room: null,

    help() {

        console.clear();

        console.log(`
============================

CURA Developer Console

Version : ${this.version}

============================

CURA.help()

CURA.debugInfo()

CURA.collider()

CURA.camera()

CURA.version

============================
`);

    },



    debugInfo() {

        console.table(this.debug);

    },



    collider() {

        this.debug.collider =
        !this.debug.collider;

        if(window.__CURA_COLLIDER__){

            window.__CURA_COLLIDER__(
                this.debug.collider
            );

        }

        console.log(
            "Collider :",
            this.debug.collider
        );

    },



    camera() {

        if(!window.camera){

            console.warn(
                "Camera not found."
            );

            return;

        }

        console.table({

            x:window.camera.position.x,

            y:window.camera.position.y,

            z:window.camera.position.z

        });

    }

};


window.CURA = CURA;

console.log(
"%cCURA Engine Loaded",
"color:#d19b62;font-size:16px;font-weight:bold;"
);

console.log(
"Type CURA.help()"
);