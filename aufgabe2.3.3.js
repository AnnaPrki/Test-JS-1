let balance = 500;
const paketCosten =100;
const smsCode = "A001DFXO";
const idPaket = "1432HGF";
const cellNumber = 4;
const postLockers = [null, null,null, "1432HGF",null]

function receivePaket(code) {
  const paketIndex = postLockers.indexOf(code);
     if (balance >= paketCosten) {
      balance -= paketCosten;
      console.log(`Заберите посылку ${idPaket} из ячейки №${cellNumber}. Ваш счет составляет: ${balance}ед.`);
    } 
  }

receivePaket(smsCode)