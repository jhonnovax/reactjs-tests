function getRdmNmb(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
const agentList = [
	"Jacob",
	"John",
	"Michael",
	"Linda",
	"Juan",
	"Maria",
	"Carlos",
];
const addressList = [
	"4455 Burke Street, Burnaby",
	"4355 Smith, Burnaby",
	"4355 Granville, Burnaby",
	"4355 Jackson, Burnaby",
];

const reportData = Array.from({ length: 30 }).map((item, index) => {
	return {
	id: index + 1,
	listingDate: new Date(
		getRdmNmb(2023, 2024),
		getRdmNmb(0, 11),
		getRdmNmb(1, 28),
	).toDateString(),
	agent: agentList[getRdmNmb(0, agentList.length - 1)],
	property: addressList[getRdmNmb(0, addressList.length - 1)],
	price: getRdmNmb(125000, 800000),
	views: getRdmNmb(75, 670),
	};
});

export default function ReportAgents() {
	return (
		<div class="container p-4">
			<div class="card mb-4">
				<h5 class="card-header">Filters</h5>
				<div class="card-body">
					<div class="mb-3 row">
						<label for="staticEmail" class="col-sm-2 col-form-label">
							Agent
						</label>
						<div class="col-sm-10">
							<select type="text" class="form-control" id="staticEmail">
							<option>Select</option>
							</select>
						</div>
					</div>
					<div class="mb-3 row">
						<label for="inputPassword" class="col-sm-2 col-form-label">
							Dates
						</label>
						<div class="col-sm-5">
							<input type="date" class="form-control" id="inputPassword" />
						</div>
						<div class="col-sm-5">
							<input type="date" class="form-control" id="inputPassword" />
						</div>
					</div>
				</div>
			</div>

			<div class="d-flex mb-3 justify-content-end">
				<button class="btn btn-primary me-2" type="button">
					Descargar en Excel
				</button>
				<button class="btn btn-primary" type="button">
					Descargar en PDF
				</button>
			</div>

			<table class="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Listing Date</th>
					<th scope="col">Agent</th>
					<th scope="col">Property</th>
					<th scope="col">Price</th>
					<th scope="col">Views</th>
					</tr>
				</thead>
				<tbody>
					{reportData.map((report) => (
						<tr key={report.id}>
							<th scope="row">{report.id}</th>
							<td>{report.listingDate}</td>
							<td>{report.agent}</td>
							<td>{report.property}</td>
							<td>${report.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
							<td>{report.views}</td>
						</tr>
					))}
				</tbody>	
			</table>
		</div>
	);
}