/*
Tekur upl. frá Epic store og bútar þær niður í þægilegri bita.
Skilar síðan random leikjum til baka.
*/


function getWide(data: any) {
	const index = data.findIndex(
		(item: { type: string }) => item.type === "OfferImageWide"
	);
	if(!index) {
		console.log("no url");
	}
	return index;
}

function getTall(data: any) {
	const index = data.findIndex(
		(item: { type: string }) => item.type === "OfferImageTall"
	);
	return index;
}

export function getData(data: any, num: number) {
	const CleanData = [] as any;
	var i = 0;
	var leni = num;

	while (i < leni) {
		var rand = Math.floor(Math.random() * 100);
		CleanData.push({
			id: data[rand].id,
			title: data[rand].title,
			img: {
				tall: data[rand].keyImages[getTall(data[rand].keyImages)].url,
				wide: data[rand].keyImages[getWide(data[rand].keyImages)].url,
			},
			company: data[rand].developerDisplayName,
			description: data[rand].description,
			price: {
				discountPrice: data[rand].price.totalPrice.fmtPrice.discountPrice,
				originalPrice: data[rand].price.totalPrice.fmtPrice.originalPrice,
				discount:
					Math.floor(
						(data[rand].price.totalPrice.discountPrice /
							data[rand].price.totalPrice.originalPrice) *
							100
					)- 100 +
					"%",
			},
		});
		i++;
	}
	return [CleanData];
}
