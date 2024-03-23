import { getRdmNmb, getRdmDate, getRdmAgent, getRdmAddressProperty, formatCurrency } from "../services/report-service";

const reportData =  Array.from({ length: 30 })
	.map(() => {
		let amount = getRdmNmb(150000, 1200000);
		let taxes = amount * 0.05;

		return {
			date: getRdmDate(),
			status: getRdmNmb(0, 1),
			agent: getRdmAgent(),
			property: getRdmAddressProperty(),
			price: amount,
			taxes: taxes,
			total: amount + taxes
		};
	})
	.sort((a, b) => {
		return a.date - b.date;
	});

export default function ReportAgents() {
	return (
		<div class="container p-4">
			<h1 class="mb-4">Report Sales Transactions</h1>
			<div class="card mb-4">
				<h5 class="card-header">Filters</h5>
				<div class="card-body">
					<div class="mb-3 row">
						<div className="col-6 row">
							<label class="col-2 col-form-label">
								Status
							</label>
							<div class="col-10">
								<select type="text" class="form-control" id="staticEmail">
								<option>Select</option>
								</select>
							</div>
						</div>
						<div className="col-6 row">
							<label class="col-2 col-form-label">
								Client
							</label>
							<div class="col-10">
								<select type="text" class="form-control" id="staticEmail">
								<option>Select</option>
								</select>
							</div>
						</div>
					</div>
					<div class="mb-3 row">
						<label class="col-1 col-form-label">
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

			<table class="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Date</th>
					<th scope="col">Status</th>
					<th scope="col">Client</th>
					<th scope="col">Property</th>
					<th scope="col">Amount</th>
					<th scope="col">Taxes</th>
					<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody>
					{reportData.map((report, reportIndex) => (
						<tr key={reportIndex}>
							<th scope="row">{reportIndex + 1}</th>
							<td>{new Date(report.date).toDateString()}</td>
							<td>{
								report.status 
									? <span class="badge text-bg-warning">Pending</span>
									: <span class="badge text-bg-success">Paid</span>
							}</td>
							<td>{report.agent}</td>
							<td>{report.property}</td>
							<td>{formatCurrency(report.price)}</td>
							<td>{formatCurrency(report.taxes)}</td>
							<td>{formatCurrency(report.total)}</td>
						</tr>
					))}
				</tbody>	
			</table>
		</div>
	);
}