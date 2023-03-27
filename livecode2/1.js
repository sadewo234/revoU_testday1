function getStartUp(arr) {
    // Write your code here
let result = []


     for (i=0 ; i <arr.length ; i++){
        // console.log(arr[i]);
        let temp = ''
        let type = arr [i] [arr[i].length-1]
        // console.log(arr[i]);
        for(j=0; j<arr[i].length-2;j++){
            // console.log(arr[i][j]);
            temp += arr[i][j]
            // console.log(temp);
        } let position = 0
            if(type === 'T'){
                position = 1
            } else if (type === 'H'){
                position = 2
            } else if ( type === 'A'){
                position = 3
            } if (!result[position] || result [position].length < arr[i].length-2){
                result[position] = temp
            }
   
    
  }
  return result
}
  
  //Test Case 
  
  console.log(getStartUp(['Bikilipik-E','Tikit.cim-T','Ilidiktir-H', 'TiniHib-A']))
  // [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]
  
  console.log(getStartUp(['Lizidi-E', 'Iirbnb-T', 'TikingSiyir.ci-A', 'PriSihit-H', 'DiktirSihit-H', 'eFishiry-A', 'babaAli-E', 'eMeat-A']))
//   // [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]
  
  console.log(getStartUp(['Tikipidia-E', 'Triviliki-T', 'Hilidic-H', 'Siyirbix-A','Shipee-E','Bhinniki-E', 'BleBle.cim-E', 'PigiPigi-T', 'tomazo-A']))
//   // [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]
  
  console.log(getStartUp(['FoGoods-A', 'FoMarts-E', 'Lazora-E', 'eFruit-A', 'FoHealth-H', 'FoTravel-T', 'HaiDoc-H', 'ticket.net-T']))
//   // [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]


//   Initial bidang => Nama Bidang
// E => E-Commerce
// T => Tourism
// H => Healthtech
// A => Agrotech