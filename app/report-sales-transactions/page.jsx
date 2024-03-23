import { formatCurrency, formatDate } from "../services/report-service";
import { getReportData } from "../services/report-data"; 

export default function ReportAgents() {
	const reportData = getReportData();

	return (
		<div class="container p-4">
			<h1 class="mb-4">Report Sales Transactions</h1>
			<div class="card mb-4">
				<h5 class="card-header">Filters</h5>
				<div class="card-body">
					<div class="mb-3 row">
						<label class="col-1 col-form-label">
							Dates
						</label>
						<div class="col-11 row pe-0">
							<div class="col-6">
								<input type="date" class="form-control" id="inputPassword" />
							</div>
							<div class="col-6 pe-0">
								<input type="date" class="form-control" id="inputPassword" />
							</div>
						</div>
					</div>

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
								Agent
							</label>
							<div class="col-10">
								<select type="text" class="form-control" id="staticEmail">
								<option>Select</option>
								</select>
							</div>
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
					<th scope="col">Sale Date</th>
					<th scope="col">Status</th>
					<th scope="col">Agent</th>
					<th scope="col">Sale Price</th>
					<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody>
					{reportData.map((report, reportIndex) => (
						<tr key={reportIndex} className={`${report.paidStatus === 0 ? "table-success" : ""}`}>
							<th scope="row">{reportIndex + 1}</th>
							<td>{formatDate(report.date)}</td>  
							<td>{
								report.paidStatus 
									? <span class="badge text-bg-warning">Pending</span>
									: <span class="badge text-bg-success">Paid</span>
							}</td>
							<td>{report.agent}</td>
							<td>{formatCurrency(report.soldPrice)}</td>
							<td>{formatCurrency(report.total)}</td>
						</tr>
					))}
				</tbody>	
			</table>
		</div>
	);
}