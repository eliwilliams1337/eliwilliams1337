let blueprint3d = null;
let myhome = '{"floorplan":{"version":"0.0.2a","corners":{"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":0,"y":0,"elevation":4},"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":0,"y":5,"elevation":2.5},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":5,"y":5,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":5,"y":0,"elevation":4}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-176.77669529663686,"y":176.7766952966369},"b":{"x":-176.7766952966369,"y":323.22330470336317}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":176.7766952966369,"y":676.7766952966368},"b":{"x":323.22330470336317,"y":676.776695296637}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":676.7766952966368,"y":323.2233047033631},"b":{"x":676.776695296637,"y":176.77669529663686}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":323.2233047033631,"y":-176.77669529663686},"b":{"x":176.77669529663686,"y":-176.7766952966369}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"Bathroomcabinet","item_type":1,"format":"gltf","model_url":"models/gltf/Laundry-Laundry_cupboard.glb","xpos":462.00000101700425,"ypos":102.2114059477874,"zpos":150.42851484100402,"rotation":-1.5707963267948966,"scale_x":30,"scale_y":30,"scale_z":30,"fixed":false}]}';
let myhome1 = '{"floorplan":{"corners":{"16b020d0-fa1e-f198-bbc6-2ad1a59268d0":{"x":135.31850000000009,"y":-887.476},"8d92c038-8852-f4ea-e8bb-ac03f938f703":{"x":-44.06899999999996,"y":359.15600000000006},"5eee22b8-d773-5b93-c4c8-bf4286ac436d":{"x":-220.09100000000012,"y":-887.476},"4cd3d434-0921-ccfa-0e29-29d3778be8be":{"x":-220.09100000000012,"y":-105.15599999999995},"79dd4e37-0bc6-c662-2197-ec97c356a7d4":{"x":135.31850000000009,"y":-265.6840000000001},"e8c4dc18-0a85-92a9-85b2-37dee45f4a00":{"x":-220.09100000000012,"y":-403.85999999999984},"ea1bedfe-ca15-1744-4108-5450cc842661":{"x":-66.42100000000008,"y":-403.85999999999984},"b1c87f68-9c9e-99d2-859c-fb793355d90b":{"x":-66.42100000000008,"y":-265.6840000000001},"c8a304a1-b9bd-6b76-92e9-2321af0bd415":{"x":-44.06899999999996,"y":-105.15599999999995},"263a453c-9952-75d6-8810-8477a3265bc6":{"x":188.1505000000002,"y":-105.15599999999995},"483d787d-0016-0751-aeda-087bab3a0ed6":{"x":188.1505000000002,"y":-188.4679999999999},"e3e27b42-3226-3fe2-5153-1bbb7a498584":{"x":326.3265000000001,"y":-188.4679999999999},"22ad9451-b853-12b7-f471-9299192489e4":{"x":326.3265000000001,"y":-381.5079999999999},"3eb61572-0237-0254-1e1a-8526c2a71ec6":{"x":452.31050000000005,"y":-381.5079999999999},"1b0e7027-3dc4-12cb-0937-370a669217a5":{"x":604.52,"y":-887.476},"d326e87e-4117-7033-7844-e7486d249b1e":{"x":604.52,"y":-381.5079999999999},"4f68435b-ee33-c4cb-2b60-69945652cacd":{"x":326.3265000000001,"y":-499.36400000000003},"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a":{"x":135.31850000000009,"y":-499.36400000000003},"56aa05eb-95de-2e11-d759-38814b8d9ce0":{"x":452.31050000000005,"y":-499.36400000000003},"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0":{"x":604.52,"y":-499.36400000000003},"007d1f79-7d8f-827e-60ce-b3efb21444eb":{"x":604.52,"y":-105.15599999999995},"b8dc05af-4819-456f-63e1-6a975118bbb4":{"x":604.52,"y":359.15600000000006},"bf238f73-f50e-a2c6-d877-0c39e7c2c330":{"x":326.3265000000001,"y":-105.15599999999995}},"walls":[{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","corner2":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"1b0e7027-3dc4-12cb-0937-370a669217a5","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"ea1bedfe-ca15-1744-4108-5450cc842661","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"ea1bedfe-ca15-1744-4108-5450cc842661","corner2":"b1c87f68-9c9e-99d2-859c-fb793355d90b","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"b1c87f68-9c9e-99d2-859c-fb793355d90b","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","corner2":"263a453c-9952-75d6-8810-8477a3265bc6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"483d787d-0016-0751-aeda-087bab3a0ed6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"483d787d-0016-0751-aeda-087bab3a0ed6","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"e3e27b42-3226-3fe2-5153-1bbb7a498584","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"d326e87e-4117-7033-7844-e7486d249b1e","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"22ad9451-b853-12b7-f471-9299192489e4","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"56aa05eb-95de-2e11-d759-38814b8d9ce0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"3eb61572-0237-0254-1e1a-8526c2a71ec6","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"1b0e7027-3dc4-12cb-0937-370a669217a5","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","corner2":"007d1f79-7d8f-827e-60ce-b3efb21444eb","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":45.60973158833667,"ypos":110.5,"zpos":-265.1840000000001,"rotation":0,"scale_x":1.1771369721936153,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":226.19923363943076,"ypos":110.800000297771,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":71.15100000000002,"ypos":110.5,"zpos":-104.65599999999995,"rotation":0,"scale_x":1.5695159629248197,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true},{"item_name":"Dresser - Dark Wood","item_type":1,"model_url":"models/js/DWR_MATERA_DRESSER2.js","xpos":549.2058844807959,"ypos":57.785001860754996,"zpos":329.7799662755366,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"NYC Poster","item_type":2,"model_url":"models/js/nyc-poster2.js","xpos":598.25,"ypos":183.62661902009813,"zpos":117.68045683694481,"rotation":-1.5707963267948966,"scale_x":0.7142842857142857,"scale_y":0.8421024709178014,"scale_z":1.0129608601270457,"fixed":true},{"item_name":"Blue Rug","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","xpos":184.68588061910788,"ypos":0.250005,"zpos":122.38666413809182,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Coffee Table - Wood","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","xpos":272.6962787349586,"ypos":24.01483158034958,"zpos":126.73694950426048,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":512.6434934035085,"ypos":157.07894848817114,"zpos":-886.976,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":-120.92122752323827,"ypos":168.10483780571963,"zpos":-886.976,"rotation":0,"scale_x":0.6603999999996408,"scale_y":0.5810892360052958,"scale_z":1.0332383005354289,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":438.5412557798525,"ypos":159.40045156749102,"zpos":358.65600000000006,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":307.85036934553574,"ypos":159.1968280144008,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":182.15084546678992,"ypos":159.0605552363389,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":-103.81899999999992,"ypos":110.80000022010701,"zpos":-105.65599999999995,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.5,"zpos":-280.9525143309595,"rotation":-1.5707963267948966,"scale_x":1.2294541709577755,"scale_y":0.9972921724026447,"scale_z":0.9482825135211149,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.80000022010701,"zpos":-439.4767618863214,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":250.42795654332926,"ypos":110.80000022010701,"zpos":-188.9679999999999,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":527.7045416935933,"ypos":110.80000022010701,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":17.379725040490854,"ypos":110.5,"zpos":-886.976,"rotation":0,"scale_x":1.1771369721936145,"scale_y":0.9972921724026447,"scale_z":0.948282513521117,"fixed":true},{"item_name":"Media Console - White","item_type":9,"model_url":"models/js/cb-clapboard_baked.js","xpos":574.12,"ypos":67.89999754396,"zpos":131.42070309211852,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Sofa - Grey","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","xpos":12.257267191489404,"ypos":42.54509923821,"zpos":136.8119273061203,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true}]}';

var empty = '{"floorplan":{"version":"0.0.2a","units":"m", "corners":{"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":0,"y":0,"elevation":2.5},"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":0,"y":5,"elevation":2.5},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":5,"y":5,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":5,"y":0,"elevation":2.5}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-176.77669529663686,"y":176.7766952966369},"b":{"x":-176.7766952966369,"y":323.22330470336317}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":176.7766952966369,"y":676.7766952966368},"b":{"x":323.22330470336317,"y":676.776695296637}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":676.7766952966368,"y":323.2233047033631},"b":{"x":676.776695296637,"y":176.77669529663686}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":323.2233047033631,"y":-176.77669529663686},"b":{"x":176.77669529663686,"y":-176.7766952966369}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[]}';

/*
 * Floorplanner controls
 */

$(document).ready(function() {
    var opts = {
        viewer2d: { id: 'bp3djs-viewer2d', viewer2dOptions: { 'corner-radius': 10, pannable: true, zoomable: true } },
        viewer3d: 'bp3djs-viewer3d',
        textureDir: "models/textures/",
        widget: false,
        resize: true,
    };

    blueprint3d = new BP3DJS.BlueprintJS(opts);
    blueprint3d.model.addEventListener(BP3DJS.EVENT_LOADED, function() { console.log('LOAD SERIALIZED JSON ::: '); });
    blueprint3d.model.loadSerialized(empty);

    document.getElementById('switch-viewer').onclick = function() {
        blueprint3d.switchView();
    };

    document.getElementById('draw-viewer2d').onclick = function() {
        blueprint3d.setViewer2DModeToDraw();
    };

    document.getElementById('move-viewer2d').onclick = function() {
        blueprint3d.setViewer2DModeToMove();
    };
});