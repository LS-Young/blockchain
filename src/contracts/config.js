export const CONTRACT_ADDRESS = "0xc285E0dE0A6E2AeA894F2aC4b7576543E4544a57";
export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_card_number",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_card_price",
				"type": "uint256"
			}
		],
		"name": "abort_sale_card",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_card_number",
				"type": "string"
			}
		],
		"name": "add_card",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_card_number",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_owner_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_card_price",
				"type": "uint256"
			}
		],
		"name": "buy_card",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "check_new_user",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clean_all_data",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddr",
				"type": "address"
			}
		],
		"name": "delete_user",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_card_number",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "sale_card",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_card_number",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_owner_address",
				"type": "address"
			}
		],
		"name": "card_price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllUsers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "string[]",
						"name": "cards",
						"type": "string[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "card",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "price",
								"type": "uint256"
							}
						],
						"internalType": "struct UserDataContract.Sale_cards[]",
						"name": "sale_cards",
						"type": "tuple[]"
					}
				],
				"internalType": "struct UserDataContract.UserData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserData",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "card",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct UserDataContract.Sale_cards[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sale_cards_list",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner_addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "card",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_card",
				"type": "string"
			}
		],
		"name": "see_sale_card_list",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner_addr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "card",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct UserDataContract.Sale_cards_list[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UserCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


// export const CONTRACT_ADDRESS = "0x9870584D6d8ca73580347391Ad57E577641654C6";
// export const CONTRACT_ABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "x",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "set",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "get",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ];

