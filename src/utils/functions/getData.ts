/*
Tekur upl. frá Epic store og bútar þær niður í þægilegri bita.
Skilar síðan random leikjum til baka.
*/

function getWide(data: any) {
  const index = data.findIndex(
    (item: { type: string }) => item.type === "OfferImageWide"
  );
  return index;
}

function getTall(data: any) {
  const index = data.findIndex(
    (item: { type: string }) => item.type === "OfferImageTall"
  );
  return index;
}

// developer name er ekki alltaf á sama stað.
// Hér skoðum við tvo staði.
function getDeveloper(first: string, sec: any) {
  if (first === null) {
    const index = sec.findIndex(
      (item: { key: string }) => item.key === "publisherName"
    );
    if (index === -1) {
      return "no name on file";
    } else {
      return sec[index].value;
    }
  } else {
    return first;
  }
}

export function getData(data: any, num: number) {
  const info = [] as any;
  var i = 0;
  var leni = num;

  while (i < leni) {
    var rand = Math.floor(Math.random() * 100);
    info.push({
      id: data[rand].id,
      title: data[rand].title,
      img: {
        tall: data[rand].keyImages[getTall(data[rand].keyImages)].url,
        wide: data[rand].keyImages[getWide(data[rand].keyImages)].url,
      },
      developer: getDeveloper(
        data[rand].developerDisplayName,
        data[rand].customAttributes
      ),
      description: data[rand].description,
      price: {
        discountPrice: data[rand].price.totalPrice.fmtPrice.discountPrice,
        originalPrice: data[rand].price.totalPrice.fmtPrice.originalPrice,
        discount:
          Math.floor(
            (data[rand].price.totalPrice.discountPrice /
              data[rand].price.totalPrice.originalPrice) *
              100
          ) -
          100 +
          "%",
      },
    });
    i++;
  }
  return [info];
}
