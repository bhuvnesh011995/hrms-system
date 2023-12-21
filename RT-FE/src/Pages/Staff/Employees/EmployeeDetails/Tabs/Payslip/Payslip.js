import { Card } from "react-bootstrap";

export default function Payslip() {
  return (
    <Card className="mt-4">
      <Card.Body>
        <div class="tab-pane" id="payslip1" role="payslips">
          <table
            id="datatable"
            class="table table-bordered dt-responsive nowrap w-100"
          >
            <thead>
              <tr>
                <th>Not Payable</th>
                <th>Salary Month</th>
                <th>Payroll Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td>
                  <a class="add">
                    <i class="far fa-save"></i>
                  </a>
                  <a class="edit">
                    <i class="fas fa-edit"></i>
                  </a>
                  <a class="delete">
                    <i class="fas fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
}
