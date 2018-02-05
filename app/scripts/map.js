  function initMap() {
        da["map"] = {};
        da["markers"] = new google.maps.MVCArray();
        var austin = {lat: 30.216187, lng: -97.751656};
    
        da.map = new google.maps.Map(document.getElementById('Maps'), {
          zoom: 12,
          center: austin
        });
        // new test
        da.map.addListener('click', function(event) {
          addMarker(event.latLng);
        });
        
       makeLegend();
      
        // Adds a marker to the map and push to the array.
        function addMarker(location) {
            console.log(location);
            var marker = new google.maps.Marker({
                position: location,
                map: da.map
            });
            google.maps.event.addListener(marker, 'click', function() {
                console.log('Click Event Info');
                var infowindow = new google.maps.InfoWindow({
                    content: '<p>Marker Location:' + marker.getPosition() + '</p>'          
                });
                infowindow.open(da.map, marker);
            });
            da.markers.push(marker);
        }

        // Removes the markers from the map, but keeps them in the array.
        function hideMarkers() {
            da.markers.forEach(function(el,i){
                el.setMap(null);
            });
          //console.log('Test Clear Markers');
        }

        // Shows any markers currently in the array.
        function showMarkers() {
            da.markers.forEach(function(el,i){
                el.setMap(da.map);
            });
          //console.log('Test Show Markers');
        }
      
        // Saves markers currently in the array.
        function saveMarkers(){
          console.log(da.markers.getArray());
            var tempData = [];
            da.markers.forEach(function(el,i){
                // WORKING RIGHT HERE
                //console.log(el.getPosition().toString());
                tempData.push(el.getPosition().toJSON());
            });
            da.database.ref('markers/testMap').set(stringify(tempData));
        }
        
        // Calls new markers from the database    
        function getMarkers(){
            da.database.ref('markers/testMap').once('value', function(dataSnapshot) {
                console.log('Data Test', dataSnapshot.val());
                var tmpData = dataSnapshot.val();
                for (var i = 0; i < tmpData.length; i++) {
                    var coords = tmpData[i];
                    console.log(coords);
                    var _coords = coords.split(',');
                    console.log(_coords);
                    var LatLng = new google.maps.LatLng(parseInt(_coords[0]), parseInt(_coords[1]));
                    console.log(LatLng);
                    addMarker(LatLng);
                }
            });
                
        }    
    
        // Deletes all markers in the array by removing references to them.
        function clearMarkers() {
          da.markers.forEach(function(el,i){
                el.setMap(null);
            });
            da.markers.clear();
        }
       
        //Marker which contains Lat/Lng position.
        /*
        var infowindow = new google.maps.InfoWindow({
            content: '<p>Marker Location:' + da.markers.getPosition() + '</p>'
            });

            google.maps.event.addListener(markers, 'click', function() {
                infowindow.open(da.map, markers);
            });
            console.log('Marker Posistion');
            */
            
            function makeLegend() {
            //console.log("Creating");
            
            //Hide Button
            var red = document.createElement('div');
            red.style.marginBottom = '8';
            var redBtn = document.createElement('button');
            redBtn.innerText = 'Hide Markers';
            redBtn.style.marginRight = '10px';
            redBtn.style.verticalAlign = 'top';
            google.maps.event.addDomListener(redBtn, 'click', hideMarkers);
            red.appendChild(redBtn);
            
            //Show Button
            var blue = document.createElement('div');
            blue.style.marginBottom = '8';
            var blueBtn = document.createElement('button');
            blueBtn.innerText = 'Show Markers';
            blueBtn.style.marginRight = '10px';
            blueBtn.style.verticalAlign = 'top';
            google.maps.event.addDomListener(blueBtn, 'click', showMarkers);
            red.appendChild(blueBtn);
            
            //Save Button
            var save = document.createElement('div');
            save.style.marginBottom = '8';
            var saveBtn = document.createElement('button');
            saveBtn.innerText = 'Save Markers';
            saveBtn.style.marginRight = '10px';
            saveBtn.style.verticalAlign = 'top';
            google.maps.event.addDomListener(saveBtn, 'click', saveMarkers);
            save.appendChild(saveBtn);
            
            //Clear Button
            var clear = document.createElement('div');
            clear.style.marginBottom = '8';
            var clearBtn = document.createElement('button');
            clearBtn.innerText = 'Clear Markers';
            clearBtn.style.marginRight = '10px';
            clearBtn.style.verticalAlign = 'top';
            google.maps.event.addDomListener(clearBtn, 'click', clearMarkers);
            clear.appendChild(clearBtn);
            
            //New Marker Button
            var green = document.createElement('div');
            green.style.marginBottom = '8';
            var greenBtn = document.createElement('button');
            greenBtn.innerText = 'Get Markers';
            greenBtn.style.marginRight = '10px';
            greenBtn.style.verticalAlign = 'top';
            google.maps.event.addDomListener(greenBtn, 'click', getMarkers);
            green.appendChild(greenBtn);
                
            var heading = document.createElement('h3');
            heading.style.verticalAlign = 'top';
            heading.appendChild(document.createTextNode('Legend'));
            
            var mapLegend = document.createElement('div');
            mapLegend.id = 'legend';
            mapLegend.style.backgroundColor = 'white';
            mapLegend.style.padding = '20px';
            mapLegend.style.opacity = '0.7';
            mapLegend.style.display = 'none';
            
            mapLegend.appendChild(heading);
            mapLegend.appendChild(red);
            mapLegend.appendChild(blue);
            mapLegend.appendChild(clear);
            mapLegend.appendChild(save);
            mapLegend.appendChild(green);
            
            //console.log(mapLegend);
            //console.log(da.map.controls);
            
            da.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(mapLegend);
            
            mapLegend.style.display = 'block';
            }
        }