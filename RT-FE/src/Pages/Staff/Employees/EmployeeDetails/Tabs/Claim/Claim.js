import { Card } from "react-bootstrap";

export default function Claim() {
  return (
    <Card className="mt-4">
      <Card.Body>
        <div class="tab-pane" id="claims1" role="claim1">
          <table
            id="datatable"
            class="table table-bordered dt-responsive nowrap w-100"
          >
            <thead>
              <tr>
                <th>Claim Type</th>
                <th>Claim Year</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
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

          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label for="formrow-firstname-input" class="form-label">
                  Claim Type
                </label>{" "}
                <br />
                <select
                  class="form-control select2-templating "
                  style={{ width: "100%" }}
                >
                  <option value="10">10</option>
                  <option value="Demo">Demo</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="formrow-firstname-input" class="form-label">
                  Year
                </label>{" "}
                <br />
                <select
                  class="form-control select2-templating "
                  style={{ width: "100%" }}
                >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="">Amount</label>
                <input type="text" class="form-control" placeholder="Amount" />
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
