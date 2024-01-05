getBirthdayMessage();

function getBirthdayMessage() {
  let url = window.location.href;
  let regexName = new RegExp("name" + "(=([^&#]*))");
  let resultsName = regexName.exec(url);
  let regexSeg = new RegExp("seg" + "(=([^&#]*))");
  let resultsSeg = regexSeg.exec(url);

  if (resultsName == null) {
    birthdayName = "Nata";
  } else {
    birthdayName = decodeURIComponent(resultsName[2]);
  }

  if (resultsSeg == null) {
    birthdaySeg = "general";
  } else {
    birthdaySeg = decodeURIComponent(resultsSeg[2]);
  }

  if (birthdaySeg == "fundraisers") {
    document.getElementById("letter").innerHTML =
      "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>Hai cantik, selamat ulang tahun, terimakasih telah menjadi kuat sampai saat ini, lihat kamu sudah melalui banyak hal kamu hebat karena tidak menyerah dan bisa sampai dititik ini, terimakasih juga sudah menjadi manusia baik. I am always proud off you!<br></br>Perjalanan masih jauh akan banyak rintangan yang harus dilalui semoga diberikan kekuatan dan ketabahan untuk kedepannya, dapat menjadi pribadi yang lebih baik lagi, dilancarkan rezekinya, sehat selalu, dan lebih banyak bahagia kedepannya.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>";
  } else {
    document.getElementById("letter").innerHTML =
      "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px;'>Hai cantik, selamat ulang tahun, terimakasih telah menjadi kuat sampai saat ini, lihat kamu sudah melalui banyak hal kamu hebat karena tidak menyerah dan bisa sampai dititik ini, terimakasih juga sudah menjadi manusia baik. I am always proud off you!<br></br>Perjalanan masih jauh akan banyak rintangan yang harus dilalui semoga diberikan kekuatan dan ketabahan untuk kedepannya, dapat menjadi pribadi yang lebih baik lagi, dilancarkan rezekinya, sehat selalu, dan lebih banyak bahagia kedepannya.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div></div>";
  }
}
