
function startUpCompetition(startUpList) {
    let counter = 0
    let hasil = 'Startup unicorn'
    if(!startUpList){
        return 'Invalid Data'
    }
    for(let i = 0;i < startUpList.length;i++){
        let nama =[]
        for(let j =1;j<startUpList[i].length;j++){
            let startUp = ''
            let valuasi = ''
            for(let k = 0 ;k < startUpList[i][j].length;k++){
                if(Number(startUpList[i][j][k])){
                   valuasi += startUpList[i][j][k]
                }else if(startUpList[i][j][k] !== '-'){
                    startUp += startUpList[i][j][k]
                }
            }
            if(valuasi >= 14){
                counter++
                nama.push(startUp)
            }
        }
        if(nama.length > 0){
            hasil += `\n ${startUpList[i][0]},${nama.length} startup (${nama })`
        }else{
            hasil += `\n ${startUpList[i][0]} (tidak ada startup unicorn)`
        }
        
    }hasil +=  `\n Total ${counter} startup unicorn`
    return hasil
}
console.log(startUpCompetition())
// 'Invalid Data'

let indonesia = [
  ['Ecommerce', 'Tikipidia-17', 'Bikilipik-08', 'Bhinniki-07', 'BleBle.cim-15'],
  ['Tourism', 'Triviliki-16', 'Tikit.cim-12'],
  ['Healthtech', 'Hilidic-15'],
  ['Agrotech', 'Siyirbix-17', 'TikingSiyir.ci-16']
]
console.log(startUpCompetition(indonesia))
// Startup unicorn
// Ecommerce, 2 startup (Tikipidia, BleBle.cim)
// Tourism, 1 startup (Triviliki)
// Healthtech, 1 startup (Hilidic)
// Agrotech, 2 startup (Siyirbix, TikingSiyir.ci)
// Total 6 startup unicorn

let singapore = [
  ['Ecommerce', 'Shipee-18', 'Lizidi-19'],
  ['Tourism', 'HalalTrip-07', 'verylocaltrip.com-12'],
  ['Healthtech', 'Doctor Anywhere-14', 'Healint-13'],
  ['Agrotech', 'SINGROW-19', 'Simplyfresh-09', 'eFeedLink-18']
]
console.log(startUpCompetition(singapore))
// Startup unicorn
// Ecommerce, 2 startup (Shipee, Lizidi)   
// Tourism (tidak ada startup unicorn)
// Healthtech, 1 startup (Doctor Anywhere) 
// Agrotech, 2 startup (SINGROW, eFeedLink)
// Total 5 startup unicorn

let malaysia = [
  ['Ecommerce', 'Dropee-17'],
  ['Healthtech', 'BookDoc-18'],
  ['Agrotech', 'dahmakan-19'],
]
console.log(startUpCompetition(malaysia))
// Startup unicorn
// Ecommerce, 1 startup (Dropee)
// Healthtech, 1 startup (BookDoc)
// Agrotech, 1 startup (dahmakan)
// Total 3 startup unicorn
