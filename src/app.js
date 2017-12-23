var app = angular.module('scConfig', ['ngMaterial', 'ngSanitize']);

app.controller('mainCtrl', function ($scope, $mdDialog) {

    $scope.presets = {};

    /* Defines a few presets */
    $scope.presets.ultra = {
        "preset":3,
        "screen":{
            "mode":"borderless",
            "resolution":{
                "preset":"1920x1080",
                "custom":{
                    "x":undefined,
                    "y":undefined
                }
            },
            "maxfps":60,
            "vsync":true,
            "fov":80,
            "mouse":{
                "acceleration":0,
                "smoothing":0
            }
        },
        "graphics":{
            "texturequality":"4096",
            "shadow":{
                "quality":"5",
                "blur":0.1
            },
            "ssdo":"2",
            "antialiasing":"3",
            "anisotropicfilter":"16",
            "filter":{
                "sharpness":0.4,
                "motionblur":0,
                "depthoffield":0.4,
                "radialblur":0,
                "hdr":{
                    "brightness":0,
                    "bloom":0
                },
                "chromaticaberration":0,
                "colorgrading":true
            },
            "hud":{
                "headbobbing":0
            },
            "reflections":"3"
        },
        "advanced":{
            "tessellation":{
                "quality":20,
                "prerendering":true,
                "hardwarerendering":true
            },
            "lod":"40",
            "multicore":true,
            "physicsgpu":"1"
        },
        "experimental":{
            "multithreading":{
                "physicthreads":"default",
                "navigation":"default",
                "particle":"default",
                "subobject_mesh":"default",
                "threadedwhileloading":"default",
                "jobsystem":"default"
            },
            "cores":{
                "mainthread":"default",
                "physicsthread":"default",
                "iothread":"default"
            },
            "shadowcaching":"default",
            "silhoutte":"default",
            "multigpu":"default"
        }
    };

    $scope.presets.veryhigh =  {
        "preset":2,
        "screen":{
            "mode":"borderless",
            "resolution":{
                "preset":"1920x1080",
                "custom":{
                    "x":undefined,
                    "y":undefined
                }
            },
            "maxfps":60,
            "vsync":true,
            "fov":80,
            "mouse":{
                "acceleration":0,
                "smoothing":0
            }
        },
        "graphics":{
            "texturequality":"2048",
            "shadow":{
                "quality":"4",
                "blur":0.3
            },
            "ssdo":"1",
            "antialiasing":"2",
            "anisotropicfilter":"16",
            "filter":{
                "sharpness":0.4,
                "motionblur":0,
                "depthoffield":0.4,
                "radialblur":0,
                "hdr":{
                    "brightness":0,
                    "bloom":0
                },
                "chromaticaberration":0,
                "colorgrading":true
            },
            "hud":{
                "headbobbing":0
            },
            "reflections":"2"
        },
        "advanced":{
            "tessellation":{
                "quality":15,
                "prerendering":false,
                "hardwarerendering":true
            },
            "lod":"20",
            "multicore":true,
            "physicsgpu":"1"
        },
        "experimental":{
            "multithreading":{
                "physicthreads":"default",
                "navigation":"default",
                "particle":"default",
                "subobject_mesh":"default",
                "threadedwhileloading":"default",
                "jobsystem":"default"
            },
            "cores":{
                "mainthread":"default",
                "physicsthread":"default",
                "iothread":"default"
            },
            "shadowcaching":"default",
            "silhoutte":"default",
            "multigpu":"default"
        }
    };

    $scope.presets.high = {
        "preset":1,
        "screen":{
            "mode":"borderless",
            "resolution":{
                "preset":"1920x1080",
                "custom":{
                    "x":undefined,
                    "y":undefined
                }
            },
            "maxfps":60,
            "vsync":true,
            "fov":80,
            "mouse":{
                "acceleration":0,
                "smoothing":0
            }
        },
        "graphics":{
            "texturequality":"512",
            "shadow":{
                "quality":"1",
                "blur":0.5
            },
            "ssdo":"0",
            "antialiasing":"1",
            "anisotropicfilter":"16",
            "filter":{
                "sharpness":0.4,
                "motionblur":0,
                "depthoffield":0.4,
                "radialblur":0,
                "hdr":{
                    "brightness":0,
                    "bloom":0
                },
                "chromaticaberration":0,
                "colorgrading":true
            },
            "hud":{
                "headbobbing":0
            },
            "reflections":"1"
        },
        "advanced":{
            "tessellation":{
                "quality":5,
                "prerendering":false,
                "hardwarerendering":true
            },
            "lod":"6",
            "multicore":true,
            "physicsgpu":"1"
        },
        "experimental":{
            "multithreading":{
                "physicthreads":"default",
                "navigation":"default",
                "particle":"default",
                "subobject_mesh":"default",
                "threadedwhileloading":"default",
                "jobsystem":"default"
            },
            "cores":{
                "mainthread":"default",
                "physicsthread":"default",
                "iothread":"default"
            },
            "shadowcaching":"default",
            "silhoutte":"default",
            "multigpu":"default"
        }
    };

    $scope.presets.low = {
        "preset":0,
        "screen":{
            "mode":"fullscreen",
            "resolution":{
                "preset":"1920x1080",
                "custom":{
                    "x":undefined,
                    "y":undefined
                }
            },
            "maxfps":60,
            "vsync":false,
            "fov":80,
            "mouse":{
                "acceleration":0,
                "smoothing":0
            }
        },
        "graphics":{
            "texturequality":"128",
            "shadow":{
                "quality":"0",
                "blur":0.8
            },
            "ssdo":"0",
            "antialiasing":"0",
            "anisotropicfilter":"16",
            "filter":{
                "sharpness":0.15,
                "motionblur":0,
                "depthoffield":0,
                "radialblur":0,
                "hdr":{
                    "brightness":0,
                    "bloom":0
                },
                "chromaticaberration":0,
                "colorgrading":true
            },
            "hud":{
                "headbobbing":0
            },
            "reflections":"0"
        },
        "advanced":{
            "tessellation":{
                "quality":1,
                "prerendering":false,
                "hardwarerendering":true
            },
            "lod":"4",
            "multicore":true,
            "physicsgpu":"1"
        },
        "experimental":{
            "multithreading":{
                "physicthreads":"default",
                "navigation":"default",
                "particle":"default",
                "subobject_mesh":"default",
                "threadedwhileloading":"default",
                "jobsystem":"default"
            },
            "cores":{
                "mainthread":"default",
                "physicsthread":"default",
                "iothread":"default"
            },
            "shadowcaching":"default",
            "silhoutte":"default",
            "multigpu":"default"
        }
    };

    /**
     * Sets the preset
     * @param preset
     */
    function setPreset(preset) {
        $scope.config = $scope.presets[preset];
    }

    /**
     * Returns the text used in the user.cfg file
     * @param parameters - the config-parameters
     * @returns {string}
     */
    function buildCfgContent(parameters){
        var content = ";This custom config was generated from http://sc-configurator.grimsi.de\n" +
            ";(C) 2017 - Cr4zyPi3t\n" +
            ";\n" +
            ";Use at your own risk!\n" +
            ";\n" +
            ";\n" +
            "Con_Restricted = 0\n" +
            ";\n" +
            ";Basic Settings\n" +
            "sys_spec = " + parameters.preset + "\n" +
            "r_FullscreenWindow = " + (parameters.screen.mode === "borderless" ? "1" : "0") + "\n" +
            "r_Fullscreen = " + (parameters.screen.mode === "fullscreen" ? "1" : "0") + "\n" +
            "sys_maxfps = " + parameters.screen.maxfps +"\n" +
            "r_width = " + (parameters.screen.resolution.preset === 'custom' ? parameters.screen.resolution.custom.x : getSreenResolution(parameters.screen.resolution.preset).x) + "\n" +
            "r_height = " + (parameters.screen.resolution.preset === 'custom' ? parameters.screen.resolution.custom.y : getSreenResolution(parameters.screen.resolution.preset).y) + "\n" +
            "r_VSync = " + (parameters.screen.vsync ? "1" : "0") + "\n" +
            "CL_fov = " + parameters.screen.fov + "\n" +
            "i_Mouse_Accel = " + parameters.screen.mouse.acceleration + "\n" +
            "i_Mouse_Smooth = " + parameters.screen.mouse.smoothing + "\n" +
            "r_TexturesStreamPoolSize = " + parameters.graphics.texturequality + "\n" +
            "e_ShadowsPoolSize = " + (getShadowQuality(parameters.graphics.shadow.quality).poolsize) + "\n" +
            "e_ShadowsMaxTexRes = " + (getShadowQuality(parameters.graphics.shadow.quality).resolution) + "\n" +
            "e_ShadowsReScale = " + (getShadowQuality(parameters.graphics.shadow.quality).scale) + "\n" +
            "r_ShadowBlur = " + parameters.graphics.shadow.blur + "\n" +
            "r_DeferredShadingFilterGBuffer = 1\n" +
            "r_ssdo = " + parameters.graphics.ssdo + "\n" +
            "r_ssao = 0\n" +
            "r_AntialiasingMode = " + parameters.graphics.antialiasing + "\n" +
            "r_TexMaxAnisotropy = " + parameters.graphics.anisotropicfilter + "\n" +
            "r_TexMinAnisotropy = " + parameters.graphics.anisotropicfilter + "\n" +
            "r_Sharpening = " + parameters.graphics.filter.sharpness + "\n" +
            "r_MotionBlur = " + parameters.graphics.filter.motionblur + "\n" +
            "r_DepthOfField = " + parameters.graphics.filter.depthoffield + "\n" +
            "g_radialBlur = " + parameters.graphics.filter.radialblur + "\n" +
            "r_HDRBrightLevel = " + parameters.graphics.filter.hdr.brightness + "\n" +
            "r_HDRBloomRatio = " + parameters.graphics.filter.hdr.bloom + "\n" +
            "hud_bobHud = " + parameters.graphics.hud.headbobbing + "\n" +
            "r_ChromaticAberration = " + parameters.graphics.filter.chromaticaberration + "\n" +
            "r_SSReflections = " + parameters.graphics.reflections + "\n" +
            "r_ColorGrading = " + (parameters.graphics.filter.colorgrading ? "1" : "0") + "\n"
        if($scope.mode.current > 0){
            content += ";\n" +
                ";Advanced Settings\n" +
                "r_TesselationTriangleSize = " + (21 - parseInt(parameters.advanced.tessellation.quality)) + "\n" +
                "r_TesselationPreTesselateOnGPU = " + (parameters.advanced.tessellation.prerendering ? "1" : "0") + "\n" +
                "e_Tesselation = " + (parameters.advanced.tessellation.hardwarerendering ? "1" : "0") + "\n" +
                "e_LodRatio = " + parameters.advanced.lod + "\n" +
                "r_MultiThreaded = " + (parameters.advanced.multicore ? "1" : "0") + "\n" +
                "sys_physics_GPU = " + parameters.advanced.physicsgpu + "\n";
        }
        if($scope.mode.current > 1){
            content += ";\n" +
                ";Experimental Settings\n" +
                (parameters.experimental.shadowcaching === true ? "e_GsmCache = 1\n" : "") +
                (parameters.experimental.silhoutte === true ? "r_SilhouettePOM = 1\n" : "") +
                (parameters.experimental.multigpu === true ? "r_MultiGPU = 1\n" : "") +
                (parameters.experimental.multithreading.navigation === true ? "ai_NavigationSystemMT = 1\n" : "") +
                (parameters.experimental.multithreading.navigation === true ? "e_ParticlesThread = 1\n" : "") +
                (parameters.experimental.multithreading.subobject_mesh === true ? "e_StatObjMergeUseThread = 1\n" : "") +
                (parameters.experimental.multithreading.threadedwhileloading === true ? "gfx_loadtimethread = 1\n" : "") +
                (parameters.experimental.multithreading.physicthreads !== "default" ? "p_num_threads = " + parameters.experimental.cores.physicsthread + "\n" : "") +
                (parameters.experimental.multithreading.jobsystem === true ? "sys_job_system_enable = 1\n" : "") +
                (parameters.experimental.cores.mainthread !== "default" ? "sys_main_CPU = " + parameters.experimental.cores.mainthread + "\n" : "") +
                (parameters.experimental.cores.physicsthread !== "default" ? "sys_physics_CPU = " + parameters.experimental.cores.physicsthread + "\n" : "") +
                (parameters.experimental.cores.iothread !== "default" ? "sys_streaming_CPU = " + parameters.experimental.cores.iothread + "\n" : "");
        }
        return content;
    }

    $scope.$watch('config', function () {
        if(!angular.isUndefinedOrNull($scope.config)){
            $scope.hints=[];
            $scope.hints.warning = false;
            $scope.hints.error = false;

            if($scope.config.screen.mode === 'borderless'){
                $scope.hints.push({message:"When setting window mode to borderless be sure to set the resolution to match the one of your display(s).", level: "info"});
            }
            if($scope.config.screen.fov !== 80) {
                $scope.hints.push({message:"While the FOV value is placed in the user.cfg, the game currently ignores this option.", level: "info"});
            }
            if($scope.config.graphics.anisotropicfilter !== '16') {
                $scope.hints.push({message:"Anisotropic filtering most likely wont cost any performance at all while making the games' textures look much less blurry. I recommend setting this to 16x.", level: "info"});
            }
            if($scope.config.advanced.tessellation.prerendering) {
                $scope.hints.push({message:"Tessellation Pre-Rendering is only recommended on GPUs better or as good as the GTX 1070 or SLI-Setups.", level: "info"});
            }
            if($scope.config.graphics.filter.colorgrading !== true) {
                $scope.hints.push({message:"Disabling Color-Grading can result in a small performance increase but the colors will look washed-out.", level: "info"});
            }
            if($scope.config.graphics.shadow.quality > 4) {
                $scope.hints.push({message:"Setting shadow quality to ultra will decrease performance quite a bit, but you will most likely not even see the difference to very high.", level: "info"});
            }
            if($scope.config.graphics.antialiasing === '2') {
                $scope.hints.push({message:"SMAA should work on most systems, but a few users reported huge FPS drops when using this option.", level: "warning"});
                $scope.hints.warning = true;
            }
            if($scope.config.advanced.tessellation.hardwarerendering !== true) {
                $scope.hints.push({message:"If your computer is somewhat up-to-date it should support hardware tesselation. Disabling this option will most likely result in decreased performance.", level: "warning"});
                $scope.hints.warning = true;
            }
            if($scope.config.advanced.physicsgpu !== '1') {
                $scope.hints.push({message:"Only change the physics gpu when using Crossfire or SLI or the game will crash.", level: "warning"});
                $scope.hints.warning = true;
            }
            if($scope.config.advanced.multicore !== true) {
                $scope.hints.push({message:"Disabling multi-core support will massively decrease performance without returning any benefits.", level: "error"});
                $scope.hints.error = true;
            }
        }
    }, true);

    /**
     * Downloads a file with given filename and content
     * @param filename
     * @param content
     */
    function download(filename, content) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    /**
     * Returns an object with x and y resolution parameters
     * @param resStr - String in the form of XRESxYRES
     * @returns {{x: {int}, y: {int}}}
     */
    function getSreenResolution(resStr){
        var resolution = resStr.split('x');
        return {
            x: resolution[0],
            y: resolution[1]
        }
    }

    /**
     * Returns an object with quality paramters of the shadow rendering
     * @param qual
     * @returns {{poolsize: {int}, resolution: {int}, scale: {int}}}
     */
    function getShadowQuality(qual){
        var quality = {
            poolsize: undefined,
            resolution: undefined,
            scale: undefined
        };
        switch (qual){
            case 0: quality.poolsize = 128;
                    quality.resolution = 128;
                    quality.scale = 0.1;
                    break;
            case 1: quality.poolsize = 256;
                    quality.resolution = 256;
                    quality.scale = 10;
                    break;
            case 2: quality.poolsize = 512;
                    quality.resolution = 512;
                    quality.scale = 20;
                    break;
            case 3: quality.poolsize = 1024;
                    quality.resolution = 1024;
                    quality.scale = 40;
                    break;
            case 4: quality.poolsize = 2048;
                    quality.resolution = 2048;
                    quality.scale = 60;
                    break;
            case 5: quality.poolsize = 4069;
                    quality.resolution = 4069;
                    quality.scale = 100;
                    break;
            default: return getShadowQuality(2);
                     break;
        }
        return quality;
    }

    function showInfo() {
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(false)
                .title('Information')
                .htmlContent(
                    'This app was developed using Angular Material and is licensed under the <a href="../../license.html" target="_blank">DBAD-License</a>.<br/><br/>' +
                    'It was tested with the following Star Citizen Client version: <code>2.6.3-523988</code><br/><br/><br/>' +
                    '&copy; 2017 - Simon Grimme<br/>' +
                    'Version: beta 0.3')
                .ok('Close')
        );
    }

    function showHelp() {
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(false)
                .title('Help')
                .htmlContent('1. Set the options according to your preference and click the "Download File" button.<br/>' +
                    '2. Place the downloaded "user.cfg" file here: "%ProgramFiles%/Cloud Imperium Games/StarCitizen/Public"<br/><br/><br/>' +
                    'Check out these sites for further information:<br />' +
                    '<a href="https://www.redacted.tv/custom-user-cfg-guide-star-citizen-alpha-2-x/" target="_blank">Complete Guide to "user.cfg"</a><br/>' +
                    '<a href="http://forums.redacted.tv/threads/star-citizen-resources.437/" target="_blank">Star Citizen Resources</a><br/>' +
                    '<a href="http://www.redacted.tv/star-citizen-hot-issues-june-2016/" target="_blank">Hot Issues & Fixes</a><br/>' +
                    '<a href="https://www.youtube.com/watch?v=U8K9Xfn6YlQ" target="_blank">Star Citizen Optimization Guide</a><br/>' +
                    '<a href="http://forums.redacted.tv/threads/help-boredgamer-with-the-ultimate-windows-10-gaming-tweak-guide.1205/" target="_blank">Ultimate Windows 10 Gaming Tweaks Guide</a><br/>' )
                .ok('Close')
        );
    }

    function showDonate() {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'src/views/donationButton.html',
            parent: angular.element(document.body),
            clickOutsideToClose:false
        })
    }

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

    angular.isUndefinedOrNull = function(val) {
        return angular.isUndefined(val) || val === null
    };

    /**
     * Functions callable from view
     */
    $scope.setPreset = setPreset;
    $scope.download = download;
    $scope.buildCfgContent = buildCfgContent;
    $scope.log = function(content){ console.log(content) };
    $scope.showInfo = showInfo;
    $scope.showHelp = showHelp;
    $scope.showDonate = showDonate;
});

app.directive('loadTemplate', function() {
    return {
        restrict: 'AE',
        templateUrl: function(ele, attrs) {
            return attrs.templatePath;
        }
    };
});

app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .dark()
            .primaryPalette('blue')
            .accentPalette('blue');
});