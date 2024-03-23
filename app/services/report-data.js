import { 
	getRdmNmb, getRdmDate, getRdmAgent, getRdmAddressProperty, calculateCommission, 
	caculateTaxes, getAgentFee
} from './report-service';

let reportData = [];

export const clientList = [
	"Noah Anderson",
	"John Bergeron",
	"William Evans",
	"Emma Cloutier",
	"Sophia Campbell",
	"Theodore Kennedy",
	"Amelia Hall",
	'Liam Bouchard',
	'Olivia Boucher',
	'Leo Cameron',
	'Isabella Chan',
];

export const agentList = [
	"Noah Anderson",
	"John Bergeron",
	"William Evans",
	"Emma Cloutier",
	"Sophia Campbell",
	"Theodore Kennedy",
	"Amelia Hall",
	'Liam Bouchard',
	'Olivia Boucher',
	'Leo Cameron',
	'Isabella Chan',
];

export const addressList = [
	"1917 West 4th Ave",
	"101 Broadway",
	"667 3rd St W, North Vancouver",
	"7125 Curragh Ave",
	"7184 120 St, Surrey",
	"211 Columbia St, New Westminster",
	"102 8th Ave, Vancouver",
	"10 5th Ave, Vancouver",
	"234 Island Highway",
	"1917 West 4th Ave",
	"Site 11 Shoreline Drive"
];

export const getReportData = () => {
	if (!reportData.length) {
		reportData = Array.from({ length: 30 })
		.map(() => {
			const soldPrice = getRdmNmb(150000, 1200000);
			const commission = calculateCommission(soldPrice);
			const taxes = caculateTaxes(soldPrice);
			const agentFee = getAgentFee(soldPrice);

			return {
				date: getRdmDate(),
				propertyStatus: getRdmNmb(0, 1),
				paidStatus: getRdmNmb(0, 1),
				agent: getRdmAgent(),
				agentFee: agentFee,
				propertyAddress: getRdmAddressProperty(),
				propertyViews: getRdmNmb(55, 850),
				soldPrice: soldPrice,
				commission: commission,
				taxes: taxes,
				profit: agentFee,
				total: (soldPrice + commission) - taxes
			};
		})
		.sort((a, b) => {
			return a.date - b.date;
		});
	}

	return reportData;
}