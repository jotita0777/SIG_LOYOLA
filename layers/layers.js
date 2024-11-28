var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RUTAS_BERMEJO_1 = new ol.format.GeoJSON();
var features_RUTAS_BERMEJO_1 = format_RUTAS_BERMEJO_1.readFeatures(json_RUTAS_BERMEJO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTAS_BERMEJO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTAS_BERMEJO_1.addFeatures(features_RUTAS_BERMEJO_1);
var lyr_RUTAS_BERMEJO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTAS_BERMEJO_1, 
                style: style_RUTAS_BERMEJO_1,
                popuplayertitle: "RUTAS_BERMEJO",
                interactive: true,
    title: 'RUTAS_BERMEJO<br />\
    <img src="styles/legend/RUTAS_BERMEJO_1_0.png" /> RUTA ALTERNATIVA<br />\
    <img src="styles/legend/RUTAS_BERMEJO_1_1.png" /> RUTA SATISFACTORIA<br />\
    <img src="styles/legend/RUTAS_BERMEJO_1_2.png" /> RUTA OPTIMA<br />\
    <img src="styles/legend/RUTAS_BERMEJO_1_3.png" /> RUTA MUY OPTIMA<br />'
        });
var format_HOSPITALES_2 = new ol.format.GeoJSON();
var features_HOSPITALES_2 = format_HOSPITALES_2.readFeatures(json_HOSPITALES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPITALES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITALES_2.addFeatures(features_HOSPITALES_2);
var lyr_HOSPITALES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPITALES_2, 
                style: style_HOSPITALES_2,
                popuplayertitle: "HOSPITALES",
                interactive: true,
                title: '<img src="styles/legend/HOSPITALES_2.png" /> HOSPITALES'
            });
var format_MERCADOS_3 = new ol.format.GeoJSON();
var features_MERCADOS_3 = format_MERCADOS_3.readFeatures(json_MERCADOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERCADOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERCADOS_3.addFeatures(features_MERCADOS_3);
var lyr_MERCADOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MERCADOS_3, 
                style: style_MERCADOS_3,
                popuplayertitle: "MERCADOS",
                interactive: true,
                title: '<img src="styles/legend/MERCADOS_3.png" /> MERCADOS'
            });
var format_SEMAFOROS_4 = new ol.format.GeoJSON();
var features_SEMAFOROS_4 = format_SEMAFOROS_4.readFeatures(json_SEMAFOROS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEMAFOROS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMAFOROS_4.addFeatures(features_SEMAFOROS_4);
var lyr_SEMAFOROS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEMAFOROS_4, 
                style: style_SEMAFOROS_4,
                popuplayertitle: "SEMAFOROS",
                interactive: true,
                title: '<img src="styles/legend/SEMAFOROS_4.png" /> SEMAFOROS'
            });
var format_TERMINALES_5 = new ol.format.GeoJSON();
var features_TERMINALES_5 = format_TERMINALES_5.readFeatures(json_TERMINALES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINALES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINALES_5.addFeatures(features_TERMINALES_5);
var lyr_TERMINALES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINALES_5, 
                style: style_TERMINALES_5,
                popuplayertitle: "TERMINALES",
                interactive: true,
                title: '<img src="styles/legend/TERMINALES_5.png" /> TERMINALES'
            });
var format_UUEE_6 = new ol.format.GeoJSON();
var features_UUEE_6 = format_UUEE_6.readFeatures(json_UUEE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UUEE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UUEE_6.addFeatures(features_UUEE_6);
var lyr_UUEE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UUEE_6, 
                style: style_UUEE_6,
                popuplayertitle: "UUEE",
                interactive: true,
                title: '<img src="styles/legend/UUEE_6.png" /> UUEE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_RUTAS_BERMEJO_1.setVisible(true);lyr_HOSPITALES_2.setVisible(true);lyr_MERCADOS_3.setVisible(true);lyr_SEMAFOROS_4.setVisible(true);lyr_TERMINALES_5.setVisible(true);lyr_UUEE_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RUTAS_BERMEJO_1,lyr_HOSPITALES_2,lyr_MERCADOS_3,lyr_SEMAFOROS_4,lyr_TERMINALES_5,lyr_UUEE_6];
lyr_RUTAS_BERMEJO_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'VEL_KMH': 'VEL_KMH', 'T_MIN': 'T_MIN', 'DIRECCION': 'DIRECCION', 'PAR_TVIA': 'PAR_TVIA', 'PAR_SETR': 'PAR_SETR', 'RESULTADO': 'RESULTADO', 'CERCA_EQUI': 'CERCA_EQUI', 'TIME_OPTIM': 'TIME_OPTIM', 'PAR_TIME_O': 'PAR_TIME_O', 'PAR_CERC_E': 'PAR_CERC_E', 'SEÑALES_D': 'SEÑALES_D', 'Shape_Leng': 'Shape_Leng', });
lyr_HOSPITALES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_MERCADOS_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SEMAFOROS_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_TERMINALES_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_UUEE_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_RUTAS_BERMEJO_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'VEL_KMH': 'TextEdit', 'T_MIN': 'TextEdit', 'DIRECCION': 'TextEdit', 'PAR_TVIA': 'TextEdit', 'PAR_SETR': 'TextEdit', 'RESULTADO': 'TextEdit', 'CERCA_EQUI': 'TextEdit', 'TIME_OPTIM': 'TextEdit', 'PAR_TIME_O': 'TextEdit', 'PAR_CERC_E': 'TextEdit', 'SEÑALES_D': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_HOSPITALES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_MERCADOS_3.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SEMAFOROS_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_TERMINALES_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_UUEE_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_RUTAS_BERMEJO_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'VEL_KMH': 'no label', 'T_MIN': 'no label', 'DIRECCION': 'no label', 'PAR_TVIA': 'no label', 'PAR_SETR': 'no label', 'RESULTADO': 'inline label - visible with data', 'CERCA_EQUI': 'no label', 'TIME_OPTIM': 'no label', 'PAR_TIME_O': 'no label', 'PAR_CERC_E': 'no label', 'SEÑALES_D': 'no label', 'Shape_Leng': 'no label', });
lyr_HOSPITALES_2.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_MERCADOS_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SEMAFOROS_4.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_TERMINALES_5.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_UUEE_6.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_UUEE_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});