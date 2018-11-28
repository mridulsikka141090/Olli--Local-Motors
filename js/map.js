var markerImage = "./images/redlocation.png";
var markerImage_green = "./images/greenlocation.png";
var CarPointer = "./images/greencircle.png";
var Carmarker;
var mapLocation = {
    lat: 39.2206000,
    lng: -77.276896
};
var position = [39.22163685, -77.27672534];
var flight;

function initMap() {
    var locationLinks = [];
    var Position;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16.4,
        center: mapLocation,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        fullScreenControl: false,
          zoomControl: false,
         
        streetViewControl: false
    });
    

    //    var src = "http://64.150.183.17:1058/newMap.kmz";
    //     var kmlLayer = new google.maps.KmlLayer(src, {
    //          suppressInfoWindows: true,
    //          preserveViewport: false,
    //          map: map
    //        });
    //    var position1 = new google.maps.LatLng(39.22363121, -77.27671452);
    var position1 = new google.maps.LatLng(39.21983966, -77.27412534);
    //    var position2 = new google.maps.LatLng(39.22181997, -77.27332597);
    var position2 = new google.maps.LatLng(39.22204689, -77.27690224);
    //    var position3 = new google.maps.LatLng(39.22004584, -77.27659054);
    var MarkerMovementPosition1 = [39.22273472180105, -77.27591125985133];
    var MarkerMovementPosition2 = [39.22273472180105, -77.27591125985133];
    var MarkerMovementPosition3 = [39.2221644849626, -77.2740847210459];
    var MarkerMovementPosition4 = [39.22179977093364, -77.2732954469184];
    var MarkerMovementPosition5 = [39.21999469999932, -77.27352185000055];
    var MarkerMovementPosition6 = [39.219146030000645, -77.27519648000172];
    var MarkerMovementPosition7 = [39.22009834879062, -77.27665207011258];
    var MarkerMovementPosition8 = [39.22092221885438, -77.27759369469876];
    var MarkerMovementPosition9 = [39.22240497690429, -77.27796098732524];
    addMarker(position1);
    addMarker(position2);
    //    addMarker(position3);
    Carmarker = new google.maps.Marker({
        position: Position,
        map: map,
        icon: CarPointer,
        title: "Latitude:" + position[0] + " | Longitude:" + position[1]
    });

    function addMarker(pos) {
        var marker = new google.maps.Marker({
            map: map,
            position: pos,
            icon: markerImage
        });
    }

    function addMarker_green(pos) {
        var marker = new google.maps.Marker({
            map: map,
            position: pos,
            icon: markerImage_green
        });
    }




    var flightPlanCoordinates = [{
            lat: 39.22204689,
            lng: -77.27690224
        },
        {
            lat: 39.22215494,
            lng: -77.27676411
        },
        {
            lat: 39.2223752,
            lng: -77.27693577
        },
        {
            lat: 39.22263701,
            lng: -77.27715303
        },
        {
            lat: 39.22301311,
            lng: -77.2774588
        },
        {
            lat: 39.22336635,
            lng: -77.27707792
        },
        {
            lat: 39.22363232,
            lng: -77.27671583
        },
        {
            lat: 39.22330402,
            lng: -77.27641274
        },
        {
            lat: 39.22301935,
            lng: -77.27615256
        },
        {
            lat: 39.22275278,
            lng: -77.27590884
        },
        {
            lat: 39.22260372,
            lng: -77.2754314
        },
        {
            lat: 39.22249359,
            lng: -77.27479035
        },
        {
            lat: 39.22229204,
            lng: -77.2743156
        },
        {
            lat: 39.22209877,
            lng: -77.27388889
        },
        {
            lat: 39.22197825,
            lng: -77.2735402
        },
        {
            lat: 39.22187308,
            lng: -77.27337298
        },
        {
            lat: 39.22173593,
            lng: -77.27326569
        },
        {
            lat: 39.22151983,
            lng: -77.2732335
        },
        {
            lat: 39.2213536,
            lng: -77.27320668
        },
        {
            lat: 39.22123723,
            lng: -77.27320131
        },
        {
            lat: 39.22114165,
            lng: -77.27319595
        },
        {
            lat: 39.22088814,
            lng: -77.27317986
        },
        {
            lat: 39.220618,
            lng: -77.27322814
        },
        {
            lat: 39.22039774,
            lng: -77.27329787
        },
        {
            lat: 39.22008605,
            lng: -77.27342662
        },
        {
            lat: 39.21992397,
            lng: -77.27353927
        },
        {
            lat: 39.21976188,
            lng: -77.27368948
        },
        {
            lat: 39.21960173,
            lng: -77.27389333
        },
        {
            lat: 39.21971914,
            lng: -77.27401
        },
        {
            lat: 39.21983966,
            lng: -77.27412534
        },



        {
            lat: 39.22005993,
            lng: -77.27428895
        },
        {
            lat: 39.22020954,
            lng: -77.27442306
        },
        {
            lat: 39.22040902,
            lng: -77.27457863
        },
        {
            lat: 39.22067085,
            lng: -77.27478784
        },
        {
            lat: 39.22054973,
            lng: -77.27503997
        },
        {
            lat: 39.22041674,
            lng: -77.27526528
        },
        {
            lat: 39.22028791,
            lng: -77.27550668
        },
        {
            lat: 39.2201383,
            lng: -77.27583927
        },
        {
            lat: 39.21994297,
            lng: -77.27621478
        },
        {
            lat: 39.21998453,
            lng: -77.27652055
        },
        {
            lat: 39.22012583,
            lng: -77.27671903
        },
        {
            lat: 39.22025051,
            lng: -77.27685851
        },
        {
            lat: 39.22041674,
            lng: -77.27705163
        },
        {
            lat: 39.22059129,
            lng: -77.27727693
        },
        {
            lat: 39.22081571,
            lng: -77.27750224
        },
        {
            lat: 39.22091545,
            lng: -77.27758807
        },
        {
            lat: 39.22109,
            lng: -77.27772754
        },
        {
            lat: 39.22122299,
            lng: -77.27779192
        },
        {
            lat: 39.22135597,
            lng: -77.27785629
        },
        {
            lat: 39.22155546,
            lng: -77.27792066
        },
        {
            lat: 39.22167182,
            lng: -77.27793139
        },
        {
            lat: 39.22173831,
            lng: -77.27792066
        },
        {
            lat: 39.22188792,
            lng: -77.27792066
        },
        {
            lat: 39.2220126,
            lng: -77.27790993
        },
        {
            lat: 39.22218714,
            lng: -77.27788848
        },
        {
            lat: 39.22207859,
            lng: -77.27775791
        },
        {
            lat: 39.22197885,
            lng: -77.27756479
        },
        {
            lat: 39.22191652,
            lng: -77.27733948
        },
        {
            lat: 39.22196223,
            lng: -77.2770659
        },
        {
            lat: 39.22204689,
            lng: -77.27690224
        }
//        {
//            lat: 39.22204689
//            , lng: -77.27672534
//        },
//        { 
//        
//        }
//            lat: 39.222734721800336
//            , lng: -77.27591125985066
//        }
//        , {
//            lat: 39.22259751
//            , lng: -77.27549433
//        }
//        , {
//            lat: 39.22247087
//            , lng: -77.27472039
//        }
//        , {
//            lat: 39.22217269
//            , lng:-77.27408336
//        }
//        , {
//            lat: 39.22191191
//            , lng: -77.27341817
//        }
//        , {
//            lat: 39.22185312
//            , lng: -77.27334691
//        }
//        , {
//            lat: 39.2217513
//            , lng: -77.27327851
//        }
//        , {
//            lat: 39.22119196
//            , lng: -77.27319939
//        }
//        , {
//            lat: 39.22087152
//            , lng: -77.27319384
//        }
//        , {
//            lat: 39.22017882
//            , lng: -77.2733811
//        }
//          , {
//            lat: 39.21990453
//            , lng: -77.27357958
//        }
//           , {
//            lat: 39.21951417
//            , lng: -77.27401656
//        }     , {
//            lat: 39.21919728
//            , lng: -77.27439207
//        }
//         , {
//            lat: 39.21875954
//            , lng: -77.27447832
//        }
//          , {
//            lat: 39.21915747
//            , lng: -77.27519581
//        }
//          , {
//            lat: 39.21924671
//            , lng: -77.27558397
//        }
//           , {
//            lat: 39.21992561
//            , lng: -77.27618677
//        }
//           , {
//            lat: 39.22000769
//            , lng: -77.27653144
//        }
//           , {
//            lat: 39.22053134
//            , lng: -77.27723149
//        }
//           , {
//            lat: 39.22103503
//            , lng: -77.27770386
//        }
//            , {
//            lat:39.22148837
//            , lng: -77.27791307
//        }
//              , {
//            lat:39.22241512
//            , lng: -77.27796672
//        }
//                , {
//            lat: 39.22264161
//            , lng: -77.27788089
//        },
//         {
//            lat: 39.22363685
//            , lng: -77.27672534
//        }
        ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FFFFFF',
        strokeOpacity: 1.0,
        strokeWeight: 5
    });
    flightPath.setMap(map);
    var newpath = new google.maps.Polyline({
        path: [],
        geodesic: true,
        strokeColor: '#627433',
        strokeOpacity: 1.0,
        strokeWeight: 10
    });
    newpath.setMap(map);
    var counter;

//    function hello1() {
//        $.getJSON("http://208.95.95.66:2020/TelemetryServer2/rest/list/get", function (data) {
//            $(".speed-meter span").text(data.speed);
//            $('.destinat h4').text(data.nextDestination);
//
//            function hello() {
//                Position = {
//                    lat: parseFloat(data.latitude),
//                    lng: parseFloat(data.longitude)
//                }
//                locationLinks.push({
//                    lat: Position.lat,
//                    lng: Position.lng
//                });
//                //                if (Position.lat == "39.22235509" && Position.lng == "-77.27448011") {
//                //                    addMarker_green(position8);
//                //                    clearInterval(stopInterval);
//                //                }
//                counter = data.distance;
//
//                if (Position.lat == "39.22208598640468" && Position.lng == "-77.27681017166998") {
//                    addMarker_green(position2);
//                }
//                //                if ((Position.lat == "39.22004382" && Position.lng == "-77.27659392")) {
//                //                  
//                //                    addMarker_green(position3);
//                //                }
//                if ((Position.lat == "39.219887341795655" && Position.lng == "-77.27410897443447")) {
//
//                    addMarker_green(position1);
//                }
//
//
//            }
//            console.log(data.nextDestination);
//            hello();
//            Carmarker.setPosition(Position);
//            newpath.setPath(locationLinks);
//
//            console.log(Position);
//        });
//
//
//
//        $('.mask').width(counter + "%");
//        console.log(counter);
//
//
//    }
//    hello1();


//    var stopInterval = setInterval(hello1, 1000);
//    if (counter >= 100) {
//        location.reload(true);
//    }
}


    function status()
    {
        if(navigator.onLine)
        {
           $('#map').css('visibility' , 'visible');
          
        }
        else
        {
           
             $('#map').css('visibility' , 'hidden');
             $('.overlay').css( 'background' , 'url(../images/ad1.jpg)' );
        }
    }
        
        setInterval(status , 1000);
    function setin() {
         
        console.log(counter);
        if (position > MarkerMovementPosition1 && counter == 0) {
            counter = 1;
            setTimeout(function () {
                move1();
            }, 2000);
            addMarker_green(position6);
            
    
        }
        else if (position < MarkerMovementPosition2 && position > MarkerMovementPosition3 && counter == 1) {
            counter = 2;
            setTimeout(function () {
                move2();
                $('.mask').css({
                    width: "31.5%"
                    , transition: "25.0s"
                });
            }, 20000);
            addMarker_green(position7);
        }
        else if (position < MarkerMovementPosition3 && position > MarkerMovementPosition4 && counter == 2) {
            counter = 3;
            setTimeout(function () {
                move3();
                $('.mask').css({
                    width: "37%"
                    , transition: "15.0s"
                });
            }, 20000);
            addMarker_green(position8);
        }
        else if (position < MarkerMovementPosition4 && position > MarkerMovementPosition5 && counter == 3) {
            counter = 4;
            move4();
            $('.mask').css({
                width: "43.5%"
                , transition: "30.0s"
            });
        }
        else if (position < MarkerMovementPosition5 && position > MarkerMovementPosition6 && counter == 4) {
            counter = 5;
            setTimeout(function () {
                move5();
                $('.mask').css({
                    width: "56%"
                    , transition: "30.0s"
                });
            }, 20000);
            addMarker_green(position1);
        }
        else if (position < MarkerMovementPosition6 && counter == 5) {
            counter = 6;
            setTimeout(function () {
                move6();
                $('.mask').css({
                    width: "68%"
                    , transition: "15.0s"
                });
            }, 20000);
            addMarker_green(position2);
        }
        else if (position > MarkerMovementPosition7 && counter == 6) {
            counter = 7;
            setTimeout(function () {
            move7();
            $('.mask').css({
                width: "80%"
                , transition: "15.0s"
            });
                 }, 20000);
            addMarker_green(position3);
        }
        else if (position > MarkerMovementPosition8 && counter == 7) {
            counter = 8;
            addMarker_green(position4);
            setTimeout(function () {
            move8();
            $('.mask').css({
                width: "100%"
                , transition: "15.0s"
            });
                }, 20000);
           
        }
        else if (position > MarkerMovementPosition9 && counter == 8) {
            move9();
            addMarker_green(position5);
           
            counter = 9;
        }
        else if (counter == 9) {
            clearInterval(interval);
        }
    }

    function move1() {
        result = [39.222734721800336, -77.27591125985066];
        transition(result, 70);
         
    }

    function move2() {
        result = [39.22216155, -77.27407532];
        transition(result, 80);
    }

    function move3() {
        result = [39.22179691, -77.27328928];
        transition(result, 50);
    }

    function move4() {
        result = [39.2199947, -77.27352185];
        transition(result, 100);
    }

    function move5() {
        result = [39.21914603, -77.27519648];
        transition(result, 80);
    }

    function move6() {
        result = [39.22009359, -77.27664487];
        transition(result, 70);
    }

    function move7() {
        result = [39.22091812, -77.27758901];
        transition(result, 50);
    }

    function move8() {
        result = [39.2223976, -77.27795916];
        transition(result, 50);
    }

    function move9() {
        result = [39.22363685, -77.27672534];
        transition(result, 50);
    }
    var interval = setInterval(setin, 1000);

   var numDeltas = 200;
var delay = 0; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;

function transition(result,del) {
    delay = del
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    
    moveMarker();
    
}

function moveMarker() {
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    
    Carmarker.setTitle("Latitude:" + position[0] + " | Longitude:" + position[1]);
    Carmarker.setPosition(latlng);
    newpath.setPath(locationLinks);
    if (i != numDeltas) {
        i++;
        locationLinks.push({
            lat : position[0],
            lng: position[1]
        });
         
        setTimeout(moveMarker, delay);
     
        
		
    }
     
}