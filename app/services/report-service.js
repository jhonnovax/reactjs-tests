import { agentList, addressList } from './report-data';

export const getRdmNmb = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
}

export const getRdmDate = () => {
	return new Date(
		2024,
		2,
		getRdmNmb(1, 30),
	).getTime();
};

export const getRdmAgent = () => {
	return agentList[getRdmNmb(0, agentList.length - 1)];
};

export const getRdmAddressProperty = () => {
	return addressList[getRdmNmb(0, addressList.length - 1)];
}

export const formatDate = (timestamp) => {
	return new Date(timestamp).toLocaleDateString('en-CA', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});
}

export const formatCurrency = (value) => {
	return new Intl.NumberFormat('en-CA', {
		style: 'currency',
		currency: 'CAD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(value);
}

export const calculateCommission = (soldPrice) => {
	const firstCommissionValue = 100000
	const commisionForFirst100 = firstCommissionValue * 0.08;
	const commisionForRemaningPrice = ((soldPrice - firstCommissionValue) * 0.03);

	return (commisionForFirst100 + commisionForRemaningPrice);
}

export const caculateTaxes = (soldPrice) => {
	const GST_TAX = 0.5;

	return soldPrice * GST_TAX;
}

export const getAgentFee = () => {
	const FLAT_FEE = 1000;
	
	return FLAT_FEE;
}
