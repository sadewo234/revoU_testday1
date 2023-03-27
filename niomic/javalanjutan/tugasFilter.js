function panggilFilterParameters() {
    var arr = [
      {negara: 'Indonesia', benua: 'Asia'},
      {negara: 'Jerman', benua: 'Eropa'},
      {negara: 'Spanyol', benua: 'Eropa'},
      {negara: 'Korea', benua: 'Asia'},
      {negara: 'Portugal', benua: 'Eropa'},
      {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];
   
    var benuaEropa = arr.filter(function(item) {
         // Tulis Code Kamu Disini
         return item.benua === `Eropa`
    });

    var benuaAsia = arr.filter(function(item) {
        // Tulis Code Kamu Disini
        return item.benua === `Asia`
   });
   
    console.log(benuaAsia);
   }

   console.log(panggilFilterParameters(

    
   ));