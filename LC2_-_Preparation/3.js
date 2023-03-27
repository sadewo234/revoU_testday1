function getPoints(history) {
    let itemPoint = {
        'Moonlight': 120,
        'Goldqueen': 550,
        'Beras Parist': 1200,
        'Minyak Fatma': 2500
    }
    // write your code here
    
    let totalPoint = 0, belanjaanReport = {}
        for (i = 0; i < history.length; i++) {
        if (itemPoint.hasOwnProperty(history[i])) {
            totalPoint += itemPoint[history[i]]
            if(!belanjaanReport[history[i]]) {
                belanjaanReport[history[i]] = 0
            }
            belanjaanReport[history[i]] ++
        }
    }
    return {
        totalPoint,
        belanjaanReport
    }
}

function getPrizes(point) {
    // write your code here
    let listPrize = [
        [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
        [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
        [10000, 'Payung', 'Panci']
      ]
      
      let output = []
      for (i = 0; i < listPrize.length; i++) {
        const price = listPrize[i][0]
        for (j = 1; j < listPrize[i].length; j++) {
            const el = listPrize[i][j]
            if (point >= price) {
                output.push(el)
                point -= price
            }
        }
    }
    return output
}
function betamart(pembeli) {
    // write your code here
    if (!pembeli) {
        return 'Tidak ada pembeli yang belanja'
    }
    let point = getPoints(pembeli.histories)
    let prizes = getPrizes(point.totalPoint)
    
    return {
        name : pembeli.name,
        belanjaanReport : point.belanjaanReport,
        prizes
    }
}

console.log(
    betamart({
        name: 'Ilham',
        histories: [
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
    betamart({
        name: 'Kosasih',
        histories: [
            'Moonlight',
            'Moonlight',
            'Goldqueen',
            'Moonlight',
            'Minyak Fatma',
            'Goldqueen',
            'Beras Parist',
            'Beras Parist',
            'Beras Parist',
            'Moonlight',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Moonlight',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja