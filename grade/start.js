// Start-Up Competition
// RESTRICTION
// Dilarang menggunakan built-in function
// HINTS
// Gunakan built-in function .push()! Nama function haruslah startUpList dan tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah
// Objectives
// Mampu melakukan manipulasi pada sebuah Array dengan built-in function Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
// Directions
// Start-Up Competition adalah sebuah lomba start-up international yang di adakan tiap tahun.
// Salah satu syarat kompetisi adalah startup yang diikutsertakan harus minimal berperingkat Unicorn, yaitu bila valuasi startup tersebut bernilai 14 Trilyun ke atas. Panitia diharuskan mengelompokkan dan melakukan filter terhadap data-data startup dari tiap negara. Filter dilakukan berdasarkan nilai valuasi startup.

// Diberikan sebuah function startUpCompetition yang dapat menerima 1 parameter yaitu startUpList dengan tipe data array multi dimensi.

// Buatlah program di dalam function startUpCompetition sehingga dapat memfilter startup yang berperingkat Unicorn dan mengelompokkannya ke dalam bidang masing-masing.

// Pastikan kode kamu bisa menjalankan semua test case yang diberikan!

// NOTES:

// Jika parameter input nya selain array, maka output akan mengeluarkan Invalid Data. Filter dilakukan berdasarkan nilai valuasi. Index 0 dari element array berisi nama bidang dari startup tersebut. Index selanjutnya adalah kumpulan nama-nama startup. Nama startup diikuti dengan nilai valuasinya, pada dua karakter akhir dari nama startup tersebut, dipisahkan dengan karakter strip ('-').
// input berupa array multi dimensi
// [
//   [
//     '<bidang startup>',    // index 0 sebagai bidang startup
//     '<nama startup>-<valuasi startup>',  // nama startup-nilai valuasi
//   ]
// ]

// contoh input:
// [
//   [
//     'Ecommerce',    // index 0 sebagai bidang startup 'Ecommerce'
//     'Tikipidia-17', // nama startup 'Tikipidia', nilai valuasi 17 T
//     'Bhinniki-07'   // nama startup 'Bhinniki', nilai valuasi 7 T
//   ],
//   [
//     'Tourism',      // index 0 sebagai bidang startup 'Tourism'
//     'Triviliki-10'  // nama startup 'Triviliki', nilai valuasi 10 T
//   ]
// ]

// output berupa string
// `Startup unicorn
// <bidang startup>, <jumlah startup unicorn> startup (<nama startup>)
// Total <jumlah semua startup unicorn> startup unicorn`

// contoh output:
// `Startup unicorn
// Ecommerce, 1 startup (Tikipidia)
// Tourism (tidak ada startup unicorn)
// Total 1 startup unicorn`

// penjelasan:
// Nilai valuasi minimum adalah 14 T
// Bidang Ecommerce
// Startup Tikipidia lolos syarat karena valuasi nya bernilai 17 T
// Startup Bhinniki tidak lolos syarat karena valuasi nya bernilai 7 T
// Bidang Tourism
// Startup Triviliki tidak lolos syarat karena valuasi nya bernilai 10 T
// function startUpCompetition(startUpList) {
//   // Write your code here


function startUpCompetition(startUpList) {
  if (typeof startUpList !== 'object') return 'Invalid Data';
  const winningList = [];
  let countTotalStartUp = 0
  const minimumValuation = 14;
  let generateText = '';
  for (let i = 0; i < startUpList.length; i++) {
    const data = { bidang: startUpList[i][0], list: [] }
    for (let j = 1; j < startUpList[i].length; j++) {
      const startUpSplit = startUpList[i][j].split('-')
      const startUpValuation = startUpSplit[1]
      if (+startUpValuation > minimumValuation) {
        data.list.push(startUpSplit[0])
        countTotalStartUp++
      }
    }
    winningList.push(data)
  }
  for (let i = 0; i < winningList.length; i++) {
    generateText = generateText + `\n${winningList[i].bidang}`
    if (winningList[i].list.length) {
      generateText = generateText + `, ${winningList[i].list.length} (${winningList[i].list.join(', ')})`
    } else {
      generateText = generateText + ' (tidak ada startup unicorn)'
    }
  }
  const convertToString = `Startup unicorn${generateText}\nTotal ${countTotalStartUp} startup unicorn`
  return convertToString;

}
// function startUpCompetition(startUpList){
//     if(startUpList!==[]){
//         console.log('Invalid Data')
//     } else {
//         for(let i=0;i<startUpList.length;i++){
//             for(let j=1;j<startUpList[i].length;j++){
//                 for(let k=0;k<startUpList[i][j].length;k++){
//                               console.log(startUpList[i][j][k])
//                 }
//             }          
//             // if (startUpList.number < 14){
//             //     let temp=[]
//             //     temp.push (startUplist)
//             // }
//         }
//     }
//     return startUpList;
    
// }


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

