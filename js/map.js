ymaps.ready(init);

function init () {

var myMap = new ymaps.Map("map", {
    center: [55.192584, 61.379871],
    zoom: 13,
    controls: ['zoomControl']
}); 
var myGeoObjects = [];
        myGeoObjects[0] = new ymaps.Placemark([55.192584, 61.379871],{
            clusterCaption: 'Заголовок', 
            },{
            iconLayout: 'default#image',
            iconImageHref: 'img/blue.svg',
            iconImageSize: [27, 37],
            iconImageOffset: [-3, -42]
            });
        myGeoObjects[1] = new ymaps.Placemark([55.192456, 61.365983],{
            clusterCaption: 'Заголовок', 
            },{
            iconLayout: 'default#image',
            iconImageHref: 'img/red.svg',
            iconImageSize: [27, 37],
            iconImageOffset: [-23, -42]
        });
        myGeoObjects[2] = new ymaps.Placemark([55.191665, 61.390220],{
            clusterCaption: 'Заголовок', 
            },{
            iconLayout: 'default#image',
            iconImageHref: 'img/blue.svg',
            iconImageSize: [27, 37],
            iconImageOffset: [-16, -42]
        });
        myGeoObjects[3] = new ymaps.Placemark([53.7377,37.6511],{
            clusterCaption: 'Заголовок', 
            },{
            iconLayout: 'default#image',
            iconImageHref: 'img/red.svg',
            iconImageSize: [165, 40],
            iconImageOffset: [-16, -42]
        });
        
var clusterIcons=[{
    href:'img/arrow.svg',
    size:[31,40],
    offset:[0,0]
}];
        
var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: true,
    clusterOpenBalloonOnClick: false,
    clusterBalloonContentLayout: 'cluster#balloonCarousel',
    clusterBalloonPanelMaxMapArea: 0,
    clusterBalloonContentLayoutWidth: 300,
    clusterBalloonContentLayoutHeight: 200,
    clusterBalloonPagerSize: 5,
    clusterBalloonCycling: false,
    
    clusterBalloonPagerVisible: false
});

clusterer.add(myGeoObjects);
myMap.geoObjects.add(clusterer);
}