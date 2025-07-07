document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("busan-map");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    const namgu = svgDoc.getElementById("namgu");
    const haeundaegu = svgDoc.getElementById("haeundaegu");
    const dongnaegu = svgDoc.getElementById("dongnaegu");
    const yeonjegu = svgDoc.getElementById("yeonjegu");
    const suyeonggu = svgDoc.getElementById("suyeonggu");
    const geumjeonggu = svgDoc.getElementById("geumjeonggu");
    const bukgu = svgDoc.getElementById("bukgu");
    const gijanggun = svgDoc.getElementById("gijanggun");
    const busanjingu = svgDoc.getElementById("busanjingu");
    const sasanggu = svgDoc.getElementById("sasanggu");
    const donggu = svgDoc.getElementById("donggu");
    const seogu = svgDoc.getElementById("seogu");
    const sahagu = svgDoc.getElementById("sahagu");
    const junggu = svgDoc.getElementById("junggu");
    const yeongdogu = svgDoc.getElementById("yeongdogu");
    const gangseogu1 = svgDoc.getElementById("gangseogu1");
    const gangseogu2 = svgDoc.getElementById("gangseogu2");


    const infoNamgu = document.getElementById("info-namgu");
    const infoHaeundae = document.getElementById("info-haeundaegu");
    const infoDongnae = document.getElementById("info-dongnaegu");
    const infoYeonje = document.getElementById("info-yeonjegu");
    const infoSuyeong = document.getElementById("info-suyeonggu");
    const infoGeumjeong = document.getElementById("info-geumjeonggu");
    const infoBukgu = document.getElementById("info-bukgu");
    const infoGijang = document.getElementById("info-gijanggun");
    const infoBusanjin = document.getElementById("info-busanjingu");
    const infoSasang = document.getElementById("info-sasanggu");
    const infoDonggu = document.getElementById("info-donggu");
    const infoSeogu = document.getElementById("info-seogu");
    const infoSaha = document.getElementById("info-sahagu");
    const infoJung = document.getElementById("info-junggu");
    const infoYeongdo = document.getElementById("info-yeongdogu");
    const infoGangseo1 = document.getElementById("info-gangseogu1");
    const infoGangseo2 = document.getElementById("info-gangseogu2");


    if (namgu) {
      namgu.addEventListener("mouseenter", () => {
        namgu.setAttribute("fill", "#FFA500"); // 주황색
        infoNamgu.style.display = "block";
        infoHaeundae.style.display = "none";
      });

      namgu.addEventListener("mouseleave", () => {
        namgu.setAttribute("fill", "#FFFFFF");
        infoNamgu.style.display = "none";
      });
    }

    if (haeundaegu) {
      haeundaegu.addEventListener("mouseenter", () => {
        haeundaegu.setAttribute("fill", "#87CEFA"); // 하늘색
        infoHaeundae.style.display = "block";
        infoNamgu.style.display = "none";
      });

      haeundaegu.addEventListener("mouseleave", () => {
        haeundaegu.setAttribute("fill", "#FFFFFF");
        infoHaeundae.style.display = "none";
      });
    }
    if (dongnaegu) {
      dongnaegu.addEventListener("mouseenter", () => {
        dongnaegu.setAttribute("fill", "#FFB6C1"); // 연분홍색
        infoDongnae.style.display = "block";

        infoNamgu.style.display = "none";
        infoHaeundae.style.display = "none";
      });

      dongnaegu.addEventListener("mouseleave", () => {
        dongnaegu.setAttribute("fill", "#FFFFFF");
        infoDongnae.style.display = "none";
      });
    }
    if (yeonjegu) {
      yeonjegu.addEventListener("mouseenter", () => {
      yeonjegu.setAttribute("fill", "#90EE90"); // 연두색
      infoYeonje.style.display = "block";

      // 다른 구 정보 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
    });

    yeonjegu.addEventListener("mouseleave", () => {
      yeonjegu.setAttribute("fill", "#FFFFFF");
      infoYeonje.style.display = "none";
    });
  }
    if (suyeonggu) {
    suyeonggu.addEventListener("mouseenter", () => {
      suyeonggu.setAttribute("fill", "#ADD8E6"); // 밝은 파랑
      infoSuyeong.style.display = "block";

      // 다른 구 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
    });

    suyeonggu.addEventListener("mouseleave", () => {
      suyeonggu.setAttribute("fill", "#FFFFFF");
      infoSuyeong.style.display = "none";
    });
  }
    if (geumjeonggu) {
    geumjeonggu.addEventListener("mouseenter", () => {
      geumjeonggu.setAttribute("fill", "#FFDAB9"); // 복숭아색
      infoGeumjeong.style.display = "block";

      // 다른 구 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
    });

    geumjeonggu.addEventListener("mouseleave", () => {
      geumjeonggu.setAttribute("fill", "#FFFFFF");
      infoGeumjeong.style.display = "none";
    });
  }
    if (bukgu) {
    bukgu.addEventListener("mouseenter", () => {
      bukgu.setAttribute("fill", "#E6E6FA"); // 연보라색
      infoBukgu.style.display = "block";

      // 다른 구 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
    });

    bukgu.addEventListener("mouseleave", () => {
      bukgu.setAttribute("fill", "#FFFFFF");
      infoBukgu.style.display = "none";
    });
  }
    if (gijanggun) {
    gijanggun.addEventListener("mouseenter", () => {
      gijanggun.setAttribute("fill", "#FFE4B5"); // 밀크티색
      infoGijang.style.display = "block";

      // 다른 구군 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
    });

    gijanggun.addEventListener("mouseleave", () => {
      gijanggun.setAttribute("fill", "#FFFFFF");
      infoGijang.style.display = "none";
    });
  }
    if (busanjingu) {
    busanjingu.addEventListener("mouseenter", () => {
      busanjingu.setAttribute("fill", "#F08080"); // 연한 살구색
      infoBusanjin.style.display = "block";

      // 다른 구/군 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
    });

    busanjingu.addEventListener("mouseleave", () => {
      busanjingu.setAttribute("fill", "#FFFFFF");
      infoBusanjin.style.display = "none";
    });
  }
    if (sasanggu) {
    sasanggu.addEventListener("mouseenter", () => {
      sasanggu.setAttribute("fill", "#E0FFFF"); // 밝은 하늘색
      infoSasang.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
    });

    sasanggu.addEventListener("mouseleave", () => {
      sasanggu.setAttribute("fill", "#FFFFFF");
      infoSasang.style.display = "none";
    });
  }
    if (donggu) {
    donggu.addEventListener("mouseenter", () => {
      donggu.setAttribute("fill", "#FFEFD5"); // 파파야색
      infoDonggu.style.display = "block";

      // 다른 구/군 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
    });

    donggu.addEventListener("mouseleave", () => {
      donggu.setAttribute("fill", "#FFFFFF");
      infoDonggu.style.display = "none";
    });
  }
    if (seogu) {
    seogu.addEventListener("mouseenter", () => {
      seogu.setAttribute("fill", "#FAFAD2"); // 밝은 노랑
      infoSeogu.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
    });

    seogu.addEventListener("mouseleave", () => {
      seogu.setAttribute("fill", "#FFFFFF");
      infoSeogu.style.display = "none";
    });
  }
    if (sahagu) {
    sahagu.addEventListener("mouseenter", () => {
      sahagu.setAttribute("fill", "#FFD3E0"); // 연핑크
      infoSaha.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
    });

    sahagu.addEventListener("mouseleave", () => {
      sahagu.setAttribute("fill", "#FFFFFF");
      infoSaha.style.display = "none";
    });
  }
    if (junggu) {
    junggu.addEventListener("mouseenter", () => {
      junggu.setAttribute("fill", "#D8BFD8"); // 연보라
      infoJung.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
    });

    junggu.addEventListener("mouseleave", () => {
      junggu.setAttribute("fill", "#FFFFFF");
      infoJung.style.display = "none";
    });
  }
    if (yeongdogu) {
    yeongdogu.addEventListener("mouseenter", () => {
      yeongdogu.setAttribute("fill", "#C0E8D5"); // 연청녹
      infoYeongdo.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
    });

    yeongdogu.addEventListener("mouseleave", () => {
      yeongdogu.setAttribute("fill", "#FFFFFF");
      infoYeongdo.style.display = "none";
    });
  }
    if (gangseogu1) {
    gangseogu1.addEventListener("mouseenter", () => {
      gangseogu1.setAttribute("fill", "#CCFFCC"); // 연녹색
      infoGangseo1.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
      infoYeongdo.style.display = "none";
      infoGangseo.style.display = "none";
      infoGangseo2 && (infoGangseo2.style.display = "none");
    });

    gangseogu1.addEventListener("mouseleave", () => {
      gangseogu1.setAttribute("fill", "#FFFFFF");
      infoGangseo1.style.display = "none";
    });
  }
    if (gangseogu2) {
    gangseogu2.addEventListener("mouseenter", () => {
      gangseogu2.setAttribute("fill", "#FFFFCC"); // 연노랑
      infoGangseo2.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
      infoYeongdo.style.display = "none";
      infoGangseo1 && (infoGangseo1.style.display = "none");
    });

    gangseogu2.addEventListener("mouseleave", () => {
      gangseogu2.setAttribute("fill", "#FFFFFF");
      infoGangseo2.style.display = "none";
    });
  }
  });
});

    