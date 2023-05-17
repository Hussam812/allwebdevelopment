(function(){
    "use strict"
    document.getElementById('convert').addEventListener('submit', function(evt){
        evt.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        var answer = document.getElementById('answers');

        if (distance){
            var conversion = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} Mile converts to ${conversion} Kilometers</h2>`;
        
        }else{
            answer.innerHTML = `<h2>Plese provide a number!</h2>`;
        }

       });
})();