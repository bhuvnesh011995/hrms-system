export default function UpdateSalery() {
  return (
    <div class="tab-pane fade show active">
      <table
        id="datatable"
        class="table table-bordered dt-responsive nowrap w-100"
      >
        <thead>
          <tr>
            <th>Payslip</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monthly Payslip</td>
            <td>S$1254</td>

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
  );
}
