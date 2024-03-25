import { formatCurrency } from "../services/report-service";
import { getReportData } from "../services/report-data"; 

export default function ReportAgents() {
	const reportData = getReportData();
	const reportByAgent = reportData.reduce((accum, item) => {
		let agentRecord = accum.find(a => a.agent === item.agent);

		if (!agentRecord) {
			accum.push({
				agent: item.agent,
				soldProperties: 1,
				totalCommission: item.commission,
				totalSales: item.soldPrice,
				totalProfit: item.agentFee + 400,
			});
		} else {
			accum = accum.map(agentRecord => {
				if (agentRecord.agent === agentRecord.agent) {
					return {
						...agentRecord,
						soldProperties: agentRecord.soldProperties + 1,
						totalCommission: agentRecord.totalCommission + item.commission,
						totalSales: agentRecord.totalSales + item.soldPrice,
						totalProfit: agentRecord.totalProfit + 400
					};
				} else {
					return agentRecord;
				}
			})
		}

		return accum;
	}, []);
	const totalProfit = reportByAgent.reduce((a, b) => {
		return a + b.totalProfit;
	}, 0);

	return (
		<div class="container p-4">
			<h1 class="mb-4">Report Sales Profit</h1>
			<div class="card mb-4">
				<h5 class="card-header">Filters</h5>
				<div class="card-body">
					<div class="mb-3 row">
						<label class="col-2 col-form-label">
							Dates
						</label>
						<div class="col-5">
							<input type="date" class="form-control" id="inputPassword" />
						</div>
						<div class="col-5">
							<input type="date" class="form-control" id="inputPassword" />
						</div>
					</div>
				</div>
			</div>

			<div class="d-flex mb-3 justify-content-end">
				<button class="btn btn-primary me-2" type="button">
					Download Excel
				</button>
				<button class="btn btn-primary" type="button">
					Download PDF
				</button>
			</div>

			<div class="alert alert-success" role="alert">
				The Total Profit for the selected date range is <b>{formatCurrency(totalProfit)}</b>
			</div>

			<table class="table">
				<thead>
					<tr>
					<th >#</th>
					<th>Agent</th>
					<th># Sold Properties</th>
					<th class="bg-warning-subtle text-right">Total Commission</th>
					<th class="bg-success-subtle text-right">Total Profit (Agent Fee)</th>
					</tr>
				</thead>
				<tbody>
					{reportByAgent.map((item, itemIndex) => (
						<tr key={itemIndex}>
							<th scope="row">{itemIndex + 1}</th>
							<td>{item.agent}</td>
							<td>{item.soldProperties}</td>
							<td className="bg-warning-subtle text-right">{formatCurrency(item.totalCommission)}</td>
							<td className="bg-success-subtle text-right">{formatCurrency(item.totalProfit)}</td>
						</tr>
					))}
				</tbody>	
			</table>
		</div>
	);
}