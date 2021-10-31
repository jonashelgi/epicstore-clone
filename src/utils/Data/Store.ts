/*
This is data fetched from the epic store website.
In total there are 117 games here.
https://www.epicgames.com/graphql?operationName=searchStoreQuery&variables=%7B%22allowCountries%22:%22IS%22,%22category%22:%22games%2Fedition%2Fbase%7Csoftware%2Fedition%2Fbase%7Ceditors%7Cbundles%2Fgames%22,%22count%22:40,%22country%22:%22IS%22,%22keywords%22:%22%22,%22locale%22:%22en-US%22,%22releaseDate%22:%22[,2021-10-30T23:59:59.999Z]%22,%22sortBy%22:%22releaseDate%22,%22sortDir%22:%22DESC%22,%22tag%22:%22%22,%22withPrice%22:true%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%22f45c217481a66dd17324fbb288509bac7a2d81762e72518cb9d448a0aec43350%22%7D%7D
*/

const StoreData = {
	games: [
		{
			title: "Dark Deception",
			id: "feb54dfc423448a98cd15c5ef44c9b69",
			namespace: "bddbb30a6c36455a9ca82c3a0f91af06",
			description:
				"Dark Deception is a spoopy horror maze adventure game. Fight your way through nightmarish mazes as you seek to change your fate. Run or die. The choice is yours.  Dark Deception consists of 5 chapters. Chapter 5 is still unreleased & will be added later.",
			effectiveDate: "2021-10-30T00:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkDeceptionChapter1_GlowstickEntertainment_S2_1200x1600-d78ac15e7a36e14c579c8c1e5d67699a",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkDeceptionChapter1_GlowstickEntertainment_S2_1200x1600-d78ac15e7a36e14c579c8c1e5d67699a",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkDeceptionChapter1_GlowstickEntertainment_S1_2560x1440-fc95a66604448613a4040e6cdd7ff2ea",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkDeceptionChapter1_GlowstickEntertainment_S2_1200x1600-d78ac15e7a36e14c579c8c1e5d67699a",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkDeceptionChapter1_GlowstickEntertainment_S1_2560x1440-fc95a66604448613a4040e6cdd7ff2ea",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkDeceptionChapter1_GlowstickEntertainment_S2_1200x1600-d78ac15e7a36e14c579c8c1e5d67699a",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-mmjqjlu9vs9qltdpm54xlmpqc5b3b4",
				name: "Glowstick Entertainment, Inc.",
			},
			productSlug: "dark-deception",
			urlSlug: "darkdeception-general-audience",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "bd43e70b792f47aab8a3b9573391ce73",
					namespace: "bddbb30a6c36455a9ca82c3a0f91af06",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "dark-deception",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "dark-deception",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Glowstick Entertainment, Inc.",
			publisherDisplayName: "Glowstick Entertainment, Inc.",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-30T00:00:00.000Z",
		},
		{
			title: "Dollhouse",
			id: "9f18e9d2b6714248b6c1c474e43e6309",
			namespace: "7d1513e400224d02bec9a57387c101b7",
			description:
				"Dollhouse is a frightening film noir horror story sure to send shivers down your spine. Survive a horrifying trip into the mind of detective Marie. Piece your past together, but watch your back, as something gravely dangerous is hunting you down.",
			effectiveDate: "2021-10-29T08:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/bc305b78a8ed460aa9a386532943fce6/download-dollhouse-offer-ty8ua.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/bc305b78a8ed460aa9a386532943fce6/dollhouse-offer-15qi7.jpg",
				},
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/bc305b78a8ed460aa9a386532943fce6/dollhouse-offer-logo-1961b.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/bc305b78a8ed460aa9a386532943fce6/dollhouse-offer-1na38.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/bc305b78a8ed460aa9a386532943fce6/download-dollhouse-offer-udjt3.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/bc305b78a8ed460aa9a386532943fce6/download-dollhouse-offer-udjt3.jpg",
				},
			],
			currentPrice: 1998,
			seller: {
				id: "o-9uf2bsrkptwqbkpy867grcbj5jxrta",
				name: "SOEDESCO",
			},
			productSlug: null,
			urlSlug: "2c0981c86de84c0597befa7651055932",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1294",
				},
			],
			items: [
				{
					id: "671e00c74e694e56bcd067c3b299754e",
					namespace: "7d1513e400224d02bec9a57387c101b7",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "dollhouse-de0de7",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "dollhouse-de0de7",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Creazn Studio",
			publisherDisplayName: "SOEDESCO",
			price: {
				totalPrice: {
					discountPrice: 1798,
					originalPrice: 1998,
					voucherDiscount: 0,
					discount: 200,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.98",
						discountPrice: "€17.98",
						intermediatePrice: "€17.98",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "45ded733b3444d289b39fe41a7207cb7",
								endDate: "2021-10-30T20:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-29T08:00:00.000Z",
		},
		{
			title: "Basingstoke",
			id: "74ecce9162d44f05a34e692c5f5c0458",
			namespace: "5bbeacb9481f4200965e10ac9eaf267d",
			description:
				"Basingstoke is a tense rogue-like that mixes stealth and arcade action. Explore the smouldering ruins of Basingstoke, a world of reanimated undead and ferocious alien monsters. Scavenge as you go, crafting equipment to help you in your mission: escape Basingstoke!",
			effectiveDate: "2021-10-29T00:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/3f65f6bde9da417f88208c90bb97a6a6/basingstoke-offer-logo-dt8x5.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/3f65f6bde9da417f88208c90bb97a6a6/basingstoke-offer-pf2wx.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/3f65f6bde9da417f88208c90bb97a6a6/download-basingstoke-offer-8t5yn.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/3f65f6bde9da417f88208c90bb97a6a6/basingstoke-offer-t9ic5.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/3f65f6bde9da417f88208c90bb97a6a6/download-basingstoke-offer-7a23n.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/3f65f6bde9da417f88208c90bb97a6a6/download-basingstoke-offer-8t5yn.jpg",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-k3grcp82k8tsv92ssellel58dvrda4",
				name: "Shaven Puppy Ltd",
			},
			productSlug: null,
			urlSlug: "d36f2045eb584c80ad117e04f35dbe23",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1084",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "9e701daa43744caa8e32c49cb5b738b0",
					namespace: "5bbeacb9481f4200965e10ac9eaf267d",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "basingstoke-16d446",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "basingstoke-16d446",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Puppygames",
			publisherDisplayName: "Puppygames",
			price: {
				totalPrice: {
					discountPrice: 1751,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 648,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€17.51",
						intermediatePrice: "€17.51",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "73c911e72e6e4fdd92273fe262be0e51",
								endDate: "2021-11-05T19:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-29T00:00:00.000Z",
		},
		{
			title: "Horror Story: Hallowseed",
			id: "1c5397e7c768490c8923aea72aacac9b",
			namespace: "880ca265d5914adf9a4c9cedf5f1fa89",
			description:
				"A story-driven psychological horror game. An obscure event causes your friends to disappear while you were camping in the woods. Alone and stranded in an unknown place, you need to seek the answers about what happened, face the horror and find your friends.",
			effectiveDate: "2021-10-28T17:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorrorStoryHallowseed_JeffWinner_S2_1200x1600-f5e817cf7d7b0ab4fe02b2734ad08fbb",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorrorStoryHallowseed_JeffWinner_S1_2560x1440-74fd7cb9f630b8f9285dec03fef053b4",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorrorStoryHallowseed_JeffWinner_S2_1200x1600-f5e817cf7d7b0ab4fe02b2734ad08fbb",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorrorStoryHallowseed_JeffWinner_S1_2560x1440-74fd7cb9f630b8f9285dec03fef053b4",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorrorStoryHallowseed_JeffWinner_S2_1200x1600-f5e817cf7d7b0ab4fe02b2734ad08fbb",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorrorStoryHallowseed_JeffWinner_S2_1200x1600-f5e817cf7d7b0ab4fe02b2734ad08fbb",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-n4d8bf5e8fnr4kujuut9j6v4d29muc",
				name: "1C Online Games Ltd",
			},
			productSlug: "horror-story-hallowseed",
			urlSlug: "horror-story-hallowseed",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "0ff7fb9f27cd496485c94973a5b7101d",
					namespace: "880ca265d5914adf9a4c9cedf5f1fa89",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "1C Online Games Ltd",
				},
				{
					key: "developerName",
					value: "1C Online Games Ltd",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "horror-story-hallowseed",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "horror-story-hallowseed",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 400,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "0d3a0c60b7e64c52b0bd65bf1fab8eaa",
								endDate: "2021-11-04T17:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-28T17:00:00.000Z",
		},
		{
			title: "Through the Woods",
			id: "8236641066244bd4859141d79bf2f75e",
			namespace: "6583533b1cb942238a213a29a2b80624",
			description:
				"Through the Woods is a third-person Norse horror adventure set in a forest on the western shores of Norway that tells the story of a mother and her missing son.",
			effectiveDate: "2021-10-28T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/c93463df2c994f1385005c3ce5e60a26/through-the-woods-offer-logo-1t2s7.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/c93463df2c994f1385005c3ce5e60a26/through-the-woods-offer-c6e31.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/c93463df2c994f1385005c3ce5e60a26/download-through-the-woods-offer-1l65e.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/c93463df2c994f1385005c3ce5e60a26/through-the-woods-offer-18s2g.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/c93463df2c994f1385005c3ce5e60a26/download-through-the-woods-offer-kj0tm.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/c93463df2c994f1385005c3ce5e60a26/download-through-the-woods-offer-1l65e.jpg",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-n4d8bf5e8fnr4kujuut9j6v4d29muc",
				name: "1C Online Games Ltd",
			},
			productSlug: null,
			urlSlug: "ab15bba1f63e4a77a8a584abd76faff6",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1381",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "adff9bd8e8354aff8a36ce24eb1df149",
					namespace: "6583533b1cb942238a213a29a2b80624",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "through-the-woods-4dad49",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "through-the-woods-4dad49",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Antagonist",
			publisherDisplayName: "1C Entertainment",
			price: {
				totalPrice: {
					discountPrice: 319,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 1280,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€3.19",
						intermediatePrice: "€3.19",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "a58a0fcc0c724624bb7c90094d187614",
								endDate: "2021-11-04T18:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-28T17:00:00.000Z",
		},
		{
			title: "Subway Midnight",
			id: "7971b04470dd4c0b88e64b0efb3ff00b",
			namespace: "13180a791ee14446b54d69acd1748d0c",
			description:
				"Board the train! Run away from a weirdo! Solve some puzzles! Make friends with some ghosts! Try not to become a ghost yourself!",
			effectiveDate: "2021-10-28T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/d41aae3b56bf480fabe7545e453f1139/subway-midnight-offer-logo-1l1jw.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/d41aae3b56bf480fabe7545e453f1139/subway-midnight-offer-yyd7q.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/d41aae3b56bf480fabe7545e453f1139/download-subway-midnight-offer-iku5m.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/d41aae3b56bf480fabe7545e453f1139/download-subway-midnight-offer-tqzlu.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/d41aae3b56bf480fabe7545e453f1139/subway-midnight-offer-1xsa0.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/d41aae3b56bf480fabe7545e453f1139/download-subway-midnight-offer-iku5m.jpg",
				},
			],
			currentPrice: 799,
			seller: {
				id: "o-xdu84htkkjtfmjwbdk4a54drctk46l",
				name: "Aggro Crab",
			},
			productSlug: null,
			urlSlug: "23d9365357c24554a76a0b0fb8893c64",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1298",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "9bd313859ef944618c2bbdb4ac63dc57",
					namespace: "13180a791ee14446b54d69acd1748d0c",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "subway-midnight-cad3ad",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "subway-midnight-cad3ad",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Bubby Darkstar",
			publisherDisplayName: "Aggro Crab",
			price: {
				totalPrice: {
					discountPrice: 719,
					originalPrice: 799,
					voucherDiscount: 0,
					discount: 80,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€7.99",
						discountPrice: "€7.19",
						intermediatePrice: "€7.19",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "fe4eade9babe45f9b3bb5d68236b4cc2",
								endDate: "2021-11-01T17:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-28T17:00:00.000Z",
		},
		{
			title: "Blasphemous",
			id: "bf0198be86de4b168f1f1e94930163bc",
			namespace: "eddb735dde6b47cda8193f2643cff886",
			description:
				"Blasphemous is a brutal action-platformer with skilled hack’n slash combat set in the nightmare world of Cvstodia. Explore, upgrade your abilities, and perform savage executions on the hordes of enemies who stand in your way.",
			effectiveDate: "2021-10-28T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Blasphemous_TheGameKitchen_S4_1200x1600-6f84bb2489771cb94c521bf429c50ef4",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Blasphemous_TheGameKitchen_S4_1200x1600-6f84bb2489771cb94c521bf429c50ef4",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Blasphemous_TheGameKitchen_S3_2560x1440-f1c45ef2a4224393a8fd9e7eb1b4b134",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Blasphemous_TheGameKitchen_S4_1200x1600-6f84bb2489771cb94c521bf429c50ef4",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Blasphemous_TheGameKitchen_S3_2560x1440-f1c45ef2a4224393a8fd9e7eb1b4b134",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Blasphemous_TheGameKitchen_S4_1200x1600-6f84bb2489771cb94c521bf429c50ef4",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-uvtztrtfjdn3xgrwyhbuwwb5z42mbv",
				name: "Team17 Digital Ltd",
			},
			productSlug: "blasphemous",
			urlSlug: "blasphemous",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1247",
				},
			],
			items: [
				{
					id: "01f47efebe0b4671b9119247e58173e2",
					namespace: "eddb735dde6b47cda8193f2643cff886",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Team17",
				},
				{
					key: "developerName",
					value: "The Game Kitchen",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "blasphemous",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "blasphemous",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "The Game Kitchen",
			publisherDisplayName: "Team17",
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-28T15:00:00.000Z",
		},
		{
			title: "DARQ: Complete Edition",
			id: "0af5da05c76943f8a7da7cc65949ffd4",
			namespace: "3819de76dedf4cd2aebbcf9279e23e43",
			description:
				"DARQ tells the story of Lloyd, a boy who finds himself in the middle of a lucid nightmare. Unable to wake up, Lloyd has to face his fears and decipher the meaning of the dream.",
			effectiveDate: "2021-10-28T15:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S2_1200x1600-d53e44ba5b0dc0e019ee698f02b6d300",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S2_1200x1600-d53e44ba5b0dc0e019ee698f02b6d300",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S2_1200x1600-d53e44ba5b0dc0e019ee698f02b6d300",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S2_1200x1600_1200x1600-d53e44ba5b0dc0e019ee698f02b6d300",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S1_2560x1440-79ab2c50b22aa1dd55955626aa5d20e5",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DARQCompleteEdition_UnfoldGames_S1_2560x1440-79ab2c50b22aa1dd55955626aa5d20e5",
				},
			],
			currentPrice: 1676,
			seller: {
				id: "o-k56szhnces4k2s8asp2kvue9xt65fh",
				name: "Unfold Games, LLC",
			},
			productSlug: "darq-complete-edition",
			urlSlug: "darq-complete-edition",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1298",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "072b41e9cdd34ae6a11d310391b11391",
					namespace: "3819de76dedf4cd2aebbcf9279e23e43",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Unfold Games, LLC",
				},
				{
					key: "developerName",
					value: "Unfold Games, LLC",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "darq-complete-edition",
				},
			],
			categories: [
				{
					path: "freegames",
				},
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "darq-complete-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 0,
					originalPrice: 1676,
					voucherDiscount: 0,
					discount: 1676,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€16.76",
						discountPrice: "0",
						intermediatePrice: "0",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "8f8e8fefa49e453d9f0c5a8ba7ee08ea",
								endDate: "2021-11-04T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-28T15:00:00.000Z",
		},
		{
			title: "Saint Kotar",
			id: "eccfc828bead4f93b4b18cd2fdf0c9f1",
			namespace: "08900611756a442ab81750df9deacd77",
			description:
				"Saint Kotar is a psychological horror detective game set in a cursed valley in rural Croatia. Investigate the disappearance of your relative in the occult-ridden town of Sveti Kotar as you switch between conflicting realities through the eyes of two godly men.",
			effectiveDate: "2021-10-28T11:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/d2b29f4dece64c7497fb9229f7207cb2/saint-kotar-offer-logo-2imhm.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/d2b29f4dece64c7497fb9229f7207cb2/saint-kotar-offer-17ij6.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/d2b29f4dece64c7497fb9229f7207cb2/download-saint-kotar-offer-4o5jn.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/d2b29f4dece64c7497fb9229f7207cb2/download-saint-kotar-offer-1y7xb.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/d2b29f4dece64c7497fb9229f7207cb2/saint-kotar-offer-2a333.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/d2b29f4dece64c7497fb9229f7207cb2/download-saint-kotar-offer-4o5jn.jpg",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-9uf2bsrkptwqbkpy867grcbj5jxrta",
				name: "SOEDESCO",
			},
			productSlug: null,
			urlSlug: "e0aee975f4e8463fad23b0d627bb483e",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1395",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "c02eae3f25dc40289409b39fd9fdeee1",
					namespace: "08900611756a442ab81750df9deacd77",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "saint-kotar-7f0c47",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "saint-kotar-7f0c47",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Red Martyr Entertainment",
			publisherDisplayName: "SOEDESCO",
			price: {
				totalPrice: {
					discountPrice: 2249,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 250,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€22.49",
						intermediatePrice: "€22.49",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "f8d9e927701c4866b1024b8b978cd90d",
								endDate: "2021-11-04T23:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-28T11:00:00.000Z",
		},
		{
			title: "Black Widow: Recharged",
			id: "2dd7498ffb08433ca9b7c20946787e1f",
			namespace: "a25444fc25e9498781983b58ceba30c5",
			description:
				"Defend your spider web from an onslaught of bugs in this frenetic revival of the cult classic twin-stick shooter, all while jamming to an infectious score by Megan McDuffee. Play solo or tag in a friend for local co-op across 30 challenges or the arcade mode.",
			effectiveDate: "2021-10-28T07:00:00.000Z",
			keyImages: [
				{
					type: "DieselGameBoxTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BlackWidowRecharged_AdamVisionSneakyBox_S2_1200x1600-d2fd7ae525a6162f045ea4f1337db25c",
				},
				{
					type: "DieselGameBoxWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BlackWidowRecharged_AdamVisionSneakyBox_S1_2560x1440-7c803f4fe9f510f0af76a2099d16aff7",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BlackWidowRecharged_AdamVisionSneakyBox_S2_1200x1600-d2fd7ae525a6162f045ea4f1337db25c",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BlackWidowRecharged_AdamVisionSneakyBox_S1_2560x1440-7c803f4fe9f510f0af76a2099d16aff7",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BlackWidowRecharged_AdamVisionSneakyBox_S2_1200x1600-d2fd7ae525a6162f045ea4f1337db25c",
				},
			],
			currentPrice: 899,
			seller: {
				id: "o-bhpk86rgthezed539g3hb5avacecqt",
				name: "Atari",
			},
			productSlug: "black-widow-recharged",
			urlSlug: "blackcoral-general-audience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1210",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "367d6e593cdc494993b1a785dad584d5",
					namespace: "a25444fc25e9498781983b58ceba30c5",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Atari",
				},
				{
					key: "developerName",
					value: "AdamVision, SneakyBox",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "black-widow-recharged",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "black-widow-recharged",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 899,
					originalPrice: 899,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€8.99",
						discountPrice: "€8.99",
						intermediatePrice: "€8.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-28T07:00:00.000Z",
		},
		{
			title: "Riders Republic",
			id: "34cc0c5f0b874ac4b03cbe59fe3f87d0",
			namespace: "83d6990f16444655866b04be562bf589",
			description:
				"Jump into a massive multiplayer playground! Bike, ski, snowboard, or wingsuit across an open world sports paradise.",
			effectiveDate: "2021-10-28T04:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/83d6990f16444655866b04be562bf589/offer/MAD_STD_Store_Landscape_2560x1440-2560x1440-0d275f75a75f6367c373e727bc78b4d1.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/83d6990f16444655866b04be562bf589/offer/MAD_STD_Store_Landscape_2560x1440-2560x1440-0d275f75a75f6367c373e727bc78b4d1.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208",
				},
			],
			currentPrice: 5999,
			seller: {
				id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
				name: "Ubisoft Entertainment",
			},
			productSlug: "riders-republic/home",
			urlSlug: "ridersrepublicgenerallaunchaudience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1203",
				},
				{
					id: "1370",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
				{
					id: "17470",
				},
			],
			items: [
				{
					id: "c1043415b5ee4ee0bd8e192f5e92fa70",
					namespace: "83d6990f16444655866b04be562bf589",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "CN",
				},
				{
					key: "publisherName",
					value: "Ubisoft",
				},
				{
					key: "developerName",
					value: "Ubisoft Annecy",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "riders-republic/home",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "riders-republic",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 5999,
					originalPrice: 5999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€59.99",
						discountPrice: "€59.99",
						intermediatePrice: "€59.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-28T04:00:00.000Z",
		},
		{
			title: "Aeon Must Die!",
			id: "c1e36fb90e3e4057b9c2f779046b3e91",
			namespace: "e4da11298fd3481daf61f46187082074",
			description:
				"Ignite the galaxy. Aeon Must Die!\n\nExperience a unique beat ‘em-up introducing breakneck risk-reward gameplay, innovative AI and tactical fighting, all packaged in an incredible art style.",
			effectiveDate: "2021-10-27T21:59:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AeonMustDie_LimestoneGames_S2_1200x1600-46b2ef81b5fe8932c95dc6cd2391a3b1",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AeonMustDie_LimestoneGames_S1_2560x1440-06730ca74af1fdc5cccf3d1c26a3e152",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AeonMustDie_LimestoneGames_S2_1200x1600-46b2ef81b5fe8932c95dc6cd2391a3b1",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AeonMustDie_LimestoneGames_S1_2560x1440-06730ca74af1fdc5cccf3d1c26a3e152",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AeonMustDie_LimestoneGames_S2_1200x1600-46b2ef81b5fe8932c95dc6cd2391a3b1",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-wt4zxeetmq6jem7qp4pkssr46aenj5",
				name: "Focus Home",
			},
			productSlug: "aeon-must-die",
			urlSlug: "aeon-must-die",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "4f7bc1f4eb8849ceb6d7fad9268d5bc7",
					namespace: "e4da11298fd3481daf61f46187082074",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "aeon-must-die",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "aeon-must-die",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Limestone Games",
			publisherDisplayName: "Focus Home Interactive",
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-27T21:59:00.000Z",
		},
		{
			title: "Sheepo",
			id: "27cdb08e5c6a410e8769f95c0ad87862",
			namespace: "880489d7d5424ffdb016b96bc52653ba",
			description:
				"Save all the creatures of a dying star in SHEEPO, a pacifist creature collecting-and-transforming metroidvania!",
			effectiveDate: "2021-10-27T16:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/sheepo-offer-logo-k7o5x.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/sheepo-offer-13l3b.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/download-sheepo-offer-4t6zr.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/download-sheepo-offer-1gyvg.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/sheepo-offer-dq28a.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/download-sheepo-offer-4t6zr.jpg",
				},
			],
			currentPrice: 799,
			seller: {
				id: "o-b3dcbpjzpsrrbtlgt8f7yzmc45msvy",
				name: "Top Hat Studios, Inc.",
			},
			productSlug: null,
			urlSlug: "fb4fe6cbb5a3430a8db91440e193b922",
			url: null,
			tags: [
				{
					id: "1381",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1151",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "baff8346507a442d974a8b5ae0876195",
					namespace: "880489d7d5424ffdb016b96bc52653ba",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "sheepo-62cd3e",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "sheepo-62cd3e",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Kyle Thompson",
			publisherDisplayName: "Top Hat Studios, Inc.",
			price: {
				totalPrice: {
					discountPrice: 639,
					originalPrice: 799,
					voucherDiscount: 0,
					discount: 160,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€7.99",
						discountPrice: "€6.39",
						intermediatePrice: "€6.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "8d6263753ca748daa3cf7db37898382e",
								endDate: "2021-11-10T16:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-27T16:00:00.000Z",
		},
		{
			title: "Forgive Me Father",
			id: "85bfdee581d0415f9aa25862dd1c430e",
			namespace: "6ee03ef340e641a781eb375192bfa105",
			description:
				"Forgive Me Father is a dark retro horror FPS set in a comic book style world inspired by the novels of H.P. Lovecraft. As the only one left with full senses, you begin a journey in search of answers and relief. How long can you last?",
			effectiveDate: "2021-10-26T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/d594ee454c9c4c55ad76a6734477f3fc/forgive-me-father-offer-logo-10gpv.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/d594ee454c9c4c55ad76a6734477f3fc/forgive-me-father-offer-1sta3.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/d594ee454c9c4c55ad76a6734477f3fc/download-forgive-me-father-offer-2qjun.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/d594ee454c9c4c55ad76a6734477f3fc/download-forgive-me-father-offer-f3fj9.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/d594ee454c9c4c55ad76a6734477f3fc/forgive-me-father-offer-edb7h.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/d594ee454c9c4c55ad76a6734477f3fc/download-forgive-me-father-offer-2qjun.jpg",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-n4d8bf5e8fnr4kujuut9j6v4d29muc",
				name: "1C Online Games Ltd",
			},
			productSlug: null,
			urlSlug: "cc668518cf5646be97ebc79c1ef35a64",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1294",
				},
				{
					id: "1310",
				},
			],
			items: [
				{
					id: "607b315458554804a82793e64403f7aa",
					namespace: "6ee03ef340e641a781eb375192bfa105",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "forgive-me-father-133635",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "forgive-me-father-133635",
					pageType: "productHome",
				},
			],
			developerDisplayName: "BYTE BARREL",
			publisherDisplayName: "1C Entertainment",
			price: {
				totalPrice: {
					discountPrice: 1019,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 180,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€10.19",
						intermediatePrice: "€10.19",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "dbbba18816df49418403edfb9c25bf40",
								endDate: "2021-11-02T18:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-26T17:00:00.000Z",
		},
		{
			title: "At Eve's Wake",
			id: "a0668f2f465843b1b3216bd72c34495b",
			namespace: "f0743109c5784d44a1a404a4cee42f20",
			description:
				"An interactive horror story inspired by Lovecraft's work about surviving a family you never knew and uncovering their sinister practices. Will you embrace them or rid humanity of their taint? Your actions will shape your fate and that of the family.",
			effectiveDate: "2021-10-26T16:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S2_1200x1600-10bbef1adfe107ad0f28e6014bd97618",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S1_2560x1440-8cd0accbd808d452dd88063e227dba68",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S2_1200x1600-10bbef1adfe107ad0f28e6014bd97618",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S1_2560x1440-8cd0accbd808d452dd88063e227dba68",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S2_1200x1600-10bbef1adfe107ad0f28e6014bd97618",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S2_1200x1600-10bbef1adfe107ad0f28e6014bd97618",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-j25adjzlhrdgtyupyp2y8yhnzmvf98",
				name: "Sugar Rush Studios B.V.",
			},
			productSlug: "at-eves-wake",
			urlSlug: "at-eves-wake",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1363",
				},
				{
					id: "1395",
				},
				{
					id: "18051",
				},
				{
					id: "1237",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "8b9664d44b574f3daf61b88ebd0c42f9",
					namespace: "f0743109c5784d44a1a404a4cee42f20",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Sugar Rush Studios B.V.",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "at-eves-wake",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "at-eves-wake",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1799,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 200,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€17.99",
						intermediatePrice: "€17.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "017258371f71424bb8dadf2d92af4d69",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-26T16:00:00.000Z",
		},
		{
			title: "Darkest Dungeon II",
			id: "2373a0ce09bd43d695088c8335758178",
			namespace: "6ff9efdef6dc45ecb40ed20fcd2c4621",
			description:
				"The eagerly awaited follow-up to Red Hook's smash hit gothic horror RPG!  DDII will test your mettle and drive you to the brink of madness. Armor yourself with purpose and provision your party for the journey ahead. It will be arduous.",
			effectiveDate: "2021-10-26T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S2_1200x1600-dd09b5f5aec3507742b3b768f063cb44",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S2_1200x1600-dd09b5f5aec3507742b3b768f063cb44",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S1_2560x1440-3fb7abc704f66c13cdba7f7ce966b776",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S2_1200x1600-dd09b5f5aec3507742b3b768f063cb44",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S1_2560x1440-3fb7abc704f66c13cdba7f7ce966b776",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/EGS_DarkestDungeonII_RedHookStudios_S2_1200x1600-dd09b5f5aec3507742b3b768f063cb44",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-w5yb6awebxmp362nvut3qd3xb4jmur",
				name: "Red Hook Studios",
			},
			productSlug: "darkest-dungeon-2/home",
			urlSlug: "darkest-dungeon-2",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "1310",
				},
			],
			items: [
				{
					id: "c5c6938779b1481f8e1d7adc7d9dbb78",
					namespace: "6ff9efdef6dc45ecb40ed20fcd2c4621",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "",
				},
				{
					key: "publisherName",
					value: "Red Hook Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "darkest-dungeon-2/home",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "darkest-dungeon-2",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2399,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€23.99",
						intermediatePrice: "€23.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-26T16:00:00.000Z",
		},
		{
			title: "Marvel's Guardians of the Galaxy",
			id: "a2fc9e21ab4e416680c2b9597b7f6eaf",
			namespace: "2a09fb19b47f46dfb11ebd382f132a8f",
			description:
				"You are Star-Lord. The fate of the galaxy and the Guardians is in your hands. Time to show the universe what you’re made of. You got this. Probably.",
			effectiveDate: "2021-10-26T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_1200x1600-70149d2826b7251033e112dd1427027d",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_1200x1600-70149d2826b7251033e112dd1427027d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S1_2560x1440-e5016495b5181014bf291e4cb65fffa3",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_1200x1600-70149d2826b7251033e112dd1427027d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S1_2560x1440-e5016495b5181014bf291e4cb65fffa3",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_1200x1600-70149d2826b7251033e112dd1427027d",
				},
			],
			currentPrice: 5999,
			seller: {
				id: "o-7petn7mrlk8g86ktqm7uglcr7lfaja",
				name: "Square Enix",
			},
			productSlug: "marvels-guardians-of-the-galaxy",
			urlSlug: "marvels-guardians-of-the-galaxy",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "8343c87ac050421c93516acde139bf6a",
					namespace: "2a09fb19b47f46dfb11ebd382f132a8f",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Square Enix",
				},
				{
					key: "developerName",
					value: "Eidos-Montréal",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "marvels-guardians-of-the-galaxy",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "marvels-guardians-of-the-galaxy",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 5999,
					originalPrice: 5999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€59.99",
						discountPrice: "€59.99",
						intermediatePrice: "€59.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-26T16:00:00.000Z",
		},
		{
			title: "Legend of Grimrock",
			id: "7f50678081dc40ecaab4cf5f6bd73f2a",
			namespace: "3cd3863c8fa34d39bafb23a1b8057123",
			description:
				"Legend of Grimrock is a dungeon crawling role playing game with an oldschool heart but a modern execution. A group of prisoners are sentenced to certain death by exiling them to the secluded Mount Grimrock for vile crimes they may or may not have committed.",
			effectiveDate: "2021-10-25T16:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock_AlmostHumanLtd_S2_1200x1600-fd60b1e7c1db78f6442501a4a7818590",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock_AlmostHumanLtd_S1_2560x1440-33c312d817b214fd0962c5c0037c3766",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock_AlmostHumanLtd_S2_1200x1600-fd60b1e7c1db78f6442501a4a7818590",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock_AlmostHumanLtd_S1_2560x1440-33c312d817b214fd0962c5c0037c3766",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock_AlmostHumanLtd_S2_1200x1600-fd60b1e7c1db78f6442501a4a7818590",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock_AlmostHumanLtd_S2_1200x1600-fd60b1e7c1db78f6442501a4a7818590_1200x1600-fd60b1e7c1db78f6442501a4a7818590",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-hlczlv9wh6y6mqn4uncdzv4v3yru6b",
				name: "Almost Human",
			},
			productSlug: "legend-of-grimrock",
			urlSlug: "legend-of-grimrock",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "c82aed8c5bda469cb975078789404cd1",
					namespace: "3cd3863c8fa34d39bafb23a1b8057123",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Almost Human",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "legend-of-grimrock",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "legend-of-grimrock",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-25T16:00:00.000Z",
		},
		{
			title: "Legend of Grimrock 2",
			id: "cda071f564904752ae92981ea323784b",
			namespace: "32abd33853124831b522d7412a7457c6",
			description:
				"A dungeon crawling role playing game with a modern execution but an oldschool heart. A group of four prisoners have shipwrecked on a secluded island filled with ancient crumbled ruins, mysterious shrines and a vast underground network of dungeons and mines.",
			effectiveDate: "2021-10-25T14:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock2_AlmostHumanLtd_S2_1200x1600-03a6d728927d2f6426c1a0e1017a3845",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock2_AlmostHumanLtd_S1_2560x1440-66accfe1d7347d22b2778c2e9024df7b",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock2_AlmostHumanLtd_S2_1200x1600-03a6d728927d2f6426c1a0e1017a3845",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock2_AlmostHumanLtd_S1_2560x1440-66accfe1d7347d22b2778c2e9024df7b",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock2_AlmostHumanLtd_S2_1200x1600-03a6d728927d2f6426c1a0e1017a3845",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LegendofGrimrock2_AlmostHumanLtd_S2_1200x1600-03a6d728927d2f6426c1a0e1017a3845_1200x1600-03a6d728927d2f6426c1a0e1017a3845",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-hlczlv9wh6y6mqn4uncdzv4v3yru6b",
				name: "Almost Human",
			},
			productSlug: "legend-of-grimrock-2",
			urlSlug: "legend-of-grimrock-2",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "ce46a57a543b4dac93204319a8593377",
					namespace: "32abd33853124831b522d7412a7457c6",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Almost Human",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "legend-of-grimrock-2",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "legend-of-grimrock-2",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2399,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€23.99",
						intermediatePrice: "€23.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-25T14:00:00.000Z",
		},
		{
			title: "Disciples: Liberation",
			id: "4de114969d2446699fb5b505269fe415",
			namespace: "ff17044fb2804a4aa8066dde0626514d",
			description: "Disciples: Liberation",
			effectiveDate: "2021-10-21T17:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/ff17044fb2804a4aa8066dde0626514d/offer/EGS_DisciplesLiberation_FrimaStudio_S5-1920x1080-086be19be1cdd3a7d7dff101c827803a.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/ff17044fb2804a4aa8066dde0626514d/offer/EGS_DisciplesLiberation_FrimaStudio_S6-1200x1600-89473ab64a7d3d531e88c921340ed608.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/ff17044fb2804a4aa8066dde0626514d/offer/EGS_DisciplesLiberation_FrimaStudio_S6-1200x1600-89473ab64a7d3d531e88c921340ed608.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/ff17044fb2804a4aa8066dde0626514d/offer/EGS_DisciplesLiberation_FrimaStudio_S6-1200x1600-89473ab64a7d3d531e88c921340ed608.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/ff17044fb2804a4aa8066dde0626514d/offer/EGS_DisciplesLiberation_FrimaStudio_S5-1920x1080-086be19be1cdd3a7d7dff101c827803a.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/ff17044fb2804a4aa8066dde0626514d/offer/EGS_DisciplesLiberation_FrimaStudio_S6-1200x1600-89473ab64a7d3d531e88c921340ed608.jpg",
				},
			],
			currentPrice: 3999,
			seller: {
				id: "o-37ss7wypkskvyj58j9s7hhltxtujac",
				name: "Kalypso Media Group GmbH",
			},
			productSlug: "disciples-liberation",
			urlSlug: "disciples-liberation",
			url: null,
			tags: [
				{
					id: "1203",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "ced6775f63784b009c63198b2e2c199c",
					namespace: "ff17044fb2804a4aa8066dde0626514d",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "AM,AZ,BY,KZ,KG,MD,UZ,RU,TJ,TM,UA,GE",
				},
				{
					key: "publisherName",
					value: "Kalypso Media",
				},
				{
					key: "developerName",
					value: "Frima Studio",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "disciples-liberation",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "disciples-liberation",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 3999,
					originalPrice: 3999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€39.99",
						discountPrice: "€39.99",
						intermediatePrice: "€39.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-21T17:00:00.000Z",
		},
		{
			title: "Tandem: A Tale of Shadows",
			id: "9142916d80f54720b01f8f62b21014be",
			namespace: "d1a3ff292b2f4ee289a83d7a91ae3458",
			description:
				"Tandem : A Tale of Shadows redefines the puzzle platformer genre with a unique gameplay and exceptional aesthetics. Help Emma and the teddy bear Fenton solve the mystery of the disappearance of the famous magician Thomas Kane.",
			effectiveDate: "2021-10-21T16:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt/89c36b2c-ef33-4a7a-95b0-39da189a54cf/tandem-a-tale-of-shadows-offer-logo-53754b5a.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt/c087c527-0c2b-4269-926b-f0d15102de8a/tandem-a-tale-of-shadows-offer-633449e1.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt/da66527c-f465-4e49-8faa-08aa69db17da/download-tandem-a-tale-of-shadows-offer-eae909e.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt/2c1d81ab-12e7-40a6-9edd-a449cc619ad5/download-tandem-a-tale-of-shadows-offer-5c6a45df.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt/c087c527-0c2b-4269-926b-f0d15102de8a/tandem-a-tale-of-shadows-offer-633449e1.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt/2c1d81ab-12e7-40a6-9edd-a449cc619ad5/download-tandem-a-tale-of-shadows-offer-5c6a45df.jpg",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-722pvnj3qsvbzvskhx4r8x7gcxhhbn",
				name: "Hatinh Interactive",
			},
			productSlug: null,
			urlSlug: "24ed2fb76b334158b9e580c01f7282a6",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1151",
				},
			],
			items: [
				{
					id: "7c02053bfee24d028aa1bec03edd6a82",
					namespace: "d1a3ff292b2f4ee289a83d7a91ae3458",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "tandem-a-tale-of-shadows-c3f55e",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "tandem-a-tale-of-shadows-c3f55e",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Monochrome Paris",
			publisherDisplayName: "Hatinh Interactive",
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-21T16:00:00.000Z",
		},
		{
			title: "Among the Sleep - Enhanced Edition",
			id: "2a112cd37b774426990583a259e25ef9",
			namespace: "53ef2f4592684c4c97d6d32e40467274",
			description:
				"Among the Sleep: Enhanced Edition is a new and improved version of the award winning first person horror adventure. In the game you play as a small child trapped in a weird nightmare where you go looking for your mom.",
			effectiveDate: "2021-10-21T15:00:00.000Z",
			keyImages: [
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AmongtheSleepEnhancedEdition_KrillbiteStudioAS_S2_1200x1600-ba43835916e83b6cecc56b71af8e3eb1",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AmongtheSleepEnhancedEdition_KrillbiteStudioAS_S2_1200x1600-ba43835916e83b6cecc56b71af8e3eb1",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AmongtheSleepEnhancedEdition_KrillbiteStudioAS_S2_1200x1600-ba43835916e83b6cecc56b71af8e3eb1",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AmongtheSleepEnhancedEdition_KrillbiteStudioAS_S1_2560x1440-4a28ad52964cf887474fb3938a59e203",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AmongtheSleepEnhancedEdition_KrillbiteStudioAS_S2_1200x1600-ba43835916e83b6cecc56b71af8e3eb1",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AmongtheSleepEnhancedEdition_KrillbiteStudioAS_S1_2560x1440-4a28ad52964cf887474fb3938a59e203",
				},
			],
			currentPrice: 1399,
			seller: {
				id: "o-j9a2hvwhlxthsd9tqnb75ksq2r3pw7",
				name: "Krillbite Studios AS",
			},
			productSlug: "among-the-sleep-enhanced-edition",
			urlSlug: "among-the-sleep-enhanced-edition",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "f5e1c72711d742f791334b638a772d84",
					namespace: "53ef2f4592684c4c97d6d32e40467274",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Krillbite Studio AS",
				},
				{
					key: "developerName",
					value: "Krillbite Studio AS",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "among-the-sleep-enhanced-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "among-the-sleep-enhanced-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Krillbite Studio AS",
			publisherDisplayName: "Krillbite Studio AS",
			price: {
				totalPrice: {
					discountPrice: 1399,
					originalPrice: 1399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€13.99",
						discountPrice: "€13.99",
						intermediatePrice: "€13.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-21T15:00:00.000Z",
		},
		{
			title: "Sands of Aura",
			id: "5e7ce1899f0b4871ba393abea8953f57",
			namespace: "ef02301060454cfd8345fae625743294",
			description:
				"Sands of Aura is an open-world adventure set in a world buried beneath a sea of sand. Sail across the sandseas to return life to a dying world in an unforgettable experience that is equal parts engaging story and unrelenting, souls-like combat.",
			effectiveDate: "2021-10-21T13:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SandsofAura_ChashuEntertainment_S2_1200x1600-0e11330cf2be78c33451912706374b75",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SandsofAura_ChashuEntertainment_S1_2560x1440-7bb684675529b8272ca61630af0fe24b",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SandsofAura_ChashuEntertainment_S2_1200x1600-0e11330cf2be78c33451912706374b75",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SandsofAura_ChashuEntertainment_S1_2560x1440-7bb684675529b8272ca61630af0fe24b",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SandsofAura_ChashuEntertainment_S2_1200x1600-0e11330cf2be78c33451912706374b75",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SandsofAura_ChashuEntertainment_S2_1200x1600-0e11330cf2be78c33451912706374b75_1200x1600-0e11330cf2be78c33451912706374b75",
				},
			],
			currentPrice: 2099,
			seller: {
				id: "o-rlswgtffm6ua68662gd37xv3lmq95q",
				name: "Freedom Games",
			},
			productSlug: "sands-of-aura",
			urlSlug: "sands-of-aura",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "1310",
				},
			],
			items: [
				{
					id: "feced4dc1bb24f969cfe099a262e59cf",
					namespace: "ef02301060454cfd8345fae625743294",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Freedom Games",
				},
				{
					key: "developerName",
					value: "Chashu Entertainment",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "sands-of-aura",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "sands-of-aura",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2099,
					originalPrice: 2099,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€20.99",
						discountPrice: "€20.99",
						intermediatePrice: "€20.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-21T13:00:00.000Z",
		},
		{
			title: "HammerHelm",
			id: "7f77c0243e1c44309f3c89fe2119fb0e",
			namespace: "dd0212145447464cb07eb1e31899d591",
			description:
				"Banished from your homeland for believing that dwarfs can live above ground, you decide to build a new town that will attract other dwarves who share the same vision. ",
			effectiveDate: "2021-10-21T08:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HammerHelm_SuperSixStudios_S2_1200x1600-a7d89dbe254ccbcf2c70a4e3113663df",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HammerHelm_SuperSixStudios_S2_1200x1600-a7d89dbe254ccbcf2c70a4e3113663df",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HammerHelm_SuperSixStudios_S1_2560x1440-d55da780a589044f3e6275ed3856f28a",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HammerHelm_SuperSixStudios_S2_1200x1600-a7d89dbe254ccbcf2c70a4e3113663df",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HammerHelm_SuperSixStudios_S1_2560x1440-d55da780a589044f3e6275ed3856f28a",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HammerHelm_SuperSixStudios_S2_1200x1600-a7d89dbe254ccbcf2c70a4e3113663df",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-9uf2bsrkptwqbkpy867grcbj5jxrta",
				name: "SOEDESCO",
			},
			productSlug: "hammerhelm",
			urlSlug: "hammerhelm",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1146",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "2ac81b33b29c44c5a615d7dfa1bb0858",
					namespace: "dd0212145447464cb07eb1e31899d591",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "SOEDESCO",
				},
				{
					key: "developerName",
					value: "SuperSixStudios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "hammerhelm",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "hammerhelm",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1499,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€14.99",
						intermediatePrice: "€14.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-21T08:00:00.000Z",
		},
		{
			title: "Spectacular Sparky",
			id: "6049cb363ab94eacb797e8541df7c75b",
			namespace: "a03dcd71280c44ca90ee09edebe23547",
			description:
				"A throwback to the golden age of white-gloved 16-bit video-game mascots, Spectacular Sparky is an action-packed platformer with wacky characters, explosive weapons and boss battles to treasure!",
			effectiveDate: "2021-10-20T18:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SpectacularSparky_FreakZoneGames_S3_2560x1440_2560x1440-033a524241ebb18f6f8d8ca2670d1322",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SpectacularSparky_FreakZoneGames_S2_1200x1600_1200x1600-51939dc1cc001ec61c6f06ddc6fb10f3",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SpectacularSparky_FreakZoneGames_S2_1200x1600_1200x1600-51939dc1cc001ec61c6f06ddc6fb10f3",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SpectacularSparky_FreakZoneGames_S2_1200x1600_1200x1600-51939dc1cc001ec61c6f06ddc6fb10f3",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-ybzxtem8hqs87ahht3w4vtf6eqd2zh",
				name: "Nicalis",
			},
			productSlug: "spectacular-sparky",
			urlSlug: "spectacular-sparky",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1151",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "88ce1be6355f4045b191644bd9731264",
					namespace: "a03dcd71280c44ca90ee09edebe23547",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Nicalis",
				},
				{
					key: "developerName",
					value: "FreakZone Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "spectacular-sparky",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "spectacular-sparky",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-20T18:00:00.000Z",
		},
		{
			title: "They Always Run",
			id: "693b4cf990554764b6e180b02b683719",
			namespace: "9de5b8c358314db2ab3ed7b41d6f41a0",
			description:
				"Become Aidan, a three-armed mutant who hunts the most dangerous bounties in the galaxy. Catch, slice, dice and destroy enemies in this exciting 2D platformer with a space-western setting.",
			effectiveDate: "2021-10-20T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/a90ff071ed744b0fb97a3689d9bcac56/they-always-run-offer-logo-iznym.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/a90ff071ed744b0fb97a3689d9bcac56/they-always-run-offer-1pgen.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/a90ff071ed744b0fb97a3689d9bcac56/download-they-always-run-offer-15ew0.png",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/a90ff071ed744b0fb97a3689d9bcac56/they-always-run-offer-uw55h.png",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/a90ff071ed744b0fb97a3689d9bcac56/download-they-always-run-offer-1ygj1.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/a90ff071ed744b0fb97a3689d9bcac56/download-they-always-run-offer-15ew0.png",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-cy5ukscnzvb2vbehcxv5rrrnky995c",
				name: "Alawar Entertainment, Inc",
			},
			productSlug: null,
			urlSlug: "f4bd6723712d47ceb25638e7c6041274",
			url: null,
			tags: [
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1151",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "c6de26e868c042b6a6d134f465f98911",
					namespace: "9de5b8c358314db2ab3ed7b41d6f41a0",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "they-always-run-965bb3",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "they-always-run-965bb3",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Alawar Premium",
			publisherDisplayName: "Alawar Premium",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-20T17:00:00.000Z",
		},
		{
			title: "Gravewood High",
			id: "aeca462087c641eb91cfd2b4371a5840",
			namespace: "36d3389b16b14deeb527754f6393469b",
			description:
				"An infinitely replayable stealth horror game set in high school - with destructible environments, randomized level layouts and a smart opponent that develops new abilities the more you play.",
			effectiveDate: "2021-10-20T17:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S1-2560x1440-ea866dda7006cbf6510ecbc011a29190.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S2-1200x1600-919c38e636b31bc0614fc550d0cb0830.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S2-1200x1600-919c38e636b31bc0614fc550d0cb0830.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S2-1200x1600-919c38e636b31bc0614fc550d0cb0830.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S1-2560x1440-ea866dda7006cbf6510ecbc011a29190.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S2-1200x1600-919c38e636b31bc0614fc550d0cb0830.jpg",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-8ux7xn386eqvrb5x2rxrjkyvnfdz7v",
				name: "HeroCraft PC",
			},
			productSlug: "gravewood-high",
			urlSlug: "gravewood-high",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "18051",
				},
				{
					id: "1258",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1084",
				},
			],
			items: [
				{
					id: "2acfdf904e0a4946885201ba599f8236",
					namespace: "36d3389b16b14deeb527754f6393469b",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "HeroCraft",
				},
				{
					key: "developerName",
					value: "HeroCraft",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "gravewood-high",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "gravewood-high",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1359,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 240,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€13.59",
						intermediatePrice: "€13.59",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "0227e8836a3e4e60865038b1a916411d",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-20T17:00:00.000Z",
		},
		{
			title: "JARS",
			id: "640d91e1f4a2444ebdb2ea1ed241acdb",
			namespace: "9b89b68d8751414db0991007bdc4766c",
			description:
				"JARS is a strategy game featuring puzzles and elements of tower defense. Join Victor in his spooky yet endearing world and prepare for a quest to uncover the secrets of his family’s basement. Will you save the world or get grounded by mother?",
			effectiveDate: "2021-10-20T16:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/jars-offer-logo-195uh.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/download-jars-offer-13zfp.jpg",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/jars-offer-k3h96.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/download-jars-offer-1w5t4.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/jars-offer-nnch1.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/aa4e814e8db94167a3ca35871c75c846/download-jars-offer-13zfp.jpg",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-d2ygr9bjcjfebgt8842wvvbmswympz",
				name: "Daedalic Entertainment",
			},
			productSlug: null,
			urlSlug: "96eecbb308fa4c6a8c517efedf16ad83",
			url: null,
			tags: [
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "51e6661e8bfc4ab2a3a41b216425d405",
					namespace: "9b89b68d8751414db0991007bdc4766c",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "jars-e39063",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "jars-e39063",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Mousetrap Games",
			publisherDisplayName: "Daedalic Entertainment",
			price: {
				totalPrice: {
					discountPrice: 959,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 240,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€9.59",
						intermediatePrice: "€9.59",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "1f9167eca9684a34aae57a60a99af6ab",
								endDate: "2021-11-10T16:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-20T16:00:00.000Z",
		},
		{
			title: "Roguebook",
			id: "732caedfe2c54133851205dbbfe61915",
			namespace: "ed58510215d54a33b89ea805e0d773d7",
			description:
				"Embrace the challenge of a roguelike deckbuilder with unique mechanics from the developers of Faeria and Richard Garfield, creator of Magic: The Gathering™. Build a team of two heroes, unleash powerful combos and defeat the legends of the Roguebook!",
			effectiveDate: "2021-10-20T08:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Roguebook_Abrakam_S2_1200x1600-bba267d06c7f134050211ee586516528",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Roguebook_Abrakam_S1_2560x1440-5b01163b59ee533a076c26a22910daf8",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Roguebook_Abrakam_S2_1200x1600-bba267d06c7f134050211ee586516528",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Roguebook_Abrakam_S1_2560x1440-5b01163b59ee533a076c26a22910daf8",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Roguebook_Abrakam_S2_1200x1600-bba267d06c7f134050211ee586516528",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Roguebook_Abrakam_S2_1200x1600-bba267d06c7f134050211ee586516528_1200x1600-bba267d06c7f134050211ee586516528",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-wubu848ps2xcxuwv2m3bhet9gbhdbp",
				name: "Nacon",
			},
			productSlug: "rougebook",
			urlSlug: "roguebook",
			url: null,
			tags: [
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1181",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "116c05e59f83409aa05a03c07aea398a",
					namespace: "ed58510215d54a33b89ea805e0d773d7",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Nacon",
				},
				{
					key: "developerName",
					value: "Abrakam Entertainment SA",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "rougebook",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "roguebook",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-20T08:00:00.000Z",
		},
		{
			title: "Unicorns on Unicycles",
			id: "6f4b8ce0ec4940ec8eb8a4b308a20086",
			namespace: "09d0e2d34c3a4788907bdea8b5c895c1",
			description:
				"Turn your horns into swords in this wacky and sweet physics-driven rainbowcore fighting game featuring jousting unicorns… on unicycles.",
			effectiveDate: "2021-10-20T01:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/4496e9c245134331b5f3ff537a588ef4/unicorns-on-unicycles-offer-logo-18dlx.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/4496e9c245134331b5f3ff537a588ef4/unicorns-on-unicycles-offer-1izyn.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/4496e9c245134331b5f3ff537a588ef4/download-unicorns-on-unicycles-offer-d3pjz.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/4496e9c245134331b5f3ff537a588ef4/download-unicorns-on-unicycles-offer-134c3.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/4496e9c245134331b5f3ff537a588ef4/unicorns-on-unicycles-offer-1izyn.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/4496e9c245134331b5f3ff537a588ef4/download-unicorns-on-unicycles-offer-d3pjz.jpg",
				},
			],
			currentPrice: 999,
			seller: {
				id: "o-uf2lr9jar96m9qssppdgmal3j6alyq",
				name: "Rogue Games, Inc.",
			},
			productSlug: null,
			urlSlug: "cabd2f4c8e1b44eaaf0599e9a4a4d988",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1296",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "f9702bb0e2734c88b786e7f1d1f0ca49",
					namespace: "09d0e2d34c3a4788907bdea8b5c895c1",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "unicorns-on-unicycles-2f8151",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "unicorns-on-unicycles-2f8151",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Weyrdworks",
			publisherDisplayName: "Rogue Games, Inc.",
			price: {
				totalPrice: {
					discountPrice: 999,
					originalPrice: 999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€9.99",
						discountPrice: "€9.99",
						intermediatePrice: "€9.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-20T01:00:00.000Z",
		},
		{
			title: "War Mongrels",
			id: "63286627d91a4eed93498b076bfe3761",
			namespace: "7b57136ac766477eb1e687dcd0310da5",
			description:
				"Isometric real-time tactics game that takes place on the Eastern front of WWII. Its story-driven campaign takes inspiration in the grim events that actually took place and the real stories around them. Dive into the dark side of war alone or in co-op.",
			effectiveDate: "2021-10-19T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarMongrels_DestructiveCreations_S2_1200x1600-ffb2a21fcca3df119bf52e91b885ca86",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarMongrels_DestructiveCreations_S2_1200x1600-ffb2a21fcca3df119bf52e91b885ca86",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarMongrels_DestructiveCreations_S2_1200x1600-ffb2a21fcca3df119bf52e91b885ca86",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarMongrels_DestructiveCreations_S1_2560x1440-25e9aa5566f2f4a809a354f144ea2a46",
				},
			],
			currentPrice: 3799,
			seller: {
				id: "o-tfavjd5abcd2rf2vr2tgu99qu7r5kt",
				name: "Destructive Creations sp z o. o.",
			},
			productSlug: "war-mongrels",
			urlSlug: "cocoabrowngeneralaudience",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "1084",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "62663cb978774f4e833b61e917272dbe",
					namespace: "7b57136ac766477eb1e687dcd0310da5",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "DESTRUCTIVE CREATIONS",
				},
				{
					key: "developerName",
					value: "DESTRUCTIVE CREATIONS",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "war-mongrels",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "war-mongrels",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 3799,
					originalPrice: 3799,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€37.99",
						discountPrice: "€37.99",
						intermediatePrice: "€37.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-19T16:00:00.000Z",
		},
		{
			title: "Discovery Tour: Viking Age",
			id: "101627971acc4962b8353df58ff0da2f",
			namespace: "e5e398f1f7ca42aaa6cb7b6c7b4d1029",
			description: "Discovery Tour: Viking Age",
			effectiveDate: "2021-10-19T15:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/UK_ACV_DISCOVERY_TOUR_EPIC_Store Portrait_1200x1600 _1200x1600-32be5f443045bbc8d4513036d04026f2",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/UK_ACV_DISCOVERY_TOUR_EPIC_Store Landscape_2560x1440 _2560x1440-6eb790c31206945083485eb8d09556da",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/UK_ACV_DISCOVERY_TOUR_EPIC_Store Portrait_1200x1600 _1200x1600-32be5f443045bbc8d4513036d04026f2",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
				name: "Ubisoft Entertainment",
			},
			productSlug: "discovery-tour-viking-age",
			urlSlug: "discovery-tour-viking-age",
			url: null,
			tags: [
				{
					id: "1381",
				},
				{
					id: "1370",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "60250a1a827e421c93b916067926383c",
					namespace: "e5e398f1f7ca42aaa6cb7b6c7b4d1029",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "CN",
				},
				{
					key: "publisherName",
					value: "Ubisoft Entertainment",
				},
				{
					key: "developerName",
					value: "Ubisoft Montreal",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "discovery-tour-viking-age",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "discovery-tour-viking-age",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-19T15:00:00.000Z",
		},
		{
			title: "Undying",
			id: "c9d2e42d8b404add9390c0182093abbd",
			namespace: "487df1dfd24b44c381a2a376fbf78946",
			description:
				"Infected by a zombie, Anling's days are limited. She must now fight to survive, not for herself but her young son, Cody. Ensure Cody's survival in this zombie-infested world by protecting him, searching for safety, and teaching him valuable skills at any cost.",
			effectiveDate: "2021-10-19T13:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Undying_Vanimals_S2_1200x1600-0a1c1defefbcd7ea25479a2d6ca14269",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Undying_Vanimals_S1_2560x1440-c1649389f9556d5514c8a3175d180ddc",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Undying_Vanimals_S2_1200x1600-0a1c1defefbcd7ea25479a2d6ca14269",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Undying_Vanimals_S1_2560x1440-c1649389f9556d5514c8a3175d180ddc",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Undying_Vanimals_S2_1200x1600-0a1c1defefbcd7ea25479a2d6ca14269",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Undying_Vanimals_S2_1200x1600-0a1c1defefbcd7ea25479a2d6ca14269_1200x1600-0a1c1defefbcd7ea25479a2d6ca14269",
				},
			],
			currentPrice: 1679,
			seller: {
				id: "o-wwzfgcpzmd2b2ymr5mwvlwfwbpl7ay",
				name: "Skystone Games",
			},
			productSlug: "undying",
			urlSlug: "undying",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1310",
				},
			],
			items: [
				{
					id: "4af0db8eead84fd8bed05983a37a01e2",
					namespace: "487df1dfd24b44c381a2a376fbf78946",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Skystone Games Inc.",
				},
				{
					key: "developerName",
					value: "Vanimals",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "undying",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "undying",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Vanimals",
			publisherDisplayName: "Skystone Games Inc.",
			price: {
				totalPrice: {
					discountPrice: 1511,
					originalPrice: 1679,
					voucherDiscount: 0,
					discount: 168,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€16.79",
						discountPrice: "€15.11",
						intermediatePrice: "€15.11",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "b9c031f8194e473b91f2b9a8396b1617",
								endDate: "2021-11-01T13:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-19T13:00:00.000Z",
		},
		{
			title: "Good Company",
			id: "8477342d75cc49c1a2fc1f6b7e70ab0e",
			namespace: "b595ab13a93a4be8b6857cc14d2d6e8b",
			description:
				"Good Company is an in-depth management sim about building a trail-blazing tech corporation. Assemble complex production lines, manage employee logistics, and sell high-quality products on the market to become the best company in the whole county!",
			effectiveDate: "2021-10-18T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoodCompany_ChasingCarrots_S2_1200x1600-75c1e138544f0349fd737dc07d75a0a5",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoodCompany_ChasingCarrots_S1_2560x1440-701862d8cdde5ee0dfc1d7f439adb525",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoodCompany_ChasingCarrots_S2_1200x1600-75c1e138544f0349fd737dc07d75a0a5",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoodCompany_ChasingCarrots_S1_2560x1440-701862d8cdde5ee0dfc1d7f439adb525",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoodCompany_ChasingCarrots_S2_1200x1600-75c1e138544f0349fd737dc07d75a0a5",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoodCompany_ChasingCarrots_S2_1200x1600-75c1e138544f0349fd737dc07d75a0a5",
				},
			],
			currentPrice: 2299,
			seller: {
				id: "o-h3rhw2ntexmcgx44cv2pdje5bz3nqh",
				name: "The Irregular Corporation",
			},
			productSlug: "good-company",
			urlSlug: "good-company",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "1310",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "9e9c2c5bf8d645b4b769b60f6b88d765",
					namespace: "b595ab13a93a4be8b6857cc14d2d6e8b",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "The Irregular Corporation",
				},
				{
					key: "developerName",
					value: "Chasing Carrots",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "good-company",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "good-company",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1724,
					originalPrice: 2299,
					voucherDiscount: 0,
					discount: 575,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€22.99",
						discountPrice: "€17.24",
						intermediatePrice: "€17.24",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "b5e7aef9733e4933bcbb122592d3f8d9",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-18T15:00:00.000Z",
		},
		{
			title: "Against the Storm",
			id: "ce61bd4dbf3b49e9ae3311db91b005f8",
			namespace: "93eeeab14a3d45b8bf5586a900137733",
			description:
				"Roguelite city builder set in a fantasy world where it never stops raining. As the Queen’s viceroy, you’re tasked with venturing into the unknown wilds and building new settlements inhabited by intelligent beavers, humans, and lizardfolk.",
			effectiveDate: "2021-10-18T15:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AgainsttheStorm_EremiteGames_S1_2560x1440-75c02d58ec12cdd52c99b799c19c84d8",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AgainsttheStorm_EremiteGames_S2_1200x1600-da57640aeba607fa58e79456408f1192",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AgainsttheStorm_EremiteGames_S1_2560x1440-75c02d58ec12cdd52c99b799c19c84d8",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AgainsttheStorm_EremiteGames_S2_1200x1600-da57640aeba607fa58e79456408f1192",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AgainsttheStorm_EremiteGames_S2_1200x1600-da57640aeba607fa58e79456408f1192",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AgainsttheStorm_EremiteGames_S2_1200x1600-da57640aeba607fa58e79456408f1192",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-3un7kuq4qv93xx6l82gmaf5npsvpl9",
				name: "Eremite Games sp. z o.o.",
			},
			productSlug: "against-the-storm",
			urlSlug: "against-the-storm",
			url: null,
			tags: [
				{
					id: "1146",
				},
				{
					id: "1370",
				},
				{
					id: "1083",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "e9a6ae751456456689e15599c5d0ce54",
					namespace: "93eeeab14a3d45b8bf5586a900137733",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "developerName",
					value: "Eremite Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "against-the-storm",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "against-the-storm",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1439,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 160,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€14.39",
						intermediatePrice: "€14.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "e21d957517714aedac69f1cac3ad0e4e",
								endDate: "2021-11-01T18:30:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-18T15:00:00.000Z",
		},
		{
			title: "TOHU",
			id: "c1cff0fdfa7f4a70b823b81ef6a306af",
			namespace: "2227f922da854b38a15f44dfb4daba20",
			description:
				"Experience a brand new adventure game set amongst a world of weird and wonderful fish planets. Explore beautiful environments, solve intricate puzzles and discover the truth about a mysterious little girl and her mechanical alter-ego, Cubus.",
			effectiveDate: "2021-10-18T15:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOHU_FireartGames_S1_2560x1440-b293869b354e46f0db5a55465221b1d4",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOHU_FireartGames_S2_1200x1600-b539e35c8e1ea33fdf9aecf21930737a",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOHU_FireartGames_S2_1200x1600-b539e35c8e1ea33fdf9aecf21930737a",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOHU_FireartGames_S2_1200x1600-b539e35c8e1ea33fdf9aecf21930737a",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOHU_FireartGames_S2_1200x1600-b539e35c8e1ea33fdf9aecf21930737a",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOHU_FireartGames_S1_2560x1440-b293869b354e46f0db5a55465221b1d4",
				},
			],
			currentPrice: 1299,
			seller: {
				id: "o-h3rhw2ntexmcgx44cv2pdje5bz3nqh",
				name: "The Irregular Corporation",
			},
			productSlug: "tohu",
			urlSlug: "tohu",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "bdd0ab034e55449ebf71d3842dd72fb1",
					namespace: "2227f922da854b38a15f44dfb4daba20",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "The Irregular Corporation",
				},
				{
					key: "developerName",
					value: "Fireart Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "tohu",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "tohu",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 870,
					originalPrice: 1299,
					voucherDiscount: 0,
					discount: 429,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€12.99",
						discountPrice: "€8.70",
						intermediatePrice: "€8.70",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "67d227233e8b4cafa4f59c1cedc88b12",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-18T15:00:00.000Z",
		},
		{
			title: "Rise of the Tomb Raider: 20 Year Celebration",
			id: "1d053e8b4a784eb2bbe1b1924419d459",
			namespace: "48ffecf4a89f4fd496817b0451384f39",
			description:
				"Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content. Explore Croft Manor in the new “Blood Ties” story, then defend it against a zombie invasion in “Lara’s Nightmare”.",
			effectiveDate: "2021-10-18T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S2_1200x1600-a73f93bb560142e08d56db4c2bfdb03c",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S2_1200x1600-a73f93bb560142e08d56db4c2bfdb03c",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S1_2560x1440-3bd5b3c4c11d46cc2dcb06bdf2f77627",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S2_1200x1600-a73f93bb560142e08d56db4c2bfdb03c",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S1_2560x1440-3bd5b3c4c11d46cc2dcb06bdf2f77627",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S2_1200x1600-a73f93bb560142e08d56db4c2bfdb03c",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-7petn7mrlk8g86ktqm7uglcr7lfaja",
				name: "Square Enix",
			},
			productSlug: "rise-of-the-tomb-raider",
			urlSlug: "rise-of-the-tomb-raider",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1203",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "964b15ed40eb46149886d075ef357894",
					namespace: "48ffecf4a89f4fd496817b0451384f39",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Square Enix",
				},
				{
					key: "developerName",
					value: "Crystal Dynamics",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "rise-of-the-tomb-raider",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "rise-of-the-tomb-raider",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Crystal Dynamics",
			publisherDisplayName: "Square Enix",
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-18T13:00:00.000Z",
		},
		{
			title: "Crysis 3 Remastered",
			id: "f8297d4bdddd4e8b8bc454f51f0b8ba4",
			namespace: "f541519f3d21457ba7dcf5b57f1014b2",
			description:
				"Experience the single-player experience  from the iconic first-person shooter, Crysis 3, optimized to take advantage of today's hardware in Crysis 3 Remastered.",
			effectiveDate: "2021-10-15T07:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S1_2560x1440-41fbaada976a5b44bbc1e9aa22987e95",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S1_2560x1440-41fbaada976a5b44bbc1e9aa22987e95",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-3vwngp9neexv58akmmcd67srxym3a4",
				name: "Crytek GmbH",
			},
			productSlug: "crysis-3-remastered",
			urlSlug: "crysis-3-remastered",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "95c62376d40a4778bd125a209d5907e4",
					namespace: "f541519f3d21457ba7dcf5b57f1014b2",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Crytek",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "crysis-3-remastered",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "crysis-3-remastered",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-15T07:00:00.000Z",
		},
		{
			title: "Crysis Remastered Trilogy",
			id: "5329e75ddce44287b4358238fff13915",
			namespace: "b79db6afde654a17a95c4f930e591c75",
			description:
				"Crysis Remastered Trilogy includes each of the single-player campaigns from the legendary first-person shooters Crysis, Crysis 2, and Crysis 3, optimized for today's hardware.   Relive the adventure in this great value all-in-one bundle.   ",
			effectiveDate: "2021-10-15T07:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CrysisRemasteredTrilogy_Crytek_S2_1200x1600-c58109d2ea25771ab13d58d6183fc4d0",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CrysisRemasteredTrilogy_Crytek_S2_1200x1600-c58109d2ea25771ab13d58d6183fc4d0",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CrysisRemasteredTrilogy_Crytek_S1_2560x1440-6f3f22009b9a20551166c6dd6bcd95a6",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CrysisRemasteredTrilogy_Crytek_S2_1200x1600-c58109d2ea25771ab13d58d6183fc4d0",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CrysisRemasteredTrilogy_Crytek_S1_2560x1440-6f3f22009b9a20551166c6dd6bcd95a6",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CrysisRemasteredTrilogy_Crytek_S2_1200x1600-c58109d2ea25771ab13d58d6183fc4d0",
				},
			],
			currentPrice: 4999,
			seller: {
				id: "o-3vwngp9neexv58akmmcd67srxym3a4",
				name: "Crytek GmbH",
			},
			productSlug: "crysis-remastered-trilogy",
			urlSlug: "crysis-remastered-trilogy",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "0f3a79560c854fc1aa215dc7f3072e84",
					namespace: "17a1f8585f9246808597b30780aaf4fb",
				},
				{
					id: "3afa71f83f1d45e6b4be99fada3f23c9",
					namespace: "ac082b5524e94daf9b431ee4cb8a9dd0",
				},
				{
					id: "95c62376d40a4778bd125a209d5907e4",
					namespace: "f541519f3d21457ba7dcf5b57f1014b2",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Crytek",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "crysis-remastered-trilogy",
				},
			],
			categories: [
				{
					path: "bundles",
				},
				{
					path: "bundles/games",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: null,
			},
			offerMappings: null,
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 4999,
					originalPrice: 4999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€49.99",
						discountPrice: "€49.99",
						intermediatePrice: "€49.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-15T07:00:00.000Z",
		},
		{
			title: "Crysis 2 Remastered",
			id: "06a518b864224400b25ee994eb11a492",
			namespace: "ac082b5524e94daf9b431ee4cb8a9dd0",
			description:
				"Relive the legendary single-player campaign  from the classic first-person shooter, Crysis 2, optimized for today's hardware in Crysis 2 Remastered. ",
			effectiveDate: "2021-10-15T07:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis2Remastered_Crytek_S2_1200x1600-a5e7d0c976ee5270055975afac5daff0",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis2Remastered_Crytek_S2_1200x1600-a5e7d0c976ee5270055975afac5daff0",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis2Remastered_Crytek_S1_2560x1440-fd507ed73e95770a3fe990ee78e3012f",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis2Remastered_Crytek_S2_1200x1600-a5e7d0c976ee5270055975afac5daff0",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis2Remastered_Crytek_S1_2560x1440-fd507ed73e95770a3fe990ee78e3012f",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis2Remastered_Crytek_S2_1200x1600-a5e7d0c976ee5270055975afac5daff0",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-3vwngp9neexv58akmmcd67srxym3a4",
				name: "Crytek GmbH",
			},
			productSlug: "crysis-2-remastered",
			urlSlug: "crysis-2-remastered",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "3afa71f83f1d45e6b4be99fada3f23c9",
					namespace: "ac082b5524e94daf9b431ee4cb8a9dd0",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Crytek",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "crysis-2-remastered",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "crysis-2-remastered",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-15T07:00:00.000Z",
		},
		{
			title: "True Hate",
			id: "ec4a8a1cd1dd4cc2b05c7c5b57f4f4c5",
			namespace: "e41afb4c515743c4a9df79b99f6c476c",
			description:
				"Die again and again, to start all over again, the taste of victory is sweeter if the path to it is through pain and suffering.",
			effectiveDate: "2021-10-14T21:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/fca72f250b4f4c02977fd3d4f45cca3c/true-hate-offer-logo-s9pll.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/fca72f250b4f4c02977fd3d4f45cca3c/true-hate-offer-11gwr.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/fca72f250b4f4c02977fd3d4f45cca3c/download-true-hate-offer-116vs.png",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/fca72f250b4f4c02977fd3d4f45cca3c/download-true-hate-offer-13vmn.png",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/fca72f250b4f4c02977fd3d4f45cca3c/true-hate-offer-1qfy7.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/fca72f250b4f4c02977fd3d4f45cca3c/download-true-hate-offer-116vs.png",
				},
			],
			currentPrice: 599,
			seller: {
				id: "o-4znrhnwegcs2lhcsaqvbej9xspq63f",
				name: "Boom Games",
			},
			productSlug: null,
			urlSlug: "4218d76f49fa4d358a5620c3fb28fbe6",
			url: null,
			tags: [
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1151",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "c7e25cd802c14100946a185d4c723517",
					namespace: "e41afb4c515743c4a9df79b99f6c476c",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "true-hate-007027",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "true-hate-007027",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Boom Games",
			publisherDisplayName: "Boom Games",
			price: {
				totalPrice: {
					discountPrice: 599,
					originalPrice: 599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€5.99",
						discountPrice: "€5.99",
						intermediatePrice: "€5.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T21:00:00.000Z",
		},
		{
			title: "The Alien Cube",
			id: "0cb0d7a14b074f45b34c937dcf2bd79b",
			namespace: "ea4755484f8641a4a540c227bb62f02d",
			description:
				"Worlds collide as your cursed inheritance throws you into the middle of a series of mysterious events. Discover terrifying secrets as you follow your uncle’s disappearance, and confront a terrible truth that will change your life forever in this  first-person cosmic horror.",
			effectiveDate: "2021-10-14T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/99df7fc975d14b08a38bab63f5e497e1/the-alien-cube-offer-logo-ccnbq.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/99df7fc975d14b08a38bab63f5e497e1/the-alien-cube-offer-1m1l5.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/99df7fc975d14b08a38bab63f5e497e1/the-alien-cube-offer-1aeyd.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/99df7fc975d14b08a38bab63f5e497e1/download-the-alien-cube-offer-6ujsd.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/99df7fc975d14b08a38bab63f5e497e1/download-the-alien-cube-offer-16ws6.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/99df7fc975d14b08a38bab63f5e497e1/download-the-alien-cube-offer-16ws6.jpg",
				},
			],
			currentPrice: 1998,
			seller: {
				id: "o-9rjv952axbevlpcy8xuyunjyhtpkva",
				name: "Alessandro Guzzo Organization",
			},
			productSlug: null,
			urlSlug: "a41987f0ac2640709edcef24c1eb7902",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "1f7d0fe332134c29b1aa6197b5b1cc22",
					namespace: "ea4755484f8641a4a540c227bb62f02d",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "the-alien-cube-789431",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "the-alien-cube-789431",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Alessandro Guzzo",
			publisherDisplayName: "Alessandro Guzzo",
			price: {
				totalPrice: {
					discountPrice: 1798,
					originalPrice: 1998,
					voucherDiscount: 0,
					discount: 200,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.98",
						discountPrice: "€17.98",
						intermediatePrice: "€17.98",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "5f5a1983c92a4ecab4880b86dbdc17a2",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-14T17:00:00.000Z",
		},
		{
			title: "Stubbs the Zombie in Rebel Without a Pulse",
			id: "f060c900b80441fda67a7d986c327905",
			namespace: "dcbacb85c17e4d39b885d0ba252dc8a7",
			description:
				"Be the Zombie. Kick A** and Take Brains. It’s 1959 and the city of Punchbowl, PA, is a beacon of progress and ideal living. Show the living that law and order are no match for a dead man on a mission!",
			effectiveDate: "2021-10-14T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_StubbstheZombieinRebelWithoutaPulse_Aspyr_S2_1200x1600-359879dde776d9c24789109ec6ce2f4d",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_StubbstheZombieinRebelWithoutaPulse_Aspyr_S2_1200x1600-359879dde776d9c24789109ec6ce2f4d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_StubbstheZombieinRebelWithoutaPulse_Aspyr_S1_2560x1440-84943e5f6ce5f32aeaa690b79efc14e1",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_StubbstheZombieinRebelWithoutaPulse_Aspyr_S2_1200x1600-359879dde776d9c24789109ec6ce2f4d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_StubbstheZombieinRebelWithoutaPulse_Aspyr_S1_2560x1440-84943e5f6ce5f32aeaa690b79efc14e1",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_StubbstheZombieinRebelWithoutaPulse_Aspyr_S2_1200x1600-359879dde776d9c24789109ec6ce2f4d",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-dukzxsmt2q39w2xql6eb8vewd2bkc9",
				name: "Aspyr Media, Inc.",
			},
			productSlug: "stubbs-the-zombie-in-rebel-without-a-pulse",
			urlSlug: "stubbs-the-zombie-in-rebel-without-a-pulse",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1137",
				},
				{
					id: "1220",
				},
				{
					id: "1301",
				},
				{
					id: "1161",
				},
				{
					id: "1306",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "ad070ae3d0b7422bb82c07aa3c0e2a01",
					namespace: "dcbacb85c17e4d39b885d0ba252dc8a7",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Aspyr",
				},
				{
					key: "developerName",
					value: "Aspyr",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "stubbs-the-zombie-in-rebel-without-a-pulse",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "stubbs-the-zombie-in-rebel-without-a-pulse",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Aspyr",
			publisherDisplayName: "Aspyr",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T15:00:00.000Z",
		},
		{
			title: "Sunblaze",
			id: "751660a98c974c238203f2ef4e7c5ab6",
			namespace: "c59985e0c23d468ca98440ccad5f6f7f",
			description:
				"Lead Josie into her retired superhero dad's training simulator! But beware, the training room might go rogue, and keep you inside... Sunblaze is a brain-twisting precision platformer with hundreds of challenging, handcrafted levels to keep you dying for hours.",
			effectiveDate: "2021-10-14T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sunblaze_GamesFromEarth_S2_1200x1600-5839dd10f69bf547fbb41e3865ca021d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sunblaze_GamesFromEarth_S1_2560x1440-03cd84a2395ca0dc32b26a0d6b7eb58b",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sunblaze_GamesFromEarth_S2_1200x1600-5839dd10f69bf547fbb41e3865ca021d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sunblaze_GamesFromEarth_S1_2560x1440-03cd84a2395ca0dc32b26a0d6b7eb58b",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sunblaze_GamesFromEarth_S2_1200x1600-5839dd10f69bf547fbb41e3865ca021d",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sunblaze_GamesFromEarth_S2_1200x1600-5839dd10f69bf547fbb41e3865ca021d",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-43hvl8d24m5s3vflmsszaqws3ep45b",
				name: "Bonus Stage Publishing",
			},
			productSlug: "sunblaze",
			urlSlug: "sunblaze",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1151",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "171d919d1c9f456bad9e9a8aa262d1eb",
					namespace: "c59985e0c23d468ca98440ccad5f6f7f",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Bonus Stage Publishing",
				},
				{
					key: "developerName",
					value: "Games From Earth",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "sunblaze",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "sunblaze",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1499,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€14.99",
						intermediatePrice: "€14.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T15:00:00.000Z",
		},
		{
			title: "Godstrike",
			id: "a7fcc729a09a4338b23593d2cb96738b",
			namespace: "5b93ba7d580342d3ab19d28da40bc852",
			description:
				"Godstrike is a twin-stick shooter where time is your health and currency. Face off against ruthless bosses in tense, 1v1 showdowns as Talaal, the last Herald.",
			effectiveDate: "2021-10-14T13:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/21532dafb6b742dc865677763683b748/godstrike-offer-logo-uxyrf.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/21532dafb6b742dc865677763683b748/godstrike-offer-1ksy3.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/21532dafb6b742dc865677763683b748/download-godstrike-offer-apryv.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/21532dafb6b742dc865677763683b748/download-godstrike-offer-1bvk8.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/21532dafb6b742dc865677763683b748/godstrike-offer-61jlf.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/21532dafb6b742dc865677763683b748/download-godstrike-offer-apryv.jpg",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-rlswgtffm6ua68662gd37xv3lmq95q",
				name: "Freedom Games",
			},
			productSlug: null,
			urlSlug: "a1afb9a64ced406a83ceedd91fc55359",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "5f83c45a576249c79f69bb61cce8dd78",
					namespace: "5b93ba7d580342d3ab19d28da40bc852",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "godstrike-dad86e",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "godstrike-dad86e",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Overpowered Team",
			publisherDisplayName: "Freedom Games",
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T13:00:00.000Z",
		},
		{
			title: "Ruin Raiders",
			id: "781921e9423645f7910b334726aa42c4",
			namespace: "55370026bd804911b3f5e1a9edaadda0",
			description:
				"Ruin Raiders is a turn-based tactical roguelike where you command customizable squads on a one-way journey into the ruins of an ancient civilization. Master turn-based combat, craft new technologies, and dive into ever-changing ruins to unveil the past!",
			effectiveDate: "2021-10-14T13:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/df1ecdbbb1784746bed9fb8bf03c0a25/ruin-raiders-offer-logo-1itvq.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/df1ecdbbb1784746bed9fb8bf03c0a25/ruin-raiders-offer-v0qp4.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/df1ecdbbb1784746bed9fb8bf03c0a25/download-ruin-raiders-offer-13ccr.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/df1ecdbbb1784746bed9fb8bf03c0a25/ruin-raiders-offer-e6um2.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/df1ecdbbb1784746bed9fb8bf03c0a25/download-ruin-raiders-offer-1i74f.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/df1ecdbbb1784746bed9fb8bf03c0a25/download-ruin-raiders-offer-13ccr.jpg",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-rlswgtffm6ua68662gd37xv3lmq95q",
				name: "Freedom Games",
			},
			productSlug: null,
			urlSlug: "2f8a659fcf7849478fa590abc257de9b",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "4049cd381bb74eeeb24d2cbc373be081",
					namespace: "55370026bd804911b3f5e1a9edaadda0",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "ruin-raiders-d2d613",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "ruin-raiders-d2d613",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Overpowered Team",
			publisherDisplayName: "Freedom Games",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T13:00:00.000Z",
		},
		{
			title: "The Riftbreaker",
			id: "6d00edfcf33a48149494c96b9cc5fde4",
			namespace: "f774d8b9a9324124892868e7b5c71169",
			description:
				"Base-building, survival game with Action-RPG elements. You are an elite scientist/commando inside an advanced Mecha-Suit capable of dimensional rift travel. Hack & slash countless enemies. Build up your base, collect samples and research new inventions.",
			effectiveDate: "2021-10-14T08:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/egs-theriftbreaker-exorstudios-s3-2560x1440-75291424bf25_2560x1440-7fc550d5bbcf31fb84d5f3a75d42d4d8",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/egs-theriftbreaker-exorstudios-s4-1200x1600-5d25ed8ca3fb_1200x1600-121fa1fe2d902cddbc0157927bd8574b",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/egs-theriftbreaker-exorstudios-s4-1200x1600-5d25ed8ca3fb_1200x1600-121fa1fe2d902cddbc0157927bd8574b",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/egs-theriftbreaker-exorstudios-s4-1200x1600-5d25ed8ca3fb_1200x1600-121fa1fe2d902cddbc0157927bd8574b",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/egs-theriftbreaker-exorstudios-s3-2560x1440-75291424bf25_2560x1440-7fc550d5bbcf31fb84d5f3a75d42d4d8",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/egs-theriftbreaker-exorstudios-s4-1200x1600-5d25ed8ca3fb_1200x1600-121fa1fe2d902cddbc0157927bd8574b",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-e8gktlrrf9zkrs9zuhlhd3xlf2znyv",
				name: "EXOR Studios",
			},
			productSlug: "the-riftbreaker",
			urlSlug: "theriftbreaker-general-audience",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "7782e7352f5d477c990f3b4467bca14b",
					namespace: "f774d8b9a9324124892868e7b5c71169",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "EXOR Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "the-riftbreaker",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "the-riftbreaker",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T08:00:00.000Z",
		},
		{
			title: "The Jackbox Party Pack 8",
			id: "2721d42f51ca4f38bb6280b8e1411756",
			namespace: "44f0df6169284f7fa6d0cddadb3e0ff9",
			description:
				"Plan a game night with the looping lunacy of Drawful Animate, scrambled sentences in Job Job, surveys and teamwork in The Poll Mine, doodling and deduction in Weapons Drawn and chance and trivia in The Wheel of Enormous Proportions.",
			effectiveDate: "2021-10-14T05:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheJackboxPartyPack8_JackboxGamesInc_S2_1200x1600-d1d10b4cc56754b1320b3c0d239f77b4",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheJackboxPartyPack8_JackboxGamesInc_S2_1200x1600-d1d10b4cc56754b1320b3c0d239f77b4",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheJackboxPartyPack8_JackboxGamesInc_S1_2560x1440-a74d279b3f76da138743de552aa9bdb4",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheJackboxPartyPack8_JackboxGamesInc_S2_1200x1600-d1d10b4cc56754b1320b3c0d239f77b4",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheJackboxPartyPack8_JackboxGamesInc_S1_2560x1440-a74d279b3f76da138743de552aa9bdb4",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheJackboxPartyPack8_JackboxGamesInc_S2_1200x1600-d1d10b4cc56754b1320b3c0d239f77b4",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-2m9ap45qzvalaepjz6wclpcffeq4aj",
				name: "Jackbox Games, Inc.",
			},
			productSlug: "jackbox-party-pack-8",
			urlSlug: "jackbox-party-pack-8",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "1203",
				},
				{
					id: "1110",
				},
				{
					id: "9547",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "d4499bf582bd4523aef3eb8e863bbf8f",
					namespace: "44f0df6169284f7fa6d0cddadb3e0ff9",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Jackbox Games, Inc.",
				},
				{
					key: "developerName",
					value: "Jackbox Games, Inc.",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "jackbox-party-pack-8",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "jackbox-party-pack-8",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2399,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€23.99",
						intermediatePrice: "€23.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-14T05:00:00.000Z",
		},
		{
			title: "Critadel",
			id: "561066a15349472dae2b26d5243853b3",
			namespace: "6059e91630834685a2795434b2a9689c",
			description:
				"Critadel is a futuristic platform/shooter/roguelike with three playable characters, hundreds of branching paths and over 100,000 unique weapon configurations!",
			effectiveDate: "2021-10-13T18:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Critadel_PixelianStudio_S2_1200x1600-bd44a6c4d6aab9e1085af5cf877c95ac",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Critadel_PixelianStudio_S2_1200x1600-bd44a6c4d6aab9e1085af5cf877c95ac",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Critadel_PixelianStudio_S2_1200x1600-bd44a6c4d6aab9e1085af5cf877c95ac",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Critadel_PixelianStudio_S3_2560x1440-5e15dab7d6a83ccf969bc3991e4dc729",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-ybzxtem8hqs87ahht3w4vtf6eqd2zh",
				name: "Nicalis",
			},
			productSlug: "critadel",
			urlSlug: "olive-general-audience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "1083",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "939b17ae18d24c35930c980802fa66da",
					namespace: "6059e91630834685a2795434b2a9689c",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Nicalis",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "critadel",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "critadel",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Pixelian Studio  ",
			publisherDisplayName: "Nicalis  ",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-13T18:00:00.000Z",
		},
		{
			title: "Expeditions: Viking",
			id: "b7740f73049d4bc4981cf27ccb03f539",
			namespace: "b0558db0e2c741a69e83c0106b62ac85",
			description:
				"Circa 790 AD. A small band of Norse warriors lands on the shores of England. History may have forgotten their names, but their actions live on. As the chieftain of your clan, let ambition guide your choices in the party-based RPG Expeditions: Viking.",
			effectiveDate: "2021-10-12T20:30:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsViking_LogicArtists_S2_1200x1600-149ca492cef6dff9152ddd751ea1f2dc",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsViking_LogicArtists_S1_2560x1440-9a97984351524512341351b9b69e370e",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsViking_LogicArtists_S2_1200x1600-149ca492cef6dff9152ddd751ea1f2dc",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsViking_LogicArtists_S1_2560x1440-9a97984351524512341351b9b69e370e",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsViking_LogicArtists_S2_1200x1600-149ca492cef6dff9152ddd751ea1f2dc",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsConquistador_LogicArtists_S2_1200x1600-6bba2379f3d499f94b0ad48da593f68d",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-jywxgemg3dagnv6fymcngq3g29mc4j",
				name: "THQ Nordic GmbH",
			},
			productSlug: "expeditions-viking",
			urlSlug: "expeditions-viking",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "17885",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "353659ebe0344522822a953008f346cb",
					namespace: "b0558db0e2c741a69e83c0106b62ac85",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "THQ Nordic",
				},
				{
					key: "developerName",
					value: "Logic Artists",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "expeditions-viking",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "expeditions-viking",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-12T20:30:00.000Z",
		},
		{
			title: "Expeditions: Conquistador",
			id: "48d887a9b1604a7fb3b5943e4f0abfaf",
			namespace: "aac4b9ffbb924df39a59485b10944012",
			description:
				"Conquer the New world: In the 16th Century, Spanish explorers and soldiers reached the shores of America. The search for gold, fame, and adventure drove these travelers into a treacherous wilderness where they faced hunger, disease, and dangerous predators.",
			effectiveDate: "2021-10-12T20:30:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsConquistador_LogicArtists_S2_1200x1600-6bba2379f3d499f94b0ad48da593f68d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsConquistador_LogicArtists_S1_2560x1440-a38a66078aa0ad9dce6d762666c72f31",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsConquistador_LogicArtists_S2_1200x1600-6bba2379f3d499f94b0ad48da593f68d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsConquistador_LogicArtists_S1_2560x1440-a38a66078aa0ad9dce6d762666c72f31",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsConquistador_LogicArtists_S2_1200x1600-6bba2379f3d499f94b0ad48da593f68d",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-jywxgemg3dagnv6fymcngq3g29mc4j",
				name: "THQ Nordic GmbH",
			},
			productSlug: null,
			urlSlug: "expeditions-conquistador",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "17885",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "bed1f279f4ba41a5a7a76ea2dd6139b6",
					namespace: "aac4b9ffbb924df39a59485b10944012",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "THQ Nordic GmbH",
				},
				{
					key: "com.epicgames.app.productSlu",
					value: "expeditions-conquistador",
				},
				{
					key: "developerName",
					value: "THQ Nordic GmbH",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "expeditions-conquistador",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-12T20:30:00.000Z",
		},
		{
			title: "Back 4 Blood: Standard Edition",
			id: "48bb8979d7e6469a9a5adcbca67c2abb",
			namespace: "57dfd95548214a138218e56cd9e5b9d8",
			description:
				"Back 4 Blood is a thrilling cooperative first-person shooter with an intense 4 player co-op narrative campaign, competitive multiplayer as human or Ridden, and frenetic gameplay that keeps you in the action.",
			effectiveDate: "2021-10-12T15:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S1-2560x1440-c50bb45e4f6f4805a26914e28491c15a.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S1-2560x1440-c50bb45e4f6f4805a26914e28491c15a.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S4-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S4-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S6-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg",
				},
			],
			currentPrice: 5999,
			seller: {
				id: "o-7kyv8uwtz74njnl544kbxzt5xqephw",
				name: "Warner Bros.",
			},
			productSlug: "back-4-blood/home",
			urlSlug: "back-4-blood",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1185",
				},
				{
					id: "1203",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1294",
				},
			],
			items: [
				{
					id: "7022e7ac45be42b385df85b131d0de12",
					namespace: "57dfd95548214a138218e56cd9e5b9d8",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Warner Bros. Games",
				},
				{
					key: "developerName",
					value: "Turtle Rock Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "back-4-blood/home",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "back-4-blood",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 5999,
					originalPrice: 5999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€59.99",
						discountPrice: "€59.99",
						intermediatePrice: "€59.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-12T15:00:00.000Z",
		},
		{
			title: "Void Tyrant",
			id: "00a9baf6862444f3931268a17c7349c1",
			namespace: "9c4d0f80d0fc4cd48760ad7355cd3cac",
			description:
				"Collect an intergalactic bounty of eccentric allies and deadly weapons, explore vibrant planets, and engage in risky turn-based battles to restore the Eyes of Chronos and save the galaxy in this strategic roguelike deckbuilder! ",
			effectiveDate: "2021-10-11T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/ea875101-4779-4383-87d9-d7a293588fab_1200x1600-c739120975a0a1414c6dbbcb613fdb36",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/ea875101-4779-4383-87d9-d7a293588fab_1200x1600-c739120975a0a1414c6dbbcb613fdb36",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/ea875101-4779-4383-87d9-d7a293588fab_1200x1600-c739120975a0a1414c6dbbcb613fdb36",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/ea875101-4779-4383-87d9-d7a293588fab_1200x1600-c739120975a0a1414c6dbbcb613fdb36",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/voidtyrant_2560x1440-96e7ff66d4273b235b65a30204295c25",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/voidtyrant_2560x1440-96e7ff66d4273b235b65a30204295c25",
				},
			],
			currentPrice: 799,
			seller: {
				id: "o-ttudgfyffrswppq6pflnkwfzdm6qc3",
				name: "Armor Games Studios",
			},
			productSlug: "Void-tyrant",
			urlSlug: "kenai-general-audience",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1181",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "cf4e0f080e1a4cac9f7e593d8be39a70",
					namespace: "9c4d0f80d0fc4cd48760ad7355cd3cac",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "Void-tyrant",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "void-tyrant",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Quite Fresh Games",
			publisherDisplayName: "Armor Games Studios.com",
			price: {
				totalPrice: {
					discountPrice: 799,
					originalPrice: 799,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€7.99",
						discountPrice: "€7.99",
						intermediatePrice: "€7.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-11T17:00:00.000Z",
		},
		{
			title: "PC Building Simulator",
			id: "7bfbb022d2fa4d67a4844631ecd5c027",
			namespace: "8f5f5eff22f3468fa5551771406fc868",
			description:
				"Build and grow your very own computer repair enterprise as you learn to diagnose, fix and build PCs. With real-world licensed components and comprehensive hardware and software simulation, you can plan and bring your ultimate PC to life.",
			effectiveDate: "2021-10-07T15:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S2_1200x1600-aff87a5534769574ce1ccc6e24772b4c",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S1_2560x1440-053592d64b04adff6734a480dcead96d",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S2_1200x1600-aff87a5534769574ce1ccc6e24772b4c",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S1_2560x1440-053592d64b04adff6734a480dcead96d",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S2_1200x1600-aff87a5534769574ce1ccc6e24772b4c",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S2_1200x1600-aff87a5534769574ce1ccc6e24772b4c",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-h3rhw2ntexmcgx44cv2pdje5bz3nqh",
				name: "The Irregular Corporation",
			},
			productSlug: "pc-building-simulator",
			urlSlug: "pc-building-simulator",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "1ca7e2df7f33494795f7f05d5dad1aa5",
					namespace: "8f5f5eff22f3468fa5551771406fc868",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "The Irregular Corporation",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "pc-building-simulator",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "pc-building-simulator",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 639,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 960,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€6.39",
						intermediatePrice: "€6.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "19689b5adfae4adfaf05d232c646a7f7",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-10-07T15:00:00.000Z",
		},
		{
			title: "Far Cry 6 Standard Edition",
			id: "15a1d72c10ff46f396d9666f904ecb80",
			namespace: "b4565296c22549e4830c13bc7506642d",
			description:
				"Dive into the gritty world of a modern-day guerilla revolution to liberate a nation from a dictator and his son.",
			effectiveDate: "2020-07-12T20:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
				},
			],
			currentPrice: 5999,
			seller: {
				id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
				name: "Ubisoft Entertainment",
			},
			productSlug: "far-cry-6/home",
			urlSlug: "kolachegeneralaudience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1185",
				},
				{
					id: "1203",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "9d915ff014a0450ba2ce722995ffe752",
					namespace: "b4565296c22549e4830c13bc7506642d",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "CN",
				},
				{
					key: "publisherName",
					value: "Ubisoft",
				},
				{
					key: "developerName",
					value: "Ubisoft Toronto",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "far-cry-6/home",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "far-cry-6",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 5999,
					originalPrice: 5999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€59.99",
						discountPrice: "€59.99",
						intermediatePrice: "€59.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-07T04:00:00.000Z",
		},
		{
			title: "Blade Strangers",
			id: "e85314e2458f49ad8f2da31879ca0a93",
			namespace: "266c5badcfd144cbbeedd44499d85a62",
			description: "Blade Strangers",
			effectiveDate: "2021-10-06T17:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BladeStrangers_StudioSaizensenCoLtd_S1_2560x1440-c6c69d734c4267f8bcf5f9be09820035",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BladeStrangers_StudioSaizensenCoLtd_S2_1200x1600-f1df9e500cb85147c3243ca06f6d81ef",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BladeStrangers_StudioSaizensenCoLtd_S1_2560x1440-c6c69d734c4267f8bcf5f9be09820035",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BladeStrangers_StudioSaizensenCoLtd_S2_1200x1600-f1df9e500cb85147c3243ca06f6d81ef",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BladeStrangers_StudioSaizensenCoLtd_S2_1200x1600-f1df9e500cb85147c3243ca06f6d81ef",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BladeStrangers_StudioSaizensenCoLtd_S2_1200x1600-f1df9e500cb85147c3243ca06f6d81ef",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-ybzxtem8hqs87ahht3w4vtf6eqd2zh",
				name: "Nicalis",
			},
			productSlug: "blade-strangers",
			urlSlug: "blade-strangers",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1344",
				},
				{
					id: "1203",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "5f1cd0eac5154b7598fc3a752e040b56",
					namespace: "266c5badcfd144cbbeedd44499d85a62",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Nicalis, Inc.",
				},
				{
					key: "developerName",
					value: "Studio Saizensen Co., Ltd",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "blade-strangers",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "blade-strangers",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-06T17:00:00.000Z",
		},
		{
			title: "Blazing Beaks",
			id: "4ad28215d0674fbfade7deab5ded8280",
			namespace: "a63ab7da00fe46ecb7714998234c14a0",
			description:
				"Roguelite - where too much greediness can be fatal. A colorful world with armed birds blazing their way through piles of mutants, monsters and creepy creatures. Lots of mysteries to unravel, secrets to discover and levels to explore.",
			effectiveDate: "2021-10-05T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/c3c51fbc858f498caba7adf760f81792/blazing-beaks-offer-logo-14tj8.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/c3c51fbc858f498caba7adf760f81792/blazing-beaks-offer-1cm8l.png",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/c3c51fbc858f498caba7adf760f81792/blazing-beaks-offer-1fcus.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/c3c51fbc858f498caba7adf760f81792/download-blazing-beaks-offer-ed5ry.png",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/c3c51fbc858f498caba7adf760f81792/download-blazing-beaks-offer-12hi1.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/c3c51fbc858f498caba7adf760f81792/download-blazing-beaks-offer-ed5ry.png",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-2v23nda68abw5g3hqjk9d2w7qt6ytq",
				name: "UAB Applava",
			},
			productSlug: null,
			urlSlug: "8bce037f8f844d4fa902a7870338773a",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "1083",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "85d988defb8d401e9f1aa0753fff85f0",
					namespace: "a63ab7da00fe46ecb7714998234c14a0",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "blazing-beaks-3d4864",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "blazing-beaks-3d4864",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Applava",
			publisherDisplayName: "Applava",
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-05T17:00:00.000Z",
		},
		{
			title: "Inertial Drift",
			id: "25f1dfd7f27348a8871b9a22b39f56b5",
			namespace: "804924cf93664a5db337e0aaee5c595e",
			description:
				"Forget everything you know about drifting. \nInertial Drift tears up the racing rule book with innovative twin-stick controls, completely re-imagined driving mechanics and a roster of fiercely individual cars.",
			effectiveDate: "2021-10-05T15:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InertialDrift_Level91Entertainment_S2_1200x1600-d82c91aee789cbf99717650a3cc700e1",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InertialDrift_Level91Entertainment_S1_2560x1440-2050007a77e2a5ab140ac91654b0b22c",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InertialDrift_Level91Entertainment_S2_1200x1600-d82c91aee789cbf99717650a3cc700e1",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InertialDrift_Level91Entertainment_S1_2560x1440-2050007a77e2a5ab140ac91654b0b22c",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InertialDrift_Level91Entertainment_S2_1200x1600-d82c91aee789cbf99717650a3cc700e1",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-9l5q72cwxf99kwzprbq6f558383l2l",
				name: "PQube LTD",
			},
			productSlug: "inertial-drift",
			urlSlug: "inertial-drift",
			url: null,
			tags: [
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1212",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "2896ad18b28645769afc2e645688288e",
					namespace: "804924cf93664a5db337e0aaee5c595e",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "PQube LTD",
				},
				{
					key: "developerName",
					value: "PQube LTD",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "inertial-drift",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "inertial-drift",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-05T15:00:00.000Z",
		},
		{
			title: "Override 2: Super Mech League",
			id: "e9e719ddd1964f1ea37d4b6a4b9b2d36",
			namespace: "dd7f8d7482fb404ba45a7a85b5071b49",
			description:
				"Fight in Mech Leagues and soar to new heights, aiming to be the best pilot. Pick your playstyle across match types including 1v1, 2v2, free-for-all, Xenoswarm, King of the Hill and more, unlocking a slew of cosmetics and attachments for your mech of choice.",
			effectiveDate: "2021-10-05T13:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/dd7f8d7482fb404ba45a7a85b5071b49/offer/EGS_Override2SuperMechLeague_ModusStudiosBrazil_S1-2560x1440-f0afec400cf0789dd66eef98aba07a28.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/dd7f8d7482fb404ba45a7a85b5071b49/offer/EGS_Override2SuperMechLeague_ModusStudiosBrazil_S2-1200x1600-485ab3a84506778e6e5e0cf0cdd147b5.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/dd7f8d7482fb404ba45a7a85b5071b49/offer/EGS_Override2SuperMechLeague_ModusStudiosBrazil_S2-1200x1600-485ab3a84506778e6e5e0cf0cdd147b5.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/dd7f8d7482fb404ba45a7a85b5071b49/offer/EGS_Override2SuperMechLeague_ModusStudiosBrazil_S2-1200x1600-485ab3a84506778e6e5e0cf0cdd147b5.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/dd7f8d7482fb404ba45a7a85b5071b49/offer/EGS_Override2SuperMechLeague_ModusStudiosBrazil_S1-2560x1440-f0afec400cf0789dd66eef98aba07a28.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/dd7f8d7482fb404ba45a7a85b5071b49/offer/EGS_Override2SuperMechLeague_ModusStudiosBrazil_S2-1200x1600-485ab3a84506778e6e5e0cf0cdd147b5.jpg",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-a6k23slslegbhbwtel4qx423kuzc3y",
				name: "Maximum Games",
			},
			productSlug: "override-2-super-mech-league",
			urlSlug: "sulfurgeneralaudience",
			url: null,
			tags: [
				{
					id: "1344",
				},
				{
					id: "1203",
				},
				{
					id: "1299",
				},
				{
					id: "9547",
				},
				{
					id: "1343",
				},
			],
			items: [
				{
					id: "d9e2547ed78e4872967ab9b6ef3fe09c",
					namespace: "dd7f8d7482fb404ba45a7a85b5071b49",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Modus Games",
				},
				{
					key: "developerName",
					value: "Modus Studios Brazil",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "override-2-super-mech-league",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "override-2-super-mech-league",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-05T13:00:00.000Z",
		},
		{
			title: "JETT: The Far Shore",
			id: "f8b6084d6bf14c6282333ee36dfa8223",
			namespace: "d5dc736cb39c4b09b32a0049a4009d67",
			description:
				"JETT: The Far Shore invites you on an interstellar expedition to carve out a future for a people haunted by oblivion in this cinematic action adventure.",
			effectiveDate: "2021-10-05T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JETTTHEFARSHORE_SuperbrothersPineScented_S2_1200x1600-7398300b6f6379d901588afe32cdec11",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JETTTHEFARSHORE_SuperbrothersPineScented_S2_1200x1600-7398300b6f6379d901588afe32cdec11",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JETTTHEFARSHORE_SuperbrothersPineScented_S1_2560x1440-06aab902949d99180add16e771325d76",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JETTTHEFARSHORE_SuperbrothersPineScented_S2_1200x1600-7398300b6f6379d901588afe32cdec11",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JETTTHEFARSHORE_SuperbrothersPineScented_S1_2560x1440-06aab902949d99180add16e771325d76",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JETTTHEFARSHORE_SuperbrothersPineScented_S2_1200x1600-7398300b6f6379d901588afe32cdec11",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-tmpfdhe68nuqzgl7yswcp9gv9k2msm",
				name: "Superbrothers",
			},
			productSlug: "jett-the-far-shore",
			urlSlug: "jett-the-far-shore",
			url: null,
			tags: [
				{
					id: "1381",
				},
				{
					id: "1370",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "17470",
				},
			],
			items: [
				{
					id: "74d9d56e4d73483b977c16b15762fa1f",
					namespace: "d5dc736cb39c4b09b32a0049a4009d67",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Superbrothers + Pine Scented",
				},
				{
					key: "developerName",
					value: "Superbrothers + Pine Scented",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "jett-the-far-shore",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "jett-the-far-shore",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2399,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€23.99",
						intermediatePrice: "€23.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-05T13:00:00.000Z",
		},
		{
			title: "Alan Wake Remastered",
			id: "31feea84568f46e9a2fe6289250f2343",
			namespace: "2e92a78949e2474aa89271b8b893f3b0",
			description:
				"In this award-winning cinematic action-thriller, troubled author Alan Wake embarks on a desperate search for his missing wife, Alice. Alan Wake Remastered offers the complete experience, with the main game and its two story expansions - The Signal and The Writer - with stunning new 4K visuals.",
			effectiveDate: "2021-10-05T04:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-8024b0d13e7a3f3888cb27df87cf263f",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-8024b0d13e7a3f3888cb27df87cf263f",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-8024b0d13e7a3f3888cb27df87cf263f",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S1_2560x1440_2560x1440-a49e236a5ac90ad065dd37d8510041ac",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-43dd4a2f28f9edbf0ed1461339fc11d4",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S1_2560x1440_2560x1440-cb115f1a44dab465ea27086cebba5c33",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-e2xslu4mlqqaavphzl6927vtjqamhj",
				name: "Epic Games Publishing",
			},
			productSlug: "alan-wake-remastered",
			urlSlug: "alan-wake-remastered",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1218",
				},
				{
					id: "1187",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "c79f279929734feb84e2f801888626e3",
					namespace: "2e92a78949e2474aa89271b8b893f3b0",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Epic Games Publishing",
				},
				{
					key: "developerName",
					value: "Remedy Entertainment",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "alan-wake-remastered",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "alan-wake-remastered",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "",
			publisherDisplayName: "",
			price: {
				totalPrice: {
					discountPrice: 2999,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€29.99",
						intermediatePrice: "€29.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-05T04:00:00.000Z",
		},
		{
			title: "Animation Throwdown: The Quest for Cards",
			id: "9197e016a4d24da8ad3a9546de5a06d2",
			namespace: "1fe9a1a33a8b4df8bd8dd3b9269f8153",
			description:
				"Family Guy, Bob's Burgers, Futurama, American Dad, and King of the Hill join forces in Animation Throwdown, your favorite new collectible card game.",
			effectiveDate: "2021-10-04T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AnimationThrowdownTheQuestforCards_Kongregate_S2_1200x1600-a760979bd1363d6f507e9f0325efe95e",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AnimationThrowdownTheQuestforCards_Kongregate_S2_1200x1600-a760979bd1363d6f507e9f0325efe95e",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AnimationThrowdownTheQuestforCards_Kongregate_S2_1200x1600-a760979bd1363d6f507e9f0325efe95e",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AnimationThrowdownTheQuestforCards_Kongregate_S1_2560x1440-277cc591ebae1b733623971aed289ac2",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AnimationThrowdownTheQuestforCards_Kongregate_S2_1200x1600-a760979bd1363d6f507e9f0325efe95e",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AnimationThrowdownTheQuestforCards_Kongregate_S1_2560x1440-277cc591ebae1b733623971aed289ac2",
				},
			],
			currentPrice: 0,
			seller: {
				id: "o-ztdpxjrm7lyemkjl4967l76k4vzxfr",
				name: "Kongregate",
			},
			productSlug: "animation-throwdown-the-quest-for-cards",
			urlSlug: "zirconium-general-audience",
			url: null,
			tags: [
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1181",
				},
			],
			items: [
				{
					id: "c0490c2e68084570a0b06ebd42aee1d4",
					namespace: "1fe9a1a33a8b4df8bd8dd3b9269f8153",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Kongregate",
				},
				{
					key: "developerName",
					value: "Kongregate",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "animation-throwdown-the-quest-for-cards",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "animation-throwdown-the-quest-for-cards",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 0,
					originalPrice: 0,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "0",
						discountPrice: "0",
						intermediatePrice: "0",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-10-04T17:00:00.000Z",
		},
		{
			title: "The Eternal Cylinder",
			id: "8b1afe5f20ba4d73a8d3a1cb61351de5",
			namespace: "fa0c74ef7780498fb222dcd099bf82a2",
			description:
				"Control a herd of strange creatures called Trebhums and explore an unforgettable alien world filled with exotic lifeforms and surreal environments. Discover dozens of mutations and evolve to reach new areas, overcome puzzles and survive a dangerous world. ",
			effectiveDate: "2021-09-30T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S2_1200x1600-a87a940bd65fe2853363dd6d93e13811",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S2_1200x1600-a87a940bd65fe2853363dd6d93e13811",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S3_2560x1440-d7fb28493c7513d7f05181e98b7d4858",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S2_1200x1600-a87a940bd65fe2853363dd6d93e13811",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S3_2560x1440-d7fb28493c7513d7f05181e98b7d4858",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S2_1200x1600-a87a940bd65fe2853363dd6d93e13811",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-v3fdwkgaukftabrpt9292vr5tcwj2p",
				name: "Good Shepherd Entertainment",
			},
			productSlug: "the-eternal-cylinder",
			urlSlug: "the-eternal-cylinder",
			url: null,
			tags: [
				{
					id: "1381",
				},
				{
					id: "1080",
				},
				{
					id: "1370",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "f09730963ff54aab90b8053dd7402569",
					namespace: "fa0c74ef7780498fb222dcd099bf82a2",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "{}",
				},
				{
					key: "publisherName",
					value: "Good Shepherd",
				},
				{
					key: "developerName",
					value: "ACE Team",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "the-eternal-cylinder",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "the-eternal-cylinder",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2399,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€23.99",
						intermediatePrice: "€23.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T17:00:00.000Z",
		},
		{
			title: "Lords and Villeins",
			id: "827fe734540841b4af4778c3ad3e8ef1",
			namespace: "c61c00b965d9424b955ca4bd570b5b2d",
			description:
				"Grow dynasties of medieval families and see them evolve and interact as you build their homes, in this lighthearted pixel art city-building strategy simulation. Expand your production chain and influence the daily lives of your villagers to craft a unique story of your settlement",
			effectiveDate: "2021-09-30T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/96d68c63bad34054ad6cfd2b404d219e/lords-and-villeins-offer-logo-okkzn.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/96d68c63bad34054ad6cfd2b404d219e/lords-and-villeins-offer-yqul9.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/96d68c63bad34054ad6cfd2b404d219e/download-lords-and-villeins-offer-la4ns.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/96d68c63bad34054ad6cfd2b404d219e/download-lords-and-villeins-offer-6h8vn.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/96d68c63bad34054ad6cfd2b404d219e/lords-and-villeins-offer-vjtxl.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/96d68c63bad34054ad6cfd2b404d219e/download-lords-and-villeins-offer-la4ns.jpg",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-n4d8bf5e8fnr4kujuut9j6v4d29muc",
				name: "1C Online Games Ltd",
			},
			productSlug: null,
			urlSlug: "555d85ee6a9c417c9a60e009d9fe764d",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "1146",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1310",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "528a43f24afd4a15bf88325e54bf87c5",
					namespace: "c61c00b965d9424b955ca4bd570b5b2d",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "lords-and-villeins-746931",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "lords-and-villeins-746931",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Honestly Games",
			publisherDisplayName: "1C Entertainment",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T17:00:00.000Z",
		},
		{
			title: "HOT WHEELS UNLEASHED™",
			id: "7626d56f226c49c5af79685abf167cb6",
			namespace: "71e6bd85af1841f598526da595f22a62",
			description:
				"Collect the best vehicles in the Hot Wheels™ universe, build spectacular tracks and dive into breathtaking races.\nThe most iconic and sought after Hot Wheels™ vehicles are waiting for you. Get ready to make them race at full speed!",
			effectiveDate: "2021-09-30T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S2_1200x1600-30ec276e4019296d3efd50d5b6ffe1bc",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S2_1200x1600-30ec276e4019296d3efd50d5b6ffe1bc",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S1_2560x1440-fcf8a60bb23c64a7f3d0b2ce81334087",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S2_1200x1600-30ec276e4019296d3efd50d5b6ffe1bc",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S1_2560x1440-fcf8a60bb23c64a7f3d0b2ce81334087",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S2_1200x1600-30ec276e4019296d3efd50d5b6ffe1bc",
				},
			],
			currentPrice: 4999,
			seller: {
				id: "o-n7dnjfk8y2kzquszv8mfn55fg68f7a",
				name: "Milestone Srl",
			},
			productSlug: "hot-wheels-unleashed",
			urlSlug: "hot-wheels-unleashed",
			url: null,
			tags: [
				{
					id: "1203",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1212",
				},
			],
			items: [
				{
					id: "b4e5e11f12ad485181a8d9af57787e0a",
					namespace: "71e6bd85af1841f598526da595f22a62",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Milestone Srl",
				},
				{
					key: "developerName",
					value: "Milestone Srl",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "hot-wheels-unleashed",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "hot-wheels-unleashed",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 4999,
					originalPrice: 4999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€49.99",
						discountPrice: "€49.99",
						intermediatePrice: "€49.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T16:00:00.000Z",
		},
		{
			title: "The Last Friend",
			id: "ca90d2e29d714bdba3fadfcf6a55c650",
			namespace: "528150dcd4a5462994608939eb783270",
			description:
				"Doggone tired of the typical brawler or tower defense that is all bark and no bite? Then join Alpha and T. Juan on a dynamic adventure that has you battling hordes of baddies and bosses on their mission to save all the Doggos!",
			effectiveDate: "2021-09-30T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLastFriend_TheStonebotStudioLudusGames_S4_1200x1600-084a044ed0080c2ec8c0dccdf89e41fa",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLastFriend_TheStonebotStudioLudusGames_S4_1200x1600-084a044ed0080c2ec8c0dccdf89e41fa",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLastFriend_TheStonebotStudioLudusGames_S3_2560x1440-c3ca88250a6557234c472ebc83a293c5",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLastFriend_TheStonebotStudioLudusGames_S4_1200x1600-084a044ed0080c2ec8c0dccdf89e41fa",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLastFriend_TheStonebotStudioLudusGames_S3_2560x1440-c3ca88250a6557234c472ebc83a293c5",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheLastFriend_TheStonebotStudioLudusGames_S4_1200x1600-084a044ed0080c2ec8c0dccdf89e41fa",
				},
			],
			currentPrice: 1249,
			seller: {
				id: "o-wwzfgcpzmd2b2ymr5mwvlwfwbpl7ay",
				name: "Skystone Games",
			},
			productSlug: "the-last-friend",
			urlSlug: "the-last-friend",
			url: null,
			tags: [
				{
					id: "1344",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "7abe53a1000f44b2be03c48eae6dce10",
					namespace: "528150dcd4a5462994608939eb783270",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Skystone Games Inc.",
				},
				{
					key: "developerName",
					value: "The Stonebot Studio, Ludus Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "the-last-friend",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "the-last-friend",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "The Stonebot Studio, Ludus Games",
			publisherDisplayName: "Skystone Games Inc.",
			price: {
				totalPrice: {
					discountPrice: 1249,
					originalPrice: 1249,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€12.49",
						discountPrice: "€12.49",
						intermediatePrice: "€12.49",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T16:00:00.000Z",
		},
		{
			title: "INDUSTRIA",
			id: "2dbb1debe54f4555805896caf7844470",
			namespace: "51b1503392e04abab64364092cbfca2b",
			description:
				"INDUSTRIA is a first-person shooter that takes you from East Berlin into a parallel reality, shortly before the end of the Cold War. On the search for a missing work colleague, you decypher a dark past in a mysterious parallel dimension.",
			effectiveDate: "2021-09-30T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S2_1200x1600-b1181c183907044fe877286351ec9905",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S2_1200x1600-b1181c183907044fe877286351ec9905",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S1_2560x1440-6ac8f445f036547e0f7cc20dd4fd814f",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S2_1200x1600-b1181c183907044fe877286351ec9905",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S2_1200x1600-b1181c183907044fe877286351ec9905",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S1_2560x1440-6ac8f445f036547e0f7cc20dd4fd814f",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-q5rkzbndnbcwu6t6gbs59pxydk6jn8",
				name: "Headup Gmbh",
			},
			productSlug: "industria",
			urlSlug: "industria",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "18051",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "e4bbbfbb2cd4401daf095e0bc2e62b49",
					namespace: "51b1503392e04abab64364092cbfca2b",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Headup Gmbh",
				},
				{
					key: "developerName",
					value: "Bleakmill",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "industria",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "industria",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1799,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 200,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€17.99",
						intermediatePrice: "€17.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "8ae90a60220746e4a69ba8e66d85355b",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-30T16:00:00.000Z",
		},
		{
			title: "Europa Universalis IV",
			id: "45b82cb4454b40439b61ba126adfabec",
			namespace: "80d3aeb1d7c3434981e0bcbc47700a83",
			description:
				"Lead any nation from Renaissance to Revolution in a complex simulation of the early modern world. Master the art of war, diplomacy and trade to shape and change your nation’s history!",
			effectiveDate: "2021-09-30T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S4_1200x1600-381fe4bad2c0951566b465ab1a46726d",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S4_1200x1600-381fe4bad2c0951566b465ab1a46726d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S3_2560x1440-aa3002ec221d43dcd7e49f5458e74766",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S2_1200x1600-c6740a476aa44943d38991468a85950d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S3_2560x1440-aa3002ec221d43dcd7e49f5458e74766",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S4_1200x1600-381fe4bad2c0951566b465ab1a46726d",
				},
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_IC1_400x400-f2d3c3bdd328fd3552a4fea1422315db",
				},
			],
			currentPrice: 3199,
			seller: {
				id: "o-tjvfg6rejs6h86qa7k9aa64rrgbxxb",
				name: "Paradox Interactive",
			},
			productSlug: "europa-universalis-iv",
			urlSlug: "europa-universalis-iv",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "1203",
				},
				{
					id: "17779",
				},
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "e108073b4d0b43db8a169594f74f6db9",
					namespace: "80d3aeb1d7c3434981e0bcbc47700a83",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Paradox Development Studio  ",
				},
				{
					key: "developerName",
					value: "Paradox Development Studio / Paradox Tinto  ",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "europa-universalis-iv",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "europa-universalis-iv",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 799,
					originalPrice: 3199,
					voucherDiscount: 0,
					discount: 2400,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€31.99",
						discountPrice: "€7.99",
						intermediatePrice: "€7.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "aecdef09e19e4626beb95f8a3404b907",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-30T15:00:00.000Z",
		},
		{
			title: "Astria Ascending",
			id: "79e13cbc4f624cbdafa1989a31ca7efe",
			namespace: "3000405a9f864d848824e6f6022fb86c",
			description:
				"Explore a vast world on the brink of chaos in a mature, emotional JRPG. Experience an epic story with rewarding turn-based combat and expansive customization rendered in glorious 4K hand drawn visuals.",
			effectiveDate: "2021-09-30T15:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/3000405a9f864d848824e6f6022fb86c/offer/EGS_AstriaAscending_ArtisanStudios_S1-2560x1440-2e2ae65fa60be7c1512adbef1a69fa99.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/3000405a9f864d848824e6f6022fb86c/offer/EGS_AstriaAscending_ArtisanStudios_S2-1200x1600-f34e4e486a3bab08e1f1b371b03b09d8.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/3000405a9f864d848824e6f6022fb86c/offer/EGS_AstriaAscending_ArtisanStudios_S2-1200x1600-f34e4e486a3bab08e1f1b371b03b09d8.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/3000405a9f864d848824e6f6022fb86c/offer/EGS_AstriaAscending_ArtisanStudios_S2-1200x1600-f34e4e486a3bab08e1f1b371b03b09d8.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/3000405a9f864d848824e6f6022fb86c/offer/EGS_AstriaAscending_ArtisanStudios_S1-2560x1440-2e2ae65fa60be7c1512adbef1a69fa99.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/3000405a9f864d848824e6f6022fb86c/offer/EGS_AstriaAscending_ArtisanStudios_S2-1200x1600-f34e4e486a3bab08e1f1b371b03b09d8.jpg",
				},
			],
			currentPrice: 3499,
			seller: {
				id: "o-yw5ga5z854qs64ld82qey3dz2d7z32",
				name: "Plug In Digital SAS",
			},
			productSlug: "astria-ascending",
			urlSlug: "astria-ascending",
			url: null,
			tags: [
				{
					id: "1123",
				},
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1196",
				},
				{
					id: "1309",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "7f164e0792284f72a045ab6de28d84a9",
					namespace: "3000405a9f864d848824e6f6022fb86c",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Plug In Digital SAS",
				},
				{
					key: "developerName",
					value: "Dear Villagers",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "astria-ascending",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "astria-ascending",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2799,
					originalPrice: 3499,
					voucherDiscount: 0,
					discount: 700,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€34.99",
						discountPrice: "€27.99",
						intermediatePrice: "€27.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "a703500cc57d4f258cae0ee8db43239c",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-30T15:00:00.000Z",
		},
		{
			title: "Bonfire Peaks",
			id: "5a3b67c0080f4637a88f64bbcc5f1f44",
			namespace: "c9c5dc2e8d9842558c142ba9ba614bc9",
			description:
				"Set your belongings on fire on a beautiful voxel art puzzle island.\n\nMove onwards, move upwards, and leave nothing behind.\nBonfire Peaks is a puzzle game about closure.",
			effectiveDate: "2021-09-30T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BonfirePeaks_CoreyMartin_S2_1200x1600-f04df39b0bb02e3b2b3db8182d4a9b63",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BonfirePeaks_CoreyMartin_S2_1200x1600-f04df39b0bb02e3b2b3db8182d4a9b63",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BonfirePeaks_CoreyMartin_S1_2560x1440-e808912a17ac07ca9ec537cc8baaad03",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BonfirePeaks_CoreyMartin_S2_1200x1600-f04df39b0bb02e3b2b3db8182d4a9b63",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BonfirePeaks_CoreyMartin_S1_2560x1440-e808912a17ac07ca9ec537cc8baaad03",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BonfirePeaks_CoreyMartin_S2_1200x1600-f04df39b0bb02e3b2b3db8182d4a9b63",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-8n38qrvfawma8qsmu3d37bw7gasm2a",
				name: "Draknek",
			},
			productSlug: "bonfire-peaks",
			urlSlug: "uraniumgeneralaudience",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "aa2c662dff454397b5ee467152259eca",
					namespace: "c9c5dc2e8d9842558c142ba9ba614bc9",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Draknek & Friends",
				},
				{
					key: "developerName",
					value: "Corey Martin",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "bonfire-peaks",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "bonfire-peaks",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T13:00:00.000Z",
		},
		{
			title: "Cruel Bands Career",
			id: "7d879cfbdb7b4d0f998259dff5c9f604",
			namespace: "ff9546ebca6746389c2d7a45c54ac23d",
			description:
				"The Glass Heart Band face challenges brought on by a cruel world! They are on a secret mission and must face varied audiences and bosses to complete their quest.",
			effectiveDate: "2099-09-30T12:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/af7371147f1743439b98cf674651c920/cruel-bands-career-offer-logo-4losw.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/af7371147f1743439b98cf674651c920/cruel-bands-career-offer-1sdiy.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/af7371147f1743439b98cf674651c920/download-cruel-bands-career-offer-98kdb.png",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/af7371147f1743439b98cf674651c920/cruel-bands-career-offer-1sdiy.png",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/af7371147f1743439b98cf674651c920/download-cruel-bands-career-offer-98kdb.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/af7371147f1743439b98cf674651c920/download-cruel-bands-career-offer-98kdb.png",
				},
			],
			currentPrice: 319,
			seller: {
				id: "o-vuh5t9zwwz8negnkv2w2j8dm92xs4l",
				name: "Indienova",
			},
			productSlug: null,
			urlSlug: "696c19fbcdc449858bfd50ce0fcdb90f",
			url: null,
			tags: [
				{
					id: "1296",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "1da5e1e9c01a4716844d48c04085ab7b",
					namespace: "ff9546ebca6746389c2d7a45c54ac23d",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "cruel-bands-career-29d2fd",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "cruel-bands-career-29d2fd",
					pageType: "productHome",
				},
			],
			developerDisplayName: "heran&99",
			publisherDisplayName: "indienova",
			price: {
				totalPrice: {
					discountPrice: 319,
					originalPrice: 319,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€3.19",
						discountPrice: "€3.19",
						intermediatePrice: "€3.19",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T12:00:00.000Z",
		},
		{
			title: "Second Extinction™",
			id: "f9daa3f1cd024908a2d8ef404a6b305d",
			namespace: "fcd3387b58864614b66952d0430d2b9a",
			description:
				"Big map. Big dinosaurs. Big guns.\nFace an ever changing threat level with your friends.\nSecond Extinction is an online co-op FPS with a bite.",
			effectiveDate: "2021-09-30T12:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SecondExtinction_SystemicReaction_S6_1200x1600-8a67e373e3462b41f38e61142c103d03",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SecondExtinction_SystemicReaction_S6_1200x1600-8a67e373e3462b41f38e61142c103d03",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SecondExtinction_SystemicReaction_S2_1200x1600-8a67e373e3462b41f38e61142c103d03",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SecondExtinction_SystemicReaction_S2_1200x1600-8a67e373e3462b41f38e61142c103d03",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SecondExtinction_SystemicReaction_S1_2560x1440-4a9d265c505b45c75b65916c366f5fca",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SecondExtinction_SystemicReaction_S1_2560x1440-4a9d265c505b45c75b65916c366f5fca",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-4gvyc6bwfz49sqpgk6ylt9g5ddexuy",
				name: "Systemic Reaction",
			},
			productSlug: "second-extinction",
			urlSlug: "tallinngeneralaudience",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "1216",
				},
				{
					id: "1185",
				},
				{
					id: "1203",
				},
				{
					id: "18051",
				},
				{
					id: "1210",
				},
				{
					id: "1310",
				},
				{
					id: "1294",
				},
			],
			items: [
				{
					id: "03698aa20d7240aaa6aa4f4dbee277ec",
					namespace: "fcd3387b58864614b66952d0430d2b9a",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR, JP",
				},
				{
					key: "publisherName",
					value: "Systemic Reaction™",
				},
				{
					key: "developerName",
					value: "Systemic Reaction™",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "second-extinction",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "second-extinction",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Systemic Reaction™",
			publisherDisplayName: "Systemic Reaction™",
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 500,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "2d1aa7bd1eca4c67bd846d18cef478ad",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-30T12:00:00.000Z",
		},
		{
			title: "Rogue Lords",
			id: "0b477a53fac049f9aaac1b5bd84e56a1",
			namespace: "e901b6ea77454b0e9d944976a975165c",
			description:
				"A dark fantasy roguelike where you play as the Devil! Lead famous evil geniuses through events and turn-based fights to spread terror and corruption, and use your evil powers to change the game's rules to your advantage.",
			effectiveDate: "2021-09-30T08:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RogueLords_LeikirStudio_S2_1200x1600-b126536afcbcde9099a843c629500ff8",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RogueLords_LeikirStudio_S2_1200x1600-b126536afcbcde9099a843c629500ff8",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RogueLords_LeikirStudio_S1_2560x1440-9bc54937156e2bcfc7a0e2847fda7453",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RogueLords_LeikirStudio_S2_1200x1600-b126536afcbcde9099a843c629500ff8",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RogueLords_LeikirStudio_S1_2560x1440-9bc54937156e2bcfc7a0e2847fda7453",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RogueLords_LeikirStudio_S2_1200x1600-b126536afcbcde9099a843c629500ff8",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-wubu848ps2xcxuwv2m3bhet9gbhdbp",
				name: "Nacon",
			},
			productSlug: "rogue-lords",
			urlSlug: "rogue-lords",
			url: null,
			tags: [
				{
					id: "1258",
				},
				{
					id: "1083",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "7dff96aabbb24c9d94e3aae07c906ee0",
					namespace: "e901b6ea77454b0e9d944976a975165c",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Nacon",
				},
				{
					key: "developerName",
					value: "Leikir Studio",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "rogue-lords",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "rogue-lords",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-30T08:00:00.000Z",
		},
		{
			title: "Guardians of Hyelore",
			id: "84102bbe315b4184a0d68a7a14dbcfee",
			namespace: "333f455592a24f7db42ac87a1d7227c4",
			description:
				"Guardians of Hyelore is an action-packed unit recruitment game pitting your units and strategies against an onslaught of enemies. Hire units, improve your troops, earn achievements, and spawn your Guardian to fight 150+ unique enemies.",
			effectiveDate: "2021-09-29T13:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/df662534e7894571bc8fe5d20454c6ce/guardians-of-hyelore-offer-logo-yezfy.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/df662534e7894571bc8fe5d20454c6ce/guardians-of-hyelore-offer-12loy.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/df662534e7894571bc8fe5d20454c6ce/download-guardians-of-hyelore-offer-9m8qn.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/df662534e7894571bc8fe5d20454c6ce/guardians-of-hyelore-offer-10y39.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/df662534e7894571bc8fe5d20454c6ce/download-guardians-of-hyelore-offer-juf03.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/df662534e7894571bc8fe5d20454c6ce/download-guardians-of-hyelore-offer-9m8qn.jpg",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-rlswgtffm6ua68662gd37xv3lmq95q",
				name: "Freedom Games",
			},
			productSlug: null,
			urlSlug: "da1111524031483598f166b9fe790665",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "227b308c54de43fda8eda5938970ebd5",
					namespace: "333f455592a24f7db42ac87a1d7227c4",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "guardians-of-hyelore-0b07d3",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "guardians-of-hyelore-0b07d3",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Megaglope Studios",
			publisherDisplayName: "Freedom Games",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-29T13:00:00.000Z",
		},
		{
			title: "Centipede: Recharged",
			id: "b44a2808223f4cd0a8ca1376410b5460",
			namespace: "a1edd0d2e28d4d298152c001e7c47e22",
			description:
				"Blast bugs and chase high scores in this glorious revival of an old-school classic, all while jamming to a heart-pounding original score by Megan McDuffee. Play solo or tag in a friend for local co-op across 30 unique challenges or the endless arcade mode.",
			effectiveDate: "2021-09-29T04:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CentipedeRecharged_AdamVisionSneakyBox_S2_1200x1600-c21cc55f661ac17b68c78c90b38dca52",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CentipedeRecharged_AdamVisionSneakyBox_S2_1200x1600-c21cc55f661ac17b68c78c90b38dca52",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CentipedeRecharged_AdamVisionSneakyBox_S1_2560x1440-5a7cfd999625576fbc63f0dbc7d27c46",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CentipedeRecharged_AdamVisionSneakyBox_S2_1200x1600-c21cc55f661ac17b68c78c90b38dca52",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CentipedeRecharged_AdamVisionSneakyBox_S1_2560x1440-5a7cfd999625576fbc63f0dbc7d27c46",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_CentipedeRecharged_AdamVisionSneakyBox_S2_1200x1600-c21cc55f661ac17b68c78c90b38dca52",
				},
			],
			currentPrice: 899,
			seller: {
				id: "o-bhpk86rgthezed539g3hb5avacecqt",
				name: "Atari",
			},
			productSlug: "centipede-recharged",
			urlSlug: "centipede-recharged",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "4ce500cfa353451fa5dd544a66a97e02",
					namespace: "a1edd0d2e28d4d298152c001e7c47e22",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Atari",
				},
				{
					key: "developerName",
					value: "AdamVision, SneakyBox",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "centipede-recharged",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "centipede-recharged",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 899,
					originalPrice: 899,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€8.99",
						discountPrice: "€8.99",
						intermediatePrice: "€8.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-29T04:00:00.000Z",
		},
		{
			title: "UnMetal",
			id: "69dc0c89c81a4923ad0e2688d51689d6",
			namespace: "dfc4917a747748a0a25835f7152a30b4",
			description:
				"UnMetal's a 2D stealth action-adventure that pays homage to the classics with a healthy dose of humor and satire. You play as Jesse Fox, who is definitely NOT an elite commando, under arrest for a crime he didn't commit, and must escape a covert military base.",
			effectiveDate: "2021-09-28T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnMetal_UnEpicFran_S2_1200x1600-e5b232d7beca0df1d9baedb7a6705dbe",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnMetal_UnEpicFran_S2_1200x1600-e5b232d7beca0df1d9baedb7a6705dbe",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnMetal_UnEpicFran_S1_2560x1440-d4a5a544334d56b219bba611d9f89ae1",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnMetal_UnEpicFran_S2_1200x1600-e5b232d7beca0df1d9baedb7a6705dbe",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnMetal_UnEpicFran_S1_2560x1440-d4a5a544334d56b219bba611d9f89ae1",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnMetal_UnEpicFran_S2_1200x1600-e5b232d7beca0df1d9baedb7a6705dbe",
				},
			],
			currentPrice: 1699,
			seller: {
				id: "o-ugw2zblbdkg5xklzadlrt2qe92cdje",
				name: "Versus Evil",
			},
			productSlug: "unmetal",
			urlSlug: "unmetal",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1084",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "57f7a2eaf80e4c57b32659346c034e84",
					namespace: "dfc4917a747748a0a25835f7152a30b4",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Versus Evil",
				},
				{
					key: "developerName",
					value: "UnEpic Fran",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "unmetal",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "unmetal",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1699,
					originalPrice: 1699,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€16.99",
						discountPrice: "€16.99",
						intermediatePrice: "€16.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-28T17:00:00.000Z",
		},
		{
			title: "Dread Templar",
			id: "4263703f1f5c4cfc8a676de33d8d7c81",
			namespace: "195d0bec22bf4b63aab10e4b40f5bf2e",
			description:
				"Dread Templar is a fast-paced retro FPS that combines 90s classic shooter elements with modern skill-based FPS controls. You are a Dread Templar who entered Hell seeking revenge. But in order to get it, you have to fight your way through the dark realm!",
			effectiveDate: "2021-09-28T17:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/dc8e75b2b1494fc59d69456cdd426c65/dread-templar-offer-logo-st39k.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/dc8e75b2b1494fc59d69456cdd426c65/download-dread-templar-offer-xdoe1.jpg",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/dc8e75b2b1494fc59d69456cdd426c65/dread-templar-offer-6ncpz.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/dc8e75b2b1494fc59d69456cdd426c65/download-dread-templar-offer-1nphi.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/dc8e75b2b1494fc59d69456cdd426c65/dread-templar-offer-w6vla.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/dc8e75b2b1494fc59d69456cdd426c65/download-dread-templar-offer-xdoe1.jpg",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-n4d8bf5e8fnr4kujuut9j6v4d29muc",
				name: "1C Online Games Ltd",
			},
			productSlug: null,
			urlSlug: "a5ab6e5089a947f58b40866feb7dd5f7",
			url: null,
			tags: [
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1294",
				},
				{
					id: "1310",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "1845ec9c76d5489da74668d9fd55fa59",
					namespace: "195d0bec22bf4b63aab10e4b40f5bf2e",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "dread-templar-d8e8fa",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "dread-templar-d8e8fa",
					pageType: "productHome",
				},
			],
			developerDisplayName: "T19 Games",
			publisherDisplayName: "1C Entertainment",
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-28T17:00:00.000Z",
		},
		{
			title: "Planescape: Torment: Enhanced Edition",
			id: "3e6c501452ff415da6060e52a78fa918",
			namespace: "c2c90c5ed3fb4c3280a337f31f79f498",
			description:
				"Planescape: Torment: Enhanced Edition brings the strange and thrilling classic back to life! Uncover secrets of past lives in this story-rich, tactical RPG set in a dark fantasy world at the heart of the Dungeons & Dragons multiverse.",
			effectiveDate: "2021-09-28T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PlanescapeTormentEnhancedEdition_Beamdog_S2_1200x1600-bb2810442cc6a32edfa250e18818ed3a",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PlanescapeTormentEnhancedEdition_Beamdog_S2_1200x1600-bb2810442cc6a32edfa250e18818ed3a",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PlanescapeTormentEnhancedEdition_Beamdog_S1_2560x1440-959452ae23d81f1469a9c4125d626efc",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PlanescapeTormentEnhancedEdition_Beamdog_S2_1200x1600-bb2810442cc6a32edfa250e18818ed3a",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PlanescapeTormentEnhancedEdition_Beamdog_S1_2560x1440-959452ae23d81f1469a9c4125d626efc",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PlanescapeTormentEnhancedEdition_Beamdog_S2_1200x1600-bb2810442cc6a32edfa250e18818ed3a",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-wc3gy6s683brl6424p7kqlrldhy7vd",
				name: "Beamdog",
			},
			productSlug: "planescape-torment-enhanced-edition",
			urlSlug: "planescape-torment-enhanced-edition",
			url: null,
			tags: [
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "111892fd1a3b4a2db7f27cc73c362a11",
					namespace: "c2c90c5ed3fb4c3280a337f31f79f498",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "",
				},
				{
					key: "publisherName",
					value: "Beamdog",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "planescape-torment-enhanced-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "planescape-torment-enhanced-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 639,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 960,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€6.39",
						intermediatePrice: "€6.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "85f880ddda704fa59daffa3e0c54cbe7",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-28T15:00:00.000Z",
		},
		{
			title: "Icewind Dale: Enhanced Edition",
			id: "e0a2897d8e894a29b4d55eb929598c11",
			namespace: "c22a84689e1a4ad083b2b4ba0ee396f4",
			description:
				"Icewind Dale: Enhanced Edition revives the classic RPG with fresh updates for modern players. Build a party of Dungeons & Dragons heroes and explore the frozen tundra in this retro fantasy adventure.",
			effectiveDate: "2021-09-28T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IcewindDaleEnhancedEdition_Beamdog_S2_1200x1600-9924faab7908648eb98af91e5a8aed5d",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IcewindDaleEnhancedEdition_Beamdog_S2_1200x1600-9924faab7908648eb98af91e5a8aed5d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IcewindDaleEnhancedEdition_Beamdog_S1_2560x1440-134da1b2bef2f445b818b2158011bac3",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IcewindDaleEnhancedEdition_Beamdog_S2_1200x1600-9924faab7908648eb98af91e5a8aed5d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IcewindDaleEnhancedEdition_Beamdog_S1_2560x1440-134da1b2bef2f445b818b2158011bac3",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IcewindDaleEnhancedEdition_Beamdog_S2_1200x1600-9924faab7908648eb98af91e5a8aed5d",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-wc3gy6s683brl6424p7kqlrldhy7vd",
				name: "Beamdog",
			},
			productSlug: "icewind-dale-enhanced-edition",
			urlSlug: "icewind-dale-enhanced-edition",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "74edd0442a8c4e1aa9ea298bdad3481f",
					namespace: "c22a84689e1a4ad083b2b4ba0ee396f4",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "",
				},
				{
					key: "publisherName",
					value: "Beamdog",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "icewind-dale-enhanced-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "icewind-dale-enhanced-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 639,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 960,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€6.39",
						intermediatePrice: "€6.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "cb14c1b45f6c4897b8de4cdfe2764689",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-28T15:00:00.000Z",
		},
		{
			title: "Baldur's Gate: Enhanced Edition",
			id: "814a35580af6495a94eca5f0304b044d",
			namespace: "ab2f9078bcb04065a5c6c2fede9cb3b0",
			description:
				"Baldur’s Gate: Enhanced Edition is the classic 90s RPG— enhanced for modern adventurers. Customize your hero, gather your party, and venture forth in this open-world epic where every choice matters.",
			effectiveDate: "2021-09-28T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateEnhancedEdition_Beamdog_S2_1200x1600-2fa94fa8014289e64b34d4d080599d92",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateEnhancedEdition_Beamdog_S2_1200x1600-2fa94fa8014289e64b34d4d080599d92",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateEnhancedEdition_Beamdog_S1_2560x1440-20831a6a763fc2056d3f9ac33f9a341e",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateEnhancedEdition_Beamdog_S2_1200x1600-2fa94fa8014289e64b34d4d080599d92",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateEnhancedEdition_Beamdog_S1_2560x1440-20831a6a763fc2056d3f9ac33f9a341e",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateEnhancedEdition_Beamdog_S2_1200x1600-2fa94fa8014289e64b34d4d080599d92",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-wc3gy6s683brl6424p7kqlrldhy7vd",
				name: "Beamdog",
			},
			productSlug: "baldurs-gate-enhanced-edition",
			urlSlug: "baldurs-gate-enhanced-edition",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "12bfc258dc1743cc9f19164266f5a3ae",
					namespace: "ab2f9078bcb04065a5c6c2fede9cb3b0",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "",
				},
				{
					key: "publisherName",
					value: "Beamdog",
				},
				{
					key: "developerName",
					value: "Beamdog",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "baldurs-gate-enhanced-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "baldurs-gate-enhanced-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 639,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 960,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€6.39",
						intermediatePrice: "€6.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "10864e5348154d258145ab455c228a62",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-28T15:00:00.000Z",
		},
		{
			title: "Baldur's Gate II: Enhanced Edition",
			id: "0b361b745f9c4a26b40e483b4a83b53f",
			namespace: "9fce8233852f4940acde233a87bb41ce",
			description:
				"Rediscover the beloved RPG classic— now enhanced for modern adventurers! Gather your party of heroes and continue the legendary adventure in this story-rich fantasy epic where every choice matters.",
			effectiveDate: "2021-09-28T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateIIEnhancedEdition_Beamdog_S2_1200x1600-58e707a92074345a5c1ae8ad9aabdec1",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateIIEnhancedEdition_Beamdog_S2_1200x1600-58e707a92074345a5c1ae8ad9aabdec1",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateIIEnhancedEdition_Beamdog_S1_2560x1440-bf32912d77d4fb115e158eebe3fa0b81",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateIIEnhancedEdition_Beamdog_S2_1200x1600-58e707a92074345a5c1ae8ad9aabdec1",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateIIEnhancedEdition_Beamdog_S1_2560x1440-bf32912d77d4fb115e158eebe3fa0b81",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BaldursGateIIEnhancedEdition_Beamdog_S2_1200x1600-58e707a92074345a5c1ae8ad9aabdec1",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-wc3gy6s683brl6424p7kqlrldhy7vd",
				name: "Beamdog",
			},
			productSlug: "baldurs-gate-2-enhanced-edition",
			urlSlug: "baldurs-gate-2-enhanced-edition",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "648631acb38f4d12bd9bbbaedf11267b",
					namespace: "9fce8233852f4940acde233a87bb41ce",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "",
				},
				{
					key: "publisherName",
					value: "Beamdog",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "baldurs-gate-2-enhanced-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "baldurs-gate-2-enhanced-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 479,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 1120,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€4.79",
						intermediatePrice: "€4.79",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "5ae6f54787934c74997205459dbf1067",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-28T15:00:00.000Z",
		},
		{
			title: "NEO: The World Ends with You",
			id: "e80dfd8e2cb64960991d0849f9a836e0",
			namespace: "9c8ca95368b84b6fb5f2192e7f7484a3",
			description:
				'"Only the possibility of you can change our fate" A long-awaited new story in The World Ends with You series has finally arrived! Rindo\'s life is on the line as he is forced to play the "Reapers\' Game."',
			effectiveDate: "2021-09-28T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S2_1200x1600-bd41753975486e08ca8f0518d893280f",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S2_1200x1600-bd41753975486e08ca8f0518d893280f",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S3_2560x1440-3aec7fbcb3f23acf006247b82a586e50",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S2_1200x1600-bd41753975486e08ca8f0518d893280f",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S3_2560x1440-3aec7fbcb3f23acf006247b82a586e50",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S2_1200x1600-bd41753975486e08ca8f0518d893280f",
				},
			],
			currentPrice: 5999,
			seller: {
				id: "o-xbmhhs32ajtuszar863dprgnwtvedk",
				name: "Square Enix (Japan)",
			},
			productSlug: "neo-the-world-ends-with-you",
			urlSlug: "neo-the-world-ends-with-you",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1333",
				},
				{
					id: "1367",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "6498f696571840a2960f2273b123eafb",
					namespace: "9c8ca95368b84b6fb5f2192e7f7484a3",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Square Enix",
				},
				{
					key: "developerName",
					value: "h.a.n.d., Inc.",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "neo-the-world-ends-with-you",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "neo-the-world-ends-with-you",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "h.a.n.d., Inc.",
			publisherDisplayName: "Square Enix",
			price: {
				totalPrice: {
					discountPrice: 5999,
					originalPrice: 5999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€59.99",
						discountPrice: "€59.99",
						intermediatePrice: "€59.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-28T15:00:00.000Z",
		},
		{
			title: "In Sound Mind",
			id: "9bbfe5536ecc4a1190e07cb4cbeb7ddb",
			namespace: "fa9812acd30f46f8a69a75bf27addb5c",
			description:
				"In Sound Mind is an imaginative first-person psychological horror with frenetic puzzles, unique boss fights, and original music by The Living Tombstone. Explore and fight through a series of unsettling memories as you journey within the inner workings of the one place you can’t seem to escape—your own mind.",
			effectiveDate: "2021-09-28T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S2_1200x1600-0f24e46356fc61bda653468a6afd6d49",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S2_1200x1600-0f24e46356fc61bda653468a6afd6d49",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S2_1200x1600-0f24e46356fc61bda653468a6afd6d49",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S2_1200x1600-0f24e46356fc61bda653468a6afd6d49",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S3_2560x1440-78d2b96f4772d724e6f003a1e88f4844",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InSoundMind_WeCreateStuff_S3_2560x1440-78d2b96f4772d724e6f003a1e88f4844",
				},
			],
			currentPrice: 3499,
			seller: {
				id: "o-a6k23slslegbhbwtel4qx423kuzc3y",
				name: "Maximum Games",
			},
			productSlug: "in-sound-mind",
			urlSlug: "fregulageneralaudience",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "7c1a3915ac2d4a13a2736d661093dd5b",
					namespace: "fa9812acd30f46f8a69a75bf27addb5c",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "[]",
				},
				{
					key: "developerName",
					value: "[]",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "in-sound-mind",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "in-sound-mind",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "We Create Stuff",
			publisherDisplayName: "Modus Games",
			price: {
				totalPrice: {
					discountPrice: 2799,
					originalPrice: 3499,
					voucherDiscount: 0,
					discount: 700,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€34.99",
						discountPrice: "€27.99",
						intermediatePrice: "€27.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "b4c17d633fa542e69eec761592a66a7d",
								endDate: "2021-11-03T17:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-28T13:00:00.000Z",
		},
		{
			title: "2064: Read Only Memories",
			id: "92e998e921ad4979883c19f65de8b456",
			namespace: "5b08e4db33c54e518c2a1360cc2c7f18",
			description:
				"Dive into a cyberpunk thriller and explore the social challenges of tomorrow through classic adventure gaming. Team up with Turing, the world’s first sapient machine, to unmask a conspiracy that will shake the foundations of Neo-San Francisco. ",
			effectiveDate: "2021-09-28T04:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_2064ReadOnlyMemories_MidBossLLC_S2_1200x1600-5c445844937c1dddee737615d72b3de1",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_2064ReadOnlyMemories_MidBossLLC_S2_1200x1600-5c445844937c1dddee737615d72b3de1",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_2064ReadOnlyMemories_MidBossLLC_S1_2560x1440-a8a1b19176ad977989801a9dd4d9a782",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_2064ReadOnlyMemories_MidBossLLC_S2_1200x1600-5c445844937c1dddee737615d72b3de1",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_2064ReadOnlyMemories_MidBossLLC_S1_2560x1440-a8a1b19176ad977989801a9dd4d9a782",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_2064ReadOnlyMemories_MidBossLLC_S2_1200x1600-5c445844937c1dddee737615d72b3de1",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-uk5s5frpth22ldn5cqr5z3vmf9g52r",
				name: "MidBoss, LLC",
			},
			productSlug: "2064-read-only-memories",
			urlSlug: "sousageneralaudience",
			url: null,
			tags: [
				{
					id: "1127",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "25ea747abe274f8fa689ecdbedb23229",
					namespace: "5b08e4db33c54e518c2a1360cc2c7f18",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "",
				},
				{
					key: "publisherName",
					value: "MidBoss, LLC",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "2064-read-only-memories",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "2064-read-only-memories",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-28T04:00:00.000Z",
		},
		{
			title: "Air Missions: HIND",
			id: "79dbea54c1374a6ca2b2ee546e2c34be",
			namespace: "05cd7449db434e1088b1c72b74849da7",
			description:
				"Part simulator and part arcade-style action game, Air Missions: HIND brings authentic real-life military helicopters into fictitious conflicts where fun is the only consequence. Climb into the legendary Mi-24 HIND, a 10-ton armored gunship, and rule the skies!",
			effectiveDate: "2021-09-27T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AirMissionsHIND_3DIVISIONGamesFarmsro_S2_1200x1600-050f7565caaddf015599a27b2beb6ac9",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AirMissionsHIND_3DIVISIONGamesFarmsro_S2_1200x1600-050f7565caaddf015599a27b2beb6ac9",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AirMissionsHIND_3DIVISIONGamesFarmsro_S2_1200x1600-050f7565caaddf015599a27b2beb6ac9",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AirMissionsHIND_3DIVISIONGamesFarmsro_S1_2560x1440-57a987e31782e78d6e8e12f6fd656361",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AirMissionsHIND_3DIVISIONGamesFarmsro_S2_1200x1600-050f7565caaddf015599a27b2beb6ac9",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_AirMissionsHIND_3DIVISIONGamesFarmsro_S1_2560x1440-57a987e31782e78d6e8e12f6fd656361",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-ybzxtem8hqs87ahht3w4vtf6eqd2zh",
				name: "Nicalis",
			},
			productSlug: "air-missions-hind",
			urlSlug: "geitost-general-audience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1296",
				},
				{
					id: "1393",
				},
				{
					id: "1203",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "65ae67f6082a4b9191c837aecde7cf38",
					namespace: "05cd7449db434e1088b1c72b74849da7",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "air-missions-hind",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "air-missions-hind",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "3DIVISION, Games Farm s.r.o.",
			publisherDisplayName: "Nicalis, Inc.",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-27T17:00:00.000Z",
		},
		{
			title: "Universe Sandbox",
			id: "3a57507ba354416386be27bbaba783d7",
			namespace: "b42434df8847448c93022ce9c46feec1",
			description:
				"Create and destroy on an unimaginable scale... with a space simulator that merges real-time gravity, climate, collision, and material interactions to reveal the beauty of our universe and the fragility of our planet.",
			effectiveDate: "2021-09-23T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UniverseSandbox_GiantArmy_S2_1200x1600-3b7d3597ac313b2d604880aafaa0df0a",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UniverseSandbox_GiantArmy_S2_1200x1600-3b7d3597ac313b2d604880aafaa0df0a",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UniverseSandbox_GiantArmy_S1_2560x1440-406222a3f38e6af5fe03595da9776092",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UniverseSandbox_GiantArmy_S2_1200x1600-3b7d3597ac313b2d604880aafaa0df0a",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UniverseSandbox_GiantArmy_S1_2560x1440-406222a3f38e6af5fe03595da9776092",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UniverseSandbox_GiantArmy_S2_1200x1600-3b7d3597ac313b2d604880aafaa0df0a",
				},
			],
			currentPrice: 2399,
			seller: {
				id: "o-ct3z7sxsr5tkug22qvphgz2ltq3mhb",
				name: "Giant Army",
			},
			productSlug: "universe-sandbox",
			urlSlug: "universe-sandbox",
			url: null,
			tags: [
				{
					id: "1281",
				},
				{
					id: "1393",
				},
				{
					id: "1400",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1310",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "1ad36b05ae6d4b3f82b1092e30c97344",
					namespace: "b42434df8847448c93022ce9c46feec1",
				},
			],
			customAttributes: [
				{
					key: "publisherName",
					value: "Giant Army",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "universe-sandbox",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "universe-sandbox",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2399,
					originalPrice: 2399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€23.99",
						discountPrice: "€23.99",
						intermediatePrice: "€23.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T17:00:00.000Z",
		},
		{
			title: "Buddy Simulator 1984",
			id: "6014c97743ec47d68a989336f26bb2c8",
			namespace: "a74a1b531da34122be033a3d0c3e7e4b",
			description:
				"Buddy Simulator 1984 simulates the experience of hanging out with a best buddy! Your buddy learns from you, constantly adapting to your interests and personality. But most importantly, your buddy can play games with you!",
			effectiveDate: "2021-09-23T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BuddySimulator1984_NotaSailorStudios_S2_1200x1600-c755ec32033a88de049b349a518341b2",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BuddySimulator1984_NotaSailorStudios_S2_1200x1600-c755ec32033a88de049b349a518341b2",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BuddySimulator1984_NotaSailorStudios_S1_2560x1440-a1d9f714e919328c87756187c25ca3c0",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BuddySimulator1984_NotaSailorStudios_S2_1200x1600-c755ec32033a88de049b349a518341b2",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BuddySimulator1984_NotaSailorStudios_S1_2560x1440-a1d9f714e919328c87756187c25ca3c0",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BuddySimulator1984_NotaSailorStudios_S2_1200x1600-c755ec32033a88de049b349a518341b2",
				},
			],
			currentPrice: 799,
			seller: {
				id: "o-ry8zjh5lsalw645kmxxndp9upprh7w",
				name: "Not a Sailor Studios",
			},
			productSlug: "buddy-simulator-1984",
			urlSlug: "buddy-simulator-1984",
			url: null,
			tags: [
				{
					id: "1218",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "b772c1f5781d43eab328c04155ccbbac",
					namespace: "a74a1b531da34122be033a3d0c3e7e4b",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Not a Sailor Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "buddy-simulator-1984",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "buddy-simulator-1984",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 799,
					originalPrice: 799,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€7.99",
						discountPrice: "€7.99",
						intermediatePrice: "€7.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T16:00:00.000Z",
		},
		{
			title: "Teacup",
			id: "8b587712c0bb4b02856253eb065c95e4",
			namespace: "820e78ed3f3b4e19a715a25181a0cdd8",
			description:
				"Teacup is a short and wholesome narrative adventure game with a focus on exploration and non-linear progression. Help a small and shy frog on her journey to find the ingredients she needs for her tea party!",
			effectiveDate: "2021-09-23T16:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Teacup_SmartoClub_S1_2560x1440-edf89256e29e37622b61e59fe4483de4",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Teacup_SmartoClub_S2_1200x1600-8db32dc2d5affdc8ccf473672b4b5985",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Teacup_SmartoClub_S1_2560x1440-edf89256e29e37622b61e59fe4483de4",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Teacup_SmartoClub_S2_1200x1600-8db32dc2d5affdc8ccf473672b4b5985",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Teacup_SmartoClub_S2_1200x1600-8db32dc2d5affdc8ccf473672b4b5985",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Teacup_SmartoClub_S2_1200x1600-8db32dc2d5affdc8ccf473672b4b5985",
				},
			],
			currentPrice: 799,
			seller: {
				id: "o-v7c8xq9bmhtqhakulz7lrptnz8b628",
				name: "White Thorn Digital",
			},
			productSlug: "teacup",
			urlSlug: "teacup",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "bae72ba8029141ddbe9b8369604d3019",
					namespace: "820e78ed3f3b4e19a715a25181a0cdd8",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "White Thorn Digital",
				},
				{
					key: "developerName",
					value: "Smarto Club",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "teacup",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "teacup",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 799,
					originalPrice: 799,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€7.99",
						discountPrice: "€7.99",
						intermediatePrice: "€7.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T16:00:00.000Z",
		},
		{
			title: "Out of the Park Baseball 22",
			id: "391397c9dc2b498bb432056cab806d70",
			namespace: "49c5a3d5dcac460697d234ed2bf63dc5",
			description:
				"Out of the Park Baseball 22 is the result of over two decades of dedication to building the best strategic sports game in the world. Licensed by MLB, MLBPA, and KBO, Out of the Park Baseball 22 is a baseball fan’s dream come true!",
			effectiveDate: "2021-09-23T16:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OutoftheParkBaseball22_OutoftheParkDevelopments_S2_1200x1600-1cbc46fba5e48ac6c30ababbd0e4c0aa",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OutoftheParkBaseball22_OutoftheParkDevelopments_S2_1200x1600-1cbc46fba5e48ac6c30ababbd0e4c0aa",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OutoftheParkBaseball22_OutoftheParkDevelopments_S1_2560x1440-a6c7aa105305cc2c927bfda4346f8d4b",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OutoftheParkBaseball22_OutoftheParkDevelopments_S2_1200x1600-1cbc46fba5e48ac6c30ababbd0e4c0aa",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OutoftheParkBaseball22_OutoftheParkDevelopments_S1_2560x1440-a6c7aa105305cc2c927bfda4346f8d4b",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OutoftheParkBaseball22_OutoftheParkDevelopments_S2_1200x1600-1cbc46fba5e48ac6c30ababbd0e4c0aa",
				},
			],
			currentPrice: 3999,
			seller: {
				id: "o-6ceuqnyky6u5g4v5q2c8kw4z99dpmm",
				name: "Out of  the Park Developments",
			},
			productSlug: "out-of-the-park-baseball-22",
			urlSlug: "outoftheparkbaseball22-general-audience",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "1203",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "5b1c8249607d4ab8b6842dd429cd1d22",
					namespace: "49c5a3d5dcac460697d234ed2bf63dc5",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Out of  the Park Developments",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "out-of-the-park-baseball-22",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "out-of-the-park-baseball-22",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 3999,
					originalPrice: 3999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€39.99",
						discountPrice: "€39.99",
						intermediatePrice: "€39.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T16:00:00.000Z",
		},
		{
			title: "Nioh 2 – The Complete Edition",
			id: "7393461c905f40048305f333bd9fa9f4",
			namespace: "6acf92329bc449068201ee9a3f399a13",
			description:
				"Battle hordes of yokai in this masocore Action RPG. Create your protagonist and embark on an adventure across Japan. Utilize the new Yokai Shift ability to defeat even ferocious yokai and be prepared to brave through Dark Realms created by your enemies.",
			effectiveDate: "2021-09-23T14:56:17.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-3af607bc038a6726c3a14dbc376ad85f",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-3af607bc038a6726c3a14dbc376ad85f",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S1_2560x1440-75a01e633df3a100d3981b1beedeaf6a",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-3af607bc038a6726c3a14dbc376ad85f",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S1_2560x1440-75a01e633df3a100d3981b1beedeaf6a",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-3af607bc038a6726c3a14dbc376ad85f",
				},
			],
			currentPrice: 5999,
			seller: {
				id: "o-rgggesxx3asqs8jp24x29zl24c789w",
				name: "Koei Tecmo",
			},
			productSlug: "nioh-2-the-complete-edition",
			urlSlug: "nioh-2-the-complete-edition",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1203",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "32993022a6cf4637b64f045043f76dd2",
					namespace: "6acf92329bc449068201ee9a3f399a13",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "KOEI TECMO GAMES CO., LTD.",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "nioh-2-the-complete-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "nioh-2-the-complete-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 5999,
					originalPrice: 5999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€59.99",
						discountPrice: "€59.99",
						intermediatePrice: "€59.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T14:56:18.000Z",
		},
		{
			title: "Warhammer Age of Sigmar: Storm Ground",
			id: "7bc73240d0ae4e899efe24b15fdef302",
			namespace: "a7cada234b3840b88336f028778ff162",
			description: "Warhammer Age of Sigmar: Storm Ground",
			effectiveDate: "2021-09-23T14:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarhammerAgeofSigmarStormGround_GasketGames_S6_1200x1600-bb073af753eaa65182a95501e36be822",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarhammerAgeofSigmarStormGround_GasketGames_S6_1200x1600-bb073af753eaa65182a95501e36be822",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarhammerAgeofSigmarStormGround_GasketGames_S6_1200x1600-bb073af753eaa65182a95501e36be822",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarhammerAgeofSigmarStormGround_GasketGames_S6_1200x1600-bb073af753eaa65182a95501e36be822",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarhammerAgeofSigmarStormGround_GasketGames_G1A_03_1920x1080-54bb9c7174c62e2d517aa18ed4147452",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarhammerAgeofSigmarStormGround_GasketGames_S5_1920x1080-54bb9c7174c62e2d517aa18ed4147452",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-wt4zxeetmq6jem7qp4pkssr46aenj5",
				name: "Focus Home",
			},
			productSlug: "warhammer-age-of-sigmar-storm-ground",
			urlSlug: "maizegeneralaudience",
			url: null,
			tags: [
				{
					id: "1203",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "ea371887f12a4f178208fbfed11e2620",
					namespace: "a7cada234b3840b88336f028778ff162",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Focus Home Interactive",
				},
				{
					key: "developerName",
					value: "Gasket Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "warhammer-age-of-sigmar-storm-ground",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "warhammer-age-of-sigmar-storm-ground",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Gasket Games  ",
			publisherDisplayName: "Focus Home Interactive  ",
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T14:00:00.000Z",
		},
		{
			title: "The Surge",
			id: "7dcc32dd965d4a07b470cd45fc7000ea",
			namespace: "08f38e25e11f4c1e977cb75aae5e4535",
			description:
				"Welcome to CREO, the megacorporation saving our world! A catastrophic event has knocked you out during the first day on the job… you wake up equipped with a heavy-grade exoskeleton, in a destroyed section of the complex.",
			effectiveDate: "2021-09-23T14:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheSurge_Deck13Interactive_S2_1200x1600-b22a834abc51fb8c9f874b725ad50591",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheSurge_Deck13Interactive_S2_1200x1600-b22a834abc51fb8c9f874b725ad50591",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheSurge_Deck13Interactive_S2_1200x1600-b22a834abc51fb8c9f874b725ad50591",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheSurge_Deck13Interactive_S1_2560x1440-fd715f8e70731d868bbc183ba2b48d1e",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheSurge_Deck13Interactive_S2_1200x1600-b22a834abc51fb8c9f874b725ad50591",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheSurge_Deck13Interactive_S1_2560x1440-fd715f8e70731d868bbc183ba2b48d1e",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-wt4zxeetmq6jem7qp4pkssr46aenj5",
				name: "Focus Home",
			},
			productSlug: "the-surge",
			urlSlug: "nevadageneralaudience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "18046",
				},
			],
			items: [
				{
					id: "17e89a053c2d47078f22efde9b74f75c",
					namespace: "08f38e25e11f4c1e977cb75aae5e4535",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "the-surge",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "the-surge",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Deck13 Interactive",
			publisherDisplayName: "Focus Home Interactive",
			price: {
				totalPrice: {
					discountPrice: 494,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 1005,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€4.94",
						intermediatePrice: "€4.94",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "1a90e2bfd4594127a5b238b80ce97b4c",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-23T14:00:00.000Z",
		},
		{
			title: "EVE Online",
			id: "7750e99446764c6294335df4685ddf87",
			namespace: "de554cff12704db4a900032bbd194d7e",
			description:
				"EVE Online is a free-to-play community driven space MMO where players can choose their own path from countless options. Experience space exploration, immense PvP and PvE battles, mining, industry and a thriving player economy in an ever-expanding sandbox!",
			effectiveDate: "2021-09-23T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EVEOnline_CCPGames_S2_1200x1600-3748532377ff590abf60006b0a954418",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EVEOnline_CCPGames_S2_1200x1600-3748532377ff590abf60006b0a954418",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EVEOnline_CCPGames_S1_2560x1440-134a4d9f2d1fcd66e91e862a89068e80",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EVEOnline_CCPGames_S2_1200x1600-3748532377ff590abf60006b0a954418",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EVEOnline_CCPGames_S1_2560x1440-134a4d9f2d1fcd66e91e862a89068e80",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EVEOnline_CCPGames_S2_1200x1600-3748532377ff590abf60006b0a954418",
				},
			],
			currentPrice: 0,
			seller: {
				id: "o-npeclqytgz4z8zr328rr42cntnwqx9",
				name: "CCP ehf",
			},
			productSlug: "eve-online",
			urlSlug: "eveonline-general-audience",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1203",
				},
				{
					id: "1367",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "5139de04416a47099d451656118c3298",
					namespace: "de554cff12704db4a900032bbd194d7e",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "CCP Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "eve-online",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "eve-online",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 0,
					originalPrice: 0,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "0",
						discountPrice: "0",
						intermediatePrice: "0",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T13:00:00.000Z",
		},
		{
			title: "The Plane Effect",
			id: "698621c67bed446aa645c36eb7bbbaf5",
			namespace: "933b9e4b242147f5ab3048f031ea68c0",
			description:
				"A dystopian isometric adventure, following a lonely office worker as he attempts to return home in the face of impossible odds. Experience a remarkable journey expertly brought to life with gorgeous visuals, crafted and tailored by VFX experts.",
			effectiveDate: "2021-09-23T13:00:00.000Z",
			keyImages: [
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ThePlaneEffect_InnovinaStudioKiku_S1_2560x1440-4db7abbabada3f973829dbf56dda5a6f",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ThePlaneEffect_InnovinaStudioKiku_S2_1200x1600-f7924628240e3b9656eb77cffedb0bbb",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ThePlaneEffect_InnovinaStudioKiku_S1_2560x1440-4db7abbabada3f973829dbf56dda5a6f",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ThePlaneEffect_InnovinaStudioKiku_S2_1200x1600-f7924628240e3b9656eb77cffedb0bbb",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ThePlaneEffect_InnovinaStudioKiku_S2_1200x1600-f7924628240e3b9656eb77cffedb0bbb",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ThePlaneEffect_InnovinaStudioKiku_S2_1200x1600-f7924628240e3b9656eb77cffedb0bbb",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-9l5q72cwxf99kwzprbq6f558383l2l",
				name: "PQube LTD",
			},
			productSlug: "the-plane-effect",
			urlSlug: "the-plane-effect",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "a13d6b0c8e28442e973fc037ea5733f7",
					namespace: "933b9e4b242147f5ab3048f031ea68c0",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "PQube Limited",
				},
				{
					key: "developerName",
					value: "Innovina/StudioKiku",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "the-plane-effect",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "the-plane-effect",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1499,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€14.99",
						intermediatePrice: "€14.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T13:00:00.000Z",
		},
		{
			title: "Sable",
			id: "d19627e74ac445bcbcfc8157a35d6f80",
			namespace: "66a0893b7b9a42a695f0a387d64dfcc6",
			description:
				"Embark on a unique and unforgettable journey and guide Sable through her Gliding; a rite of passage that will take her across vast deserts and mesmerizing landscapes, capped by the remains of spaceships and ancient wonders.",
			effectiveDate: "2021-09-23T13:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sable_Shedworks_S1_2560x1440-64ec090eed8335263a9083de0eb7f5cf",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sable_Shedworks_S2_1200x1600-8c822a6ef6f9cb4f07651ea61f291391",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sable_Shedworks_S4_1200x1600-8c822a6ef6f9cb4f07651ea61f291391",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sable_Shedworks_S2_1200x1600-8c822a6ef6f9cb4f07651ea61f291391",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sable_Shedworks_S1_2560x1440-64ec090eed8335263a9083de0eb7f5cf",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sable_Shedworks_S2_1200x1600-8c822a6ef6f9cb4f07651ea61f291391",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-fay4ghw9hhamujs53rfhy83ffexb7k",
				name: "Raw Fury",
			},
			productSlug: "sable",
			urlSlug: "sable",
			url: null,
			tags: [
				{
					id: "1370",
				},
				{
					id: "1307",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "5623f6cc511545bc98bca0201a1b847c",
					namespace: "66a0893b7b9a42a695f0a387d64dfcc6",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Raw Fury",
				},
				{
					key: "developerName",
					value: "Shedworks",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "sable",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "sable",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T13:00:00.000Z",
		},
		{
			title: "Mind Scanners",
			id: "ca196887d2f04bf29fc34899252a5151",
			namespace: "3a66d4c637c4469b80092d2f1fa1f26a",
			description:
				"Mind Scanners is a retro-futuristic psychiatry simulation in which you diagnose the citizens of a dystopian metropolis. Locate a host of other-worldly characters and use arcade-style treatment devices to help them. ",
			effectiveDate: "2021-09-23T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S2_1200x1600-5e01b50f89bfb5323ab42a2bdc6c1ba9",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S2_1200x1600-5e01b50f89bfb5323ab42a2bdc6c1ba9",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S1_2560x1440-535bb5013481a6f03ed9a0ca7072a32f",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S2_1200x1600-5e01b50f89bfb5323ab42a2bdc6c1ba9",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S1_2560x1440-535bb5013481a6f03ed9a0ca7072a32f",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S2_1200x1600-5e01b50f89bfb5323ab42a2bdc6c1ba9",
				},
			],
			currentPrice: 1399,
			seller: {
				id: "o-brp4g6xuckexrbbmgllk7ywvlrvanm",
				name: "Brave At Night",
			},
			productSlug: "mind-scanners",
			urlSlug: "mind-scanners",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "1395",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "48d35c95e8ba426bb1264f746a669e41",
					namespace: "3a66d4c637c4469b80092d2f1fa1f26a",
				},
			],
			customAttributes: [
				{
					key: "publisherName",
					value: "Brave At Night",
				},
				{
					key: "developerName",
					value: "The Outer Zone",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "mind-scanners",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "mind-scanners",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1399,
					originalPrice: 1399,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€13.99",
						discountPrice: "€13.99",
						intermediatePrice: "€13.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T13:00:00.000Z",
		},
		{
			title: "Fisti-Fluffs",
			id: "434760a9356849be8347ecac448da87f",
			namespace: "bdaad63b5de5424bbd720d9055906ab1",
			description:
				"Fisti-Fluffs is an adorable physics-based party game where you tussle with other cats and destroy the environments in frenetic over-the-top battles.",
			effectiveDate: "2021-09-23T07:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FistiFluffs_PlayfellowStudio_S4_1200x1600-897cbe6be740921aec1f35f7c268dbcc",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FistiFluffs_PlayfellowStudio_S4_1200x1600-897cbe6be740921aec1f35f7c268dbcc",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FistiFluffs_PlayfellowStudio_S4_1200x1600-897cbe6be740921aec1f35f7c268dbcc",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FistiFluffs_PlayfellowStudio_S1_2560x1440-c5e8fd64f6a265443fe350a5da8471a7",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FistiFluffs_PlayfellowStudio_S4_1200x1600-897cbe6be740921aec1f35f7c268dbcc",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FistiFluffs_PlayfellowStudio_S1_2560x1440-c5e8fd64f6a265443fe350a5da8471a7",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-uf2lr9jar96m9qssppdgmal3j6alyq",
				name: "Rogue Games, Inc.",
			},
			productSlug: "fisti-fluffs",
			urlSlug: "nobeliumgeneralaudience",
			url: null,
			tags: [
				{
					id: "1264",
				},
				{
					id: "1296",
				},
				{
					id: "1203",
				},
				{
					id: "1110",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "be2b3d01b45d4ec5ac7896dd019ca490",
					namespace: "bdaad63b5de5424bbd720d9055906ab1",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Rogue Games, Inc.",
				},
				{
					key: "developerName",
					value: "[]",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "fisti-fluffs",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "fisti-fluffs",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Playfellow Studio",
			publisherDisplayName: "Rogue Games, Inc. ",
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T07:00:00.000Z",
		},
		{
			title: "Beast Breaker",
			id: "ed3c276dc5ee42f8978a10eb4db68e32",
			namespace: "6ae065d071d74979ad62236b71dc11c7",
			description:
				"Beast Breaker is a new turn-based action adventure from the creator of Threes. You play as a tiny warrior named Skipper, tasked with defending innocents from giant mosaic Beasts that threaten to destroy everything.",
			effectiveDate: "2021-09-23T04:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BeastBreaker_VodeoGames_S2_1200x1600-8065704f6f04f6e086da0010f7a8186f",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BeastBreaker_VodeoGames_S2_1200x1600-8065704f6f04f6e086da0010f7a8186f",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BeastBreaker_VodeoGames_S1_2560x1440-8e1515f1d4cdc77b9f7adc8b90323ced",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BeastBreaker_VodeoGames_S2_1200x1600-8065704f6f04f6e086da0010f7a8186f",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BeastBreaker_VodeoGames_S1_2560x1440-8e1515f1d4cdc77b9f7adc8b90323ced",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_BeastBreaker_VodeoGames_S2_1200x1600-8065704f6f04f6e086da0010f7a8186f",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-pae4gppnw39cqfe9mc5xrehtwjbv3s",
				name: "Vodeo Games",
			},
			productSlug: "beast-breaker",
			urlSlug: "beast-breaker",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "e8ca4c696f994e2e8aad05b0c2f256c8",
					namespace: "6ae065d071d74979ad62236b71dc11c7",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Vodeo Games",
				},
				{
					key: "developerName",
					value: "Vodeo Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "beast-breaker",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "beast-breaker",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-23T04:00:00.000Z",
		},
		{
			title: "Jaws of Extinction",
			id: "0a687e1cf9c44f2dab63efb4afc4b140",
			namespace: "4814675fe9024f74a23a7395adc49789",
			description:
				"The island of Eden-Nadir, has fallen to a vicious mind consuming fungal parasite. Fight through the ashes of humanity to track down the truth behind the infection as one of four playable survivors before the outbreak spreads throughout the world.",
			effectiveDate: "2021-09-22T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/offer/4814675fe9024f74a23a7395adc49789/EGS_JawsOfExtinction_KYECreations_S2_1200x1600-76bd2b42e6900fef3e9bc967b2a3eebf",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/offer/4814675fe9024f74a23a7395adc49789/EGS_JawsOfExtinction_KYECreations_S2_1200x1600-76bd2b42e6900fef3e9bc967b2a3eebf",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/offer/4814675fe9024f74a23a7395adc49789/EGS_JawsOfExtinction_KYECreations_S1_2560x1440-b85da4f37def73591a587454ff1dca0b",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/offer/4814675fe9024f74a23a7395adc49789/EGS_JawsOfExtinction_KYECreations_S2_1200x1600-76bd2b42e6900fef3e9bc967b2a3eebf",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/offer/4814675fe9024f74a23a7395adc49789/EGS_JawsOfExtinction_KYECreations_S1_2560x1440-b85da4f37def73591a587454ff1dca0b",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/offer/4814675fe9024f74a23a7395adc49789/EGS_JawsOfExtinction_KYECreations_S2_1200x1600-76bd2b42e6900fef3e9bc967b2a3eebf",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-ly59vqwvjvdldxgg8adfcnhpkwbcta",
				name: "Forthright Entertainment, INC",
			},
			productSlug: "jaws-of-extinction",
			urlSlug: "jaws-of-extinction",
			url: null,
			tags: [
				{
					id: "1080",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1310",
				},
			],
			items: [
				{
					id: "38bb17ecabb644408cb2b165b51bce7c",
					namespace: "4814675fe9024f74a23a7395adc49789",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Forthright Entertainment, INC",
				},
				{
					key: "developerName",
					value: " KYE Creations",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "jaws-of-extinction",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "jaws-of-extinction",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1439,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 160,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€14.39",
						intermediatePrice: "€14.39",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "4e024ecf34de4cc7b3e97cfc82f23201",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-22T13:00:00.000Z",
		},
		{
			title: "Guild Of Ascension",
			id: "8240e8c79bdd4ef5b6b6e00126ba8cc6",
			namespace: "3b1220bb9cab4163a7262b342c396a19",
			description:
				"Guild of Ascension is a Tactical-Action-RPG with rogue-lite elements, mixing turn-based combat with real-time action combo system. Craft weapons, learn skills, befriend critters, encounter bizarre creatures, fight giant Bosses in your Ascension of the Tower!",
			effectiveDate: "2021-09-21T14:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GuildOfAscension_WhileOneProductions_S2_1200x1600-cf1552caa2da115c620f5081c3d12832",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GuildOfAscension_WhileOneProductions_S2_1200x1600-cf1552caa2da115c620f5081c3d12832",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GuildOfAscension_WhileOneProductions_S3_2560x1440-7e6ffbd7dad8e5766ac7a3cd0498f9a9",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GuildOfAscension_WhileOneProductions_S4_1200x1600-cf1552caa2da115c620f5081c3d12832",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GuildOfAscension_WhileOneProductions_S1_2560x1440-7e6ffbd7dad8e5766ac7a3cd0498f9a9",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GuildOfAscension_WhileOneProductions_S4_1200x1600-cf1552caa2da115c620f5081c3d12832",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-yw5ga5z854qs64ld82qey3dz2d7z32",
				name: "Plug In Digital SAS",
			},
			productSlug: "guild-of-ascension",
			urlSlug: "guild-of-ascension",
			url: null,
			tags: [
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "1083",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "5cda717e183143ca8592b488b1db0286",
					namespace: "3b1220bb9cab4163a7262b342c396a19",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "PID Games",
				},
				{
					key: "developerName",
					value: "WhileOne Productions",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "guild-of-ascension",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "guild-of-ascension",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "WhileOne Productions",
			publisherDisplayName: "PID Games",
			price: {
				totalPrice: {
					discountPrice: 1349,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 150,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€13.49",
						intermediatePrice: "€13.49",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "1d347e63ca7f442b8dfd8a6c9933f5bc",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-21T14:00:00.000Z",
		},
		{
			title: "World War Z Aftermath",
			id: "05af9ab1d2dc4b78ada8b2f09724da20",
			namespace: "wombat",
			description:
				"World War Z: Aftermath is the ultimate co-op zombie shooter and the next evolution of the original hit World War Z that has now captivated over 15 million players. Fight off hordes of ravenous zombies in intense story episodes across new zombie-ravaged locations around the world.",
			effectiveDate: "2021-09-21T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/wwzAfterTall_1200x1600-b7b0af3e21961a57059ec4a3019e57fb",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/wwzAfterTall_1200x1600-b7b0af3e21961a57059ec4a3019e57fb",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/wwzafterWide_2560x1440-6f0539ff8fab5fe355cc03514d7168c0",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/wwzAfterTall_1200x1600-b7b0af3e21961a57059ec4a3019e57fb",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/wwzafterWide_2560x1440-6f0539ff8fab5fe355cc03514d7168c0",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/wwzAfterTall_1200x1600-b7b0af3e21961a57059ec4a3019e57fb",
				},
			],
			currentPrice: 3999,
			seller: {
				id: "o-2xlz78ngz5ubvus9sff9blglee43uk",
				name: "Saber Interactive",
			},
			productSlug: "world-war-z",
			urlSlug: "world-war-z-aftermath",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1203",
				},
				{
					id: "18051",
				},
				{
					id: "1220",
				},
				{
					id: "1080",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "4446fc9443324b7f8f742fb913ad9ba3",
					namespace: "wombat",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Saber Interactive",
				},
				{
					key: "developerName",
					value: "Saber Interactive",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "world-war-z",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "world-war-z",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 3199,
					originalPrice: 3999,
					voucherDiscount: 0,
					discount: 800,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€39.99",
						discountPrice: "€31.99",
						intermediatePrice: "€31.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "04f58172c457402395ffa29333146abe",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-21T13:00:00.000Z",
		},
		{
			title: "Kena: Bridge of Spirits",
			id: "d8618f47119940fb8e5c38eb0421c752",
			namespace: "7c53d7dc86494d5abcdc974b0ef0a843",
			description:
				"A story-driven, action adventure combining exploration with fast-paced combat. As Kena, players find and grow a team of charming spirit companions called the Rot, enhancing their abilities and creating new ways to manipulate the environment.",
			effectiveDate: "2021-09-21T04:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S5-1920x1080-450356496c568d85ecc7319a202b99b7.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S6-1200x1600-e701bd947727ee14b81626c7f9757e4f.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S6-1200x1600-e701bd947727ee14b81626c7f9757e4f.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S6-1200x1600-e701bd947727ee14b81626c7f9757e4f.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S5-1920x1080-450356496c568d85ecc7319a202b99b7.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S6-1200x1600-e701bd947727ee14b81626c7f9757e4f.jpg",
				},
			],
			currentPrice: 3999,
			seller: {
				id: "o-4xa8vpghs27nav2w3z3h6z4f6f4fyd",
				name: "Ember Lab",
			},
			productSlug: "kena-bridge-of-spirits",
			urlSlug: "kena-bridge-of-spirits",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1381",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "4721a42f29a44f639f036cfcd7bb6744",
					namespace: "7c53d7dc86494d5abcdc974b0ef0a843",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Ember Lab",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "kena-bridge-of-spirits",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "kena-bridge-of-spirits",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 3999,
					originalPrice: 3999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€39.99",
						discountPrice: "€39.99",
						intermediatePrice: "€39.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-21T04:00:00.000Z",
		},
		{
			title: "Sky Racket",
			id: "4d83f5e4aa8d42bdb2bdda9081a13ef3",
			namespace: "43c0da4f8c774c23a76a213fb8dfe59b",
			description:
				"Sky Racket is a game that mixes two classic genres from the Arcade era: Shoot’em up and Brick Breakers. In a world where you are unable to attack, using your racket to strike enemy bullets back at them is your only option! Bounce bullets back at your foes and save the galaxy!",
			effectiveDate: "2021-09-21T03:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt/e6c645d4-7250-4028-bb16-d3703b3fcb55/sky-racket-offer-logo-4e039240.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt/39e680de-9f71-4475-b5dd-e25ffc8ed026/sky-racket-offer-30e7f1bd.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt/fe9a70fe-5ee2-4313-8378-f7fac6ea295a/sky-racket-offer-30e7f1bd.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt/209cb869-46b1-4cee-a906-80c2970f5e5e/download-sky-racket-offer-fa9be0e.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt/9e822827-b2db-4757-bea5-5d7c196f4ed2/download-sky-racket-offer-fa9be0e.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt/209cb869-46b1-4cee-a906-80c2970f5e5e/download-sky-racket-offer-fa9be0e.jpg",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-84xx6qzw5df9a6vbtdrw3e2stctzzu",
				name: "Double Dash Studios",
			},
			productSlug: null,
			urlSlug: "f0b545c8f22a40678aa8ffe195d8fd72",
			url: null,
			tags: [
				{
					id: "1296",
				},
				{
					id: "1264",
				},
				{
					id: "1283",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "03a6787f449e40e1a63c556081762ffd",
					namespace: "43c0da4f8c774c23a76a213fb8dfe59b",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "sky-racket-4cf23a",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "sky-racket-4cf23a",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Double Dash Studios",
			publisherDisplayName: "Double Dash Studios",
			price: {
				totalPrice: {
					discountPrice: 1199,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€11.99",
						intermediatePrice: "€11.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-21T03:00:00.000Z",
		},
		{
			title: "Severed Steel",
			id: "b26543426574454e82e07624450c9022",
			namespace: "5db7394e65044dd1bb083ee983e2b3a5",
			description:
				"A stylish single-player FPS featuring a fluid stunt system, destructible voxel environments, loads of bullet time, a unique one-armed protagonist, and a dark electronic soundtrack.",
			effectiveDate: "2021-09-17T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-1c44781ebf5203b3a4bc9dbfe270fbff",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-1c44781ebf5203b3a4bc9dbfe270fbff",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SeveredSteel_GreylockStudio_S1_2560x1440-b8450c8c60f2a7c5169461f9f083d5ea",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-1c44781ebf5203b3a4bc9dbfe270fbff",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SeveredSteel_GreylockStudio_S1_2560x1440-b8450c8c60f2a7c5169461f9f083d5ea",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-1c44781ebf5203b3a4bc9dbfe270fbff",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-w3y4zvzsv727kbguuzyz2zg46xdafs",
				name: "Digerati",
			},
			productSlug: "severed-steel",
			urlSlug: "severed-steel",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1185",
				},
				{
					id: "18051",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "baf62b7de7424d29bdc3cf8c1d3808db",
					namespace: "5db7394e65044dd1bb083ee983e2b3a5",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Digerati",
				},
				{
					key: "developerName",
					value: "Digerati",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "severed-steel",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "severed-steel",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2124,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 375,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€21.24",
						intermediatePrice: "€21.24",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "ff841e0afcdf4183a23012fdacafb9ed",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-17T17:00:00.000Z",
		},
		{
			title: "TOEM",
			id: "d4b6a615ea794a6295d34608c5426d4f",
			namespace: "0ef87626cd724281b9f8f74c83c54b93",
			description:
				"Set off on a delightful expedition and use your photographic eye to uncover the mysteries of the magical TOEM in this hand-drawn adventure game. Chat with quirky characters and solve their problems by snapping neat photos!",
			effectiveDate: "2021-09-17T13:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOEM_SomethingWeMade_S2 (1)_1200x1600-df680f435db3f53c2021e8727e312df7",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOEM_SomethingWeMade_S2 (1)_1200x1600-df680f435db3f53c2021e8727e312df7",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOEM_SomethingWeMade_S1 (1)_2560x1440-8ba2b054cf944aa40a90211650d388b7",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOEM_SomethingWeMade_S2 (1)_1200x1600-df680f435db3f53c2021e8727e312df7",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOEM_SomethingWeMade_S1 (1)_2560x1440-8ba2b054cf944aa40a90211650d388b7",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TOEM_SomethingWeMade_S2 (1)_1200x1600-df680f435db3f53c2021e8727e312df7",
				},
			],
			currentPrice: 1599,
			seller: {
				id: "o-72ykcvlbes9fxdcfyzs4f6u3q3xquc",
				name: "Something We Made",
			},
			productSlug: "toem",
			urlSlug: "toem",
			url: null,
			tags: [
				{
					id: "1298",
				},
				{
					id: "1381",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "1c87e0fd30d844ac8844526e4dcbfca1",
					namespace: "0ef87626cd724281b9f8f74c83c54b93",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Something We Made",
				},
				{
					key: "developerName",
					value: "Something We Made",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "toem",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "toem",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1599,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€15.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-17T13:00:00.000Z",
		},
		{
			title: "Everhood",
			id: "43dd86bd3b3146afadb3a5b9ba187874",
			namespace: "6babbefa10f24619ac71a995d46829bc",
			description:
				"An UNCONVENTIONAL ADVENTURE RPG that takes place in an inexpressible world filled with amusing musical battles and strange delightful encounters. To put it simply: You are in for a ride.",
			effectiveDate: "2021-09-16T18:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Everhood_ForeginGnomes_S2_1200x1600-ca925d31360e3e702f0d3e14a80e599a",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Everhood_ForeginGnomes_S2_1200x1600-ca925d31360e3e702f0d3e14a80e599a",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Everhood_ForeginGnomes_S1_2560x1440-cb55f4ecdfafb7957c88569def0c177a",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Everhood_ForeginGnomes_S2_1200x1600-ca925d31360e3e702f0d3e14a80e599a",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Everhood_ForeginGnomes_S1_2560x1440-cb55f4ecdfafb7957c88569def0c177a",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Everhood_ForeginGnomes_S2_1200x1600-ca925d31360e3e702f0d3e14a80e599a",
				},
			],
			currentPrice: 999,
			seller: {
				id: "o-exvgdyg7nc6pt9wwyxg2gbmyy78vlq",
				name: "Christian Nordgren AB",
			},
			productSlug: "everhood",
			urlSlug: "everhood",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "2fe946f7180941b489009b0dabf3dfac",
					namespace: "6babbefa10f24619ac71a995d46829bc",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Foreign Gnomes",
				},
				{
					key: "developerName",
					value: "Christian Nordgren AB",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "everhood",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "everhood",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 999,
					originalPrice: 999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€9.99",
						discountPrice: "€9.99",
						intermediatePrice: "€9.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-16T18:00:00.000Z",
		},
		{
			title: "Gamedec",
			id: "61d13d6fe0c84016a8bacd6fa14cab0e",
			namespace: "b8abdf9f9bc64ed6b4128a71fd47607f",
			description:
				"Gamedec is a single-player cyberpunk isometric RPG. You are a game detective, who solves crimes inside virtual worlds. Use your wits to gather info from your witnesses and suspects, getting to the bottom of deceptive schemes. You are the sum of your choices.",
			effectiveDate: "2021-09-16T16:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S1-2560x1440-20cb7a83d1a2c1bb146f4affb99aedfc.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S2-1200x1600-763684808efe485a0b04677628847926.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S2-1200x1600-763684808efe485a0b04677628847926.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S2-1200x1600-763684808efe485a0b04677628847926.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S1-2560x1440-20cb7a83d1a2c1bb146f4affb99aedfc.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S2-1200x1600-763684808efe485a0b04677628847926.jpg",
				},
			],
			currentPrice: 2999,
			seller: {
				id: "o-9z65aawjyvtc2yfpv8ud48hjx6xhv9",
				name: "Anshar Studios",
			},
			productSlug: "gamedec",
			urlSlug: "gamedec-general-audience",
			url: null,
			tags: [
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
			],
			items: [
				{
					id: "b18e23cad8364d179f508329298b3494",
					namespace: "b8abdf9f9bc64ed6b4128a71fd47607f",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Anshar Publishing",
				},
				{
					key: "developerName",
					value: "Anshar Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "gamedec",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "gamedec",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2699,
					originalPrice: 2999,
					voucherDiscount: 0,
					discount: 300,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€29.99",
						discountPrice: "€26.99",
						intermediatePrice: "€26.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "685ec64eb3bc4725ada46447591b4b87",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-16T16:00:00.000Z",
		},
		{
			title: "Eastward",
			id: "98546a3a27c241c894b3049312cc0719",
			namespace: "656bd7c2e76b46d2a1b9b4f247e813f5",
			description:
				"Welcome to the charming world of Eastward - population declining! Explore a society on the brink of collapse. Discover delightful towns, strange creatures and even stranger people! Wield a trusty frying pan and mystic powers on an adventure into the unknown…",
			effectiveDate: "2021-09-16T07:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Eastward_Pixpil_S2_1200x1600-e884b36f4ecc325741503f9fcb0524de",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Eastward_Pixpil_S2_1200x1600-e884b36f4ecc325741503f9fcb0524de",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Eastward_Pixpil_S1_2560x1440-e15d4bc27966c4c282d8809a87838a3a",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Eastward_Pixpil_S2_1200x1600-e884b36f4ecc325741503f9fcb0524de",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Eastward_Pixpil_S1_2560x1440-e15d4bc27966c4c282d8809a87838a3a",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Eastward_Pixpil_S2_1200x1600-e884b36f4ecc325741503f9fcb0524de",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-6j7ccxetmselhp9nxwbfq9pszcytn4",
				name: "Chucklefish LTD",
			},
			productSlug: "eastward",
			urlSlug: "eastward",
			url: null,
			tags: [
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "fb532c4ea8684a7e871db73e3cf2821d",
					namespace: "656bd7c2e76b46d2a1b9b4f247e813f5",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "CN, HK, TW",
				},
				{
					key: "publisherName",
					value: "Chucklefish LTD",
				},
				{
					key: "developerName",
					value: "Pixpil",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "eastward",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "eastward",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-16T07:00:00.000Z",
		},
		{
			title: "Flat Heroes",
			id: "bccaf6e3cc7b4fc3857013d5ab844898",
			namespace: "b85566d19ccb4f19895b5897e1d381a9",
			description:
				"Dodge, jump, and dash your way through hundreds of terrifying geometric levels and epic bosses. Too tough? Bring your friends!",
			effectiveDate: "2021-09-15T22:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/a234dbd6227a4a9db5ff3cc94ddefe41/flat-heroes-offer-logo-1td5a.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt/0fbc5779-ffb9-4c82-ba09-2959e3bd56f6/flat-heroes-offer-32d70af1.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt/7bbe5d88-253c-4584-b195-ccd4703bc043/download-flat-heroes-offer-45db2c03.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt/b1670da4-3452-4d1a-9bcf-67bdbf3019c3/flat-heroes-offer-32d70af1.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt/5475a888-147e-4e02-baf4-13f2466e2a3c/download-flat-heroes-offer-45db2c03.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt/7bbe5d88-253c-4584-b195-ccd4703bc043/download-flat-heroes-offer-45db2c03.jpg",
				},
			],
			currentPrice: 999,
			seller: {
				id: "o-gywh7apk4dc8vpaj7pfleye7tknynk",
				name: "Parallel Circles",
			},
			productSlug: null,
			urlSlug: "3ad027f11ea34dd0b0aedbd0a89a043e",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1203",
				},
				{
					id: "1299",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
				{
					id: "1151",
				},
			],
			items: [
				{
					id: "f95bb5cd154f42ae8f8049732064f25d",
					namespace: "b85566d19ccb4f19895b5897e1d381a9",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "flat-heroes-fec628",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "flat-heroes-fec628",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Parallel Circles",
			publisherDisplayName: "Parallel Circles",
			price: {
				totalPrice: {
					discountPrice: 999,
					originalPrice: 999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€9.99",
						discountPrice: "€9.99",
						intermediatePrice: "€9.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-15T22:00:00.000Z",
		},
		{
			title: "Niche - a genetics survival game",
			id: "b5fd42e064484438b11cebb2991a9c2f",
			namespace: "de5dba249c30453f86061fe2dcbd5e82",
			description:
				"Niche - a genetics survival game is a turn-based strategy game combined with simulation and roguelike elements. Shape your species of animals based on real genetics. Keep them alive against all odds, such as predators, climate change and spreading sickness.",
			effectiveDate: "2021-09-15T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nicheageneticssurvivalgame_StrayFawnStudio_S2_1200x1600-c1d2a73f35131a38b5549bf565eb3ccf",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nicheageneticssurvivalgame_StrayFawnStudio_S2_1200x1600-c1d2a73f35131a38b5549bf565eb3ccf",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nicheageneticssurvivalgame_StrayFawnStudio_S1_2560x1440-f4fbf126b39b1bce710335c97400d1c8",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nicheageneticssurvivalgame_StrayFawnStudio_S2_1200x1600-c1d2a73f35131a38b5549bf565eb3ccf",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nicheageneticssurvivalgame_StrayFawnStudio_S1_2560x1440-f4fbf126b39b1bce710335c97400d1c8",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nicheageneticssurvivalgame_StrayFawnStudio_S2_1200x1600-c1d2a73f35131a38b5549bf565eb3ccf",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-wvlgbmu836u5z2g6rzhxphcv5fxez5",
				name: "Stray Fawn Studio",
			},
			productSlug: "niche-a-genetics-survival-game",
			urlSlug: "mercury-general-audience",
			url: null,
			tags: [
				{
					id: "1393",
				},
				{
					id: "18051",
				},
				{
					id: "1080",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "9987cf18ddf2406790de0a80e5452934",
					namespace: "de5dba249c30453f86061fe2dcbd5e82",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Stray Fawn Studio",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "niche-a-genetics-survival-game",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "niche-a-genetics-survival-game",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 749,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 750,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€7.49",
						intermediatePrice: "€7.49",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "3f94dbfe40d24b9986c22adbe7fc4023",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-15T15:00:00.000Z",
		},
		{
			title: "Timberborn",
			id: "1d309546149d4646a24b15b28eedb358",
			namespace: "3a1067df83654812b976101174e1904f",
			description:
				"Humans are long gone. Will your lumberpunk beavers do any better? A city-building game featuring ingenious animals, vertical architecture, river control, and deadly droughts. Contains high amounts of wood.",
			effectiveDate: "2021-09-15T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S2_1200x1600-35c32e6338fad3f20d2fad5d7b899f8d",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S2_1200x1600-35c32e6338fad3f20d2fad5d7b899f8d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S1_2560x1440-a789208464bc2d1fa33eb2e42c841ed7",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S2_1200x1600-35c32e6338fad3f20d2fad5d7b899f8d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S1_2560x1440-a789208464bc2d1fa33eb2e42c841ed7",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S2_1200x1600-35c32e6338fad3f20d2fad5d7b899f8d",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-vcy3rzdtqnpfgccjv53jv8zj2c5xb5",
				name: "Mechanistry",
			},
			productSlug: "timberborn",
			urlSlug: "timberborn",
			url: null,
			tags: [
				{
					id: "1146",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1310",
				},
				{
					id: "17470",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "dfddb0721723421987ad16d6eda6091d",
					namespace: "3a1067df83654812b976101174e1904f",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Mechanistry",
				},
				{
					key: "developerName",
					value: "Mechanistry",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "timberborn",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "timberborn",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-15T15:00:00.000Z",
		},
		{
			title: "Bud Spencer and Terence Hill - Slaps and Beans",
			id: "643b7a2210bb4f4f97d5c96b6af3995f",
			namespace: "08c03f2a2b794478a6b73c0a3e9b2b29",
			description:
				"Bud Spencer and Terence Hill in their first virtual adventure. Slaps And Beans is a co-operative or single player scrolling beat’ em up game with the addition of platform elements and mini-games in which you'll interpret the characters of Bud Spencer and Terence Hill",
			effectiveDate: "2021-09-09T22:00:00.000Z",
			keyImages: [
				{
					type: "ProductLogo",
					url: "https://cdn1.epicgames.com/spt-assets/d673b7db63224c71a99882c43284999a/bud-spencer-and-terence-hill--slaps-and-beans-offer-logo-1u3zc.png",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/spt-assets/d673b7db63224c71a99882c43284999a/bud-spencer-and-terence-hill--slaps-and-beans-offer-lrb8h.png",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/spt-assets/d673b7db63224c71a99882c43284999a/download-bud-spencer-and-terence-hill--slaps-and-beans-offer-x2myf.png",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/spt-assets/d673b7db63224c71a99882c43284999a/bud-spencer-and-terence-hill--slaps-and-beans-offer-1a0ph.png",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/spt-assets/d673b7db63224c71a99882c43284999a/download-bud-spencer-and-terence-hill--slaps-and-beans-offer-14twp.png",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/spt-assets/d673b7db63224c71a99882c43284999a/download-bud-spencer-and-terence-hill--slaps-and-beans-offer-x2myf.png",
				},
			],
			currentPrice: 1998,
			seller: {
				id: "o-7tqplb69989kcqn26fbbtkqzt4gz6k",
				name: "Trinity Team",
			},
			productSlug: null,
			urlSlug: "f5a692dafeb446b4a8ac539fbfc7732e",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1203",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "7be859c097704c0db47fe0600c8a1230",
					namespace: "08c03f2a2b794478a6b73c0a3e9b2b29",
				},
			],
			customAttributes: [
				{
					key: "autoGeneratedPrice",
					value: "false",
				},
			],
			categories: [
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "games",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "bud-spencer-and-terence-hill-slaps-and-beans-0bdb3b",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [
				{
					pageSlug: "bud-spencer-and-terence-hill-slaps-and-beans-0bdb3b",
					pageType: "productHome",
				},
			],
			developerDisplayName: "Trinity Team",
			publisherDisplayName: "Buddy Productions GmbH",
			price: {
				totalPrice: {
					discountPrice: 1998,
					originalPrice: 1998,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.98",
						discountPrice: "€19.98",
						intermediatePrice: "€19.98",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-09T22:00:00.000Z",
		},
		{
			title: "Terrain of Magical Expertise",
			id: "53dd1fe9545e4297943653d21afcd22b",
			namespace: "ac07533f051f4a718304dafb0e124128",
			description:
				"TOME – Terrain of Magical Expertise – is a game about a game! Take on the role of a White-Hat Hacker, battling your way through a turn-based RPG adventure with hundreds of unique enemies, doing anything it takes to achieve victory in the Campaign of Champions!",
			effectiveDate: "2021-09-09T17:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TerrainofMagicalExpertise_NEOCProductionsLLC_S2_1200x1600-3dc04e83b147976d29650bd269fdf5df",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TerrainofMagicalExpertise_NEOCProductionsLLC_S2_1200x1600-3dc04e83b147976d29650bd269fdf5df",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TerrainofMagicalExpertise_NEOCProductionsLLC_S2_1200x1600-3dc04e83b147976d29650bd269fdf5df",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TerrainofMagicalExpertise_NEOCProductionsLLC_S2_1200x1600-3dc04e83b147976d29650bd269fdf5df",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TerrainofMagicalExpertise_NEOCProductionsLLC_S1_2560x1440-71ae1e9242c04d193ddd101586d9fd8f",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TerrainofMagicalExpertise_NEOCProductionsLLC_S1_2560x1440-71ae1e9242c04d193ddd101586d9fd8f",
				},
			],
			currentPrice: 2499,
			seller: {
				id: "o-n4d8bf5e8fnr4kujuut9j6v4d29muc",
				name: "1C Online Games Ltd",
			},
			productSlug: "terrain-of-magical-expertise",
			urlSlug: "vega-general-audience",
			url: null,
			tags: [
				{
					id: "1395",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "9549",
				},
			],
			items: [
				{
					id: "158c422e47a04873be8d53993fd76eac",
					namespace: "ac07533f051f4a718304dafb0e124128",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "1C Online Games Ltd",
				},
				{
					key: "developerName",
					value: "1C Online Games Ltd",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "terrain-of-magical-expertise",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "terrain-of-magical-expertise",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 2499,
					originalPrice: 2499,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€24.99",
						discountPrice: "€24.99",
						intermediatePrice: "€24.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-09T17:00:00.000Z",
		},
		{
			title: "Dice Legacy",
			id: "73297e33f1a945f1bf56ee961746974f",
			namespace: "fc224bc11259446ab10c942201eb5926",
			description:
				"Dice Legacy is a dice-based survival city builder set on a mysterious ringworld.   Roll and use your dice to gather resources, expand and defend your settlement, survive the winter and interact with the strange inhabitants of this eerie world.",
			effectiveDate: "2021-09-09T16:00:00.000Z",
			keyImages: [
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/fc224bc11259446ab10c942201eb5926/offer/EGS_DiceLegacy_DESTINYbit_S1-2560x1440-0c40ad1169eb4c2fd2807fe9591cbbbb.jpg",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/fc224bc11259446ab10c942201eb5926/offer/EGS_DiceLegacy_DESTINYbit_S2-1200x1600-4d9a59b939eddfbc34f7d7fe28184a7d.jpg",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/fc224bc11259446ab10c942201eb5926/offer/EGS_DiceLegacy_DESTINYbit_S2-1200x1600-4d9a59b939eddfbc34f7d7fe28184a7d.jpg",
				},
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/fc224bc11259446ab10c942201eb5926/offer/EGS_DiceLegacy_DESTINYbit_S2-1200x1600-4d9a59b939eddfbc34f7d7fe28184a7d.jpg",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/fc224bc11259446ab10c942201eb5926/offer/EGS_DiceLegacy_DESTINYbit_S2-1200x1600-4d9a59b939eddfbc34f7d7fe28184a7d.jpg",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/fc224bc11259446ab10c942201eb5926/offer/EGS_DiceLegacy_DESTINYbit_S1-2560x1440-0c40ad1169eb4c2fd2807fe9591cbbbb.jpg",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-jskfz28ywm2l56px6h9rlxplaysrtl",
				name: "Koch Media",
			},
			productSlug: "dice-legacy",
			urlSlug: "dice-legacy",
			url: null,
			tags: [
				{
					id: "18051",
				},
				{
					id: "1146",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
				{
					id: "1263",
				},
			],
			items: [
				{
					id: "4f240f3ee77240d7b5df4ae4837b5ee0",
					namespace: "fc224bc11259446ab10c942201eb5926",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Ravenscourt",
				},
				{
					key: "developerName",
					value: "DESTINYbit",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "dice-legacy",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "dice-legacy",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1599,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 400,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€15.99",
						intermediatePrice: "€15.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "0a254023d4554fea99fb3739bdf65c7d",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-09T16:00:00.000Z",
		},
		{
			title: "Dishonored - Definitive Edition",
			id: "ecf4d2e87ea7445298c7471d8e9b405e",
			namespace: "766e1b59c32c447093add5efbc1a4858",
			description:
				"Experience the definitive Dishonored collection. This complete compilation includes Dishonored as well as all of its additional content - Dunwall City Trials, The Knife of Dunwall, The Brigmore Witches and Void Walker’s Arsenal.",
			effectiveDate: "2021-09-09T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S2_1200x1600-f5305c222f0397fd04ce309f6f0d486f",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S2_1200x1600-f5305c222f0397fd04ce309f6f0d486f",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S2_1200x1600-f5305c222f0397fd04ce309f6f0d486f",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S2_1200x1600-f5305c222f0397fd04ce309f6f0d486f",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-bthbhn6wd7fzj73v5p4436ucn3k37u",
				name: "Bethesda Softworks LLC",
			},
			productSlug: "dishonored-definitive-edition",
			urlSlug: "dishonored-definitive-edition",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "18051",
				},
				{
					id: "1333",
				},
				{
					id: "17493",
				},
				{
					id: "1336",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1084",
				},
			],
			items: [
				{
					id: "9582617ba4fb47ac85fe076b362b09ae",
					namespace: "766e1b59c32c447093add5efbc1a4858",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Bethesda Softworks",
				},
				{
					key: "developerName",
					value: "Arkane Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "dishonored-definitive-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "dishonored-definitive-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 999,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 1000,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€9.99",
						intermediatePrice: "€9.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "74778726bc6f4c199069428456b18606",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-09T15:00:00.000Z",
		},
		{
			title: "Prey",
			id: "ed17077691c541c19dc95e47fdd1cfd5",
			namespace: "6ea398b9c2244250a9177c0b8a69b5cd",
			description:
				"In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong.",
			effectiveDate: "2021-09-09T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S2_1200x1600-98e869dbf74a7db4857c4242c044272d",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S2_1200x1600-98e869dbf74a7db4857c4242c044272d",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S3_2560x1440-66103490180b56a8a132ae2487e18f2f",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S2_1200x1600-98e869dbf74a7db4857c4242c044272d",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S1_2560x1440-66103490180b56a8a132ae2487e18f2f",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S2_1200x1600-98e869dbf74a7db4857c4242c044272d",
				},
			],
			currentPrice: 3999,
			seller: {
				id: "o-bthbhn6wd7fzj73v5p4436ucn3k37u",
				name: "Bethesda Softworks LLC",
			},
			productSlug: "prey",
			urlSlug: "prey",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "18051",
				},
				{
					id: "17493",
				},
				{
					id: "1336",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1117",
				},
				{
					id: "1294",
				},
			],
			items: [
				{
					id: "0a353de9a150428c8e2e4b3887ee21ee",
					namespace: "6ea398b9c2244250a9177c0b8a69b5cd",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Bethesda Softworks",
				},
				{
					key: "developerName",
					value: "Arkane Studios",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "prey",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "prey",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 1999,
					originalPrice: 3999,
					voucherDiscount: 0,
					discount: 2000,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€39.99",
						discountPrice: "€19.99",
						intermediatePrice: "€19.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "4530de5f03bc4de3b3e2717dd2fb2e6a",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-09T15:00:00.000Z",
		},
		{
			title: "Dark Light",
			id: "f4e74c7571cc40f7809d6c3af0e18cd4",
			namespace: "69d28f650ce14cb8af5ca19212a4b4b8",
			description:
				"A Sci-fi 2D action-platformer, metroidvania, souls-like game. Explore the apocalypse cyberpunk world full of supernatural beings, some of them are only visible in the light source of your drones. Kill, gain, upgrade, get stronger in the dark world! ",
			effectiveDate: "2021-09-09T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S4_1200x1600-6fa5d35ab63d8ce3af855aa5525a638e",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S4_1200x1600-6fa5d35ab63d8ce3af855aa5525a638e",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S1_2560x1440-7da32129f6954bd8251c4c3c004e3f7b",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S4_1200x1600-6fa5d35ab63d8ce3af855aa5525a638e",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S1_2560x1440-7da32129f6954bd8251c4c3c004e3f7b",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DarkLight_MirariCoptyltd_S4_1200x1600-6fa5d35ab63d8ce3af855aa5525a638e",
				},
			],
			currentPrice: 1199,
			seller: {
				id: "o-62hseu4rhrj48v9lv7p8e4359jlwgn",
				name: "Mirari&Co.",
			},
			productSlug: "dark-light",
			urlSlug: "dark-light",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1218",
				},
				{
					id: "1123",
				},
				{
					id: "18051",
				},
				{
					id: "9547",
				},
				{
					id: "1132",
				},
				{
					id: "9549",
				},
				{
					id: "1263",
				},
				{
					id: "1266",
				},
				{
					id: "17493",
				},
				{
					id: "1370",
				},
				{
					id: "1310",
				},
				{
					id: "1151",
				},
				{
					id: "1247",
				},
				{
					id: "10719",
				},
			],
			items: [
				{
					id: "a20ef96e3ad4491da07098f78ec81f10",
					namespace: "69d28f650ce14cb8af5ca19212a4b4b8",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Mirari & Co.",
				},
				{
					key: "developerName",
					value: "Mirari & Co. Pty, Ltd.",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "dark-light",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "dark-light",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 959,
					originalPrice: 1199,
					voucherDiscount: 0,
					discount: 240,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€11.99",
						discountPrice: "€9.59",
						intermediatePrice: "€9.59",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "2c8042e4457b407f835f92a4b90c6646",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-09T15:00:00.000Z",
		},
		{
			title: "Wolfenstein: The Old Blood",
			id: "db93b3d741f04c1688d6768a467abc59",
			namespace: "511ba0dc05dd4a3caa39708bcc806cb8",
			description:
				"Wolfenstein®: The Old Blood is a standalone prequel to the critically acclaimed first-person action-adventure shooter, Wolfenstein®: The New Order. ",
			effectiveDate: "2021-09-09T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheOldBlood_MachineGames_S4_1200x1600-23a40cd1dccefeceb0c39b1f760bc79e",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheOldBlood_MachineGames_S4_1200x1600-23a40cd1dccefeceb0c39b1f760bc79e",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheOldBlood_MachineGames_S3_2560x1440-9164de484aa508e674aafe902e727911",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheOldBlood_MachineGames_S4_1200x1600-23a40cd1dccefeceb0c39b1f760bc79e",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheOldBlood_MachineGames_S3_2560x1440-9164de484aa508e674aafe902e727911",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheOldBlood_MachineGames_S4_1200x1600-23a40cd1dccefeceb0c39b1f760bc79e",
				},
			],
			currentPrice: 1999,
			seller: {
				id: "o-bthbhn6wd7fzj73v5p4436ucn3k37u",
				name: "Bethesda Softworks LLC",
			},
			productSlug: "wolfenstein-the-old-blood",
			urlSlug: "wolfenstein-the-old-blood",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1185",
				},
				{
					id: "18051",
				},
				{
					id: "17493",
				},
				{
					id: "1210",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
				{
					id: "1294",
				},
			],
			items: [
				{
					id: "06525411e4f94af2a6527f4f614935cf",
					namespace: "511ba0dc05dd4a3caa39708bcc806cb8",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "KR",
				},
				{
					key: "publisherName",
					value: "Bethesda Softworks",
				},
				{
					key: "developerName",
					value: "Machine Games",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "wolfenstein-the-old-blood",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "wolfenstein-the-old-blood",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 799,
					originalPrice: 1999,
					voucherDiscount: 0,
					discount: 1200,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€19.99",
						discountPrice: "€7.99",
						intermediatePrice: "€7.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "40b026fefd0c4b028ddad48e04176de7",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-09T15:00:00.000Z",
		},
		{
			title: "Sheltered",
			id: "011ab6d40b80485bb23fbef4362aceb2",
			namespace: "3b550d92911244558770b68c5a812a5d",
			description:
				"Sheltered is a deep and emotional survival management game. You take on the role of protecting four family members who, after a global apocalypse, have found their way to a deserted shelter. ",
			effectiveDate: "2021-09-09T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S4_1200x1600-58640350f28283adb5f1340114ad9aaa",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S4_1200x1600-58640350f28283adb5f1340114ad9aaa",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S3_2560x1440-c24e2bf4318dc189a15e7f659c1377b0",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S4_1200x1600-58640350f28283adb5f1340114ad9aaa",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S3_2560x1440-c24e2bf4318dc189a15e7f659c1377b0",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S4_1200x1600-58640350f28283adb5f1340114ad9aaa",
				},
			],
			currentPrice: 1499,
			seller: {
				id: "o-uvtztrtfjdn3xgrwyhbuwwb5z42mbv",
				name: "Team17 Digital Ltd",
			},
			productSlug: "sheltered",
			urlSlug: "sheltered",
			url: null,
			tags: [
				{
					id: "18051",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "1115",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "55cd8a75baac4d23a4a8aec7caf70b43",
					namespace: "3b550d92911244558770b68c5a812a5d",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "Team17",
				},
				{
					key: "developerName",
					value: "Unicube",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "sheltered",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "sheltered",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: "Unicube",
			publisherDisplayName: "Team17",
			price: {
				totalPrice: {
					discountPrice: 374,
					originalPrice: 1499,
					voucherDiscount: 0,
					discount: 1125,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€14.99",
						discountPrice: "€3.74",
						intermediatePrice: "€3.74",
					},
				},
				lineOffers: [
					{
						appliedRules: [
							{
								id: "66bf1cf22147495cb3682b9ce18268de",
								endDate: "2021-11-01T15:00:00.000Z",
								discountSetting: {
									discountType: "PERCENTAGE",
								},
							},
						],
					},
				],
			},
			releaseDate: "2021-09-09T15:00:00.000Z",
		},
		{
			title: "Nioh: The Complete Edition",
			id: "3bc256d2117b4415b25a2c7d756392f4",
			namespace: "3622b6ddc5c849b1826085d5fe492eae",
			description:
				"Ready to die? Experience a brutal action game from Team NINJA and Koei Tecmo Games. In the age of samurai, a lone traveler must fight his way through the vicious warriors and supernatural Yokai that infest the land in order to find that which he seeks. ",
			effectiveDate: "2021-09-09T15:00:00.000Z",
			keyImages: [
				{
					type: "CodeRedemption_340x440",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-4723c89d30b680dafa5cf9f279a6cfb7",
				},
				{
					type: "DieselStoreFrontTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-4723c89d30b680dafa5cf9f279a6cfb7",
				},
				{
					type: "DieselStoreFrontWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S1_2560x1440-2a6124e6033545b37abd715282f8ba98",
				},
				{
					type: "OfferImageTall",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-4723c89d30b680dafa5cf9f279a6cfb7",
				},
				{
					type: "OfferImageWide",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S1_2560x1440-2a6124e6033545b37abd715282f8ba98",
				},
				{
					type: "Thumbnail",
					url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-4723c89d30b680dafa5cf9f279a6cfb7",
				},
			],
			currentPrice: 4999,
			seller: {
				id: "o-rgggesxx3asqs8jp24x29zl24c789w",
				name: "Koei Tecmo",
			},
			productSlug: "nioh-the-complete-edition",
			urlSlug: "nioh-the-complete-edition",
			url: null,
			tags: [
				{
					id: "1216",
				},
				{
					id: "1264",
				},
				{
					id: "1203",
				},
				{
					id: "17493",
				},
				{
					id: "1367",
				},
				{
					id: "1370",
				},
				{
					id: "9547",
				},
			],
			items: [
				{
					id: "a2084af544bc494f851c9ace984f15fb",
					namespace: "3622b6ddc5c849b1826085d5fe492eae",
				},
			],
			customAttributes: [
				{
					key: "com.epicgames.app.blacklist",
					value: "[]",
				},
				{
					key: "publisherName",
					value: "KOEI TECMO GAMES CO., LTD.",
				},
				{
					key: "com.epicgames.app.productSlug",
					value: "nioh-the-complete-edition",
				},
			],
			categories: [
				{
					path: "games",
				},
				{
					path: "games/edition/base",
				},
				{
					path: "games/edition",
				},
				{
					path: "applications",
				},
			],
			catalogNs: {
				mappings: [
					{
						pageSlug: "nioh-the-complete-edition",
						pageType: "productHome",
					},
				],
			},
			offerMappings: [],
			developerDisplayName: null,
			publisherDisplayName: null,
			price: {
				totalPrice: {
					discountPrice: 4999,
					originalPrice: 4999,
					voucherDiscount: 0,
					discount: 0,
					currencyCode: "EUR",
					currencyInfo: {
						decimals: 2,
					},
					fmtPrice: {
						originalPrice: "€49.99",
						discountPrice: "€49.99",
						intermediatePrice: "€49.99",
					},
				},
				lineOffers: [
					{
						appliedRules: [],
					},
				],
			},
			releaseDate: "2021-09-09T15:00:00.000Z",
		},
	],
};

export default StoreData;
