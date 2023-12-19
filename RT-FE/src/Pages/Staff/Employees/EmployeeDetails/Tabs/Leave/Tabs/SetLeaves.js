export default function SetLeaves() {
  return (
    <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-home3"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <table
          id="datatable"
          class="table table-bordered dt-responsive nowrap w-100"
        >
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Year</th>
              <th>No Of Leave</th>
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
                {" "}
                Leave Type{" "}
              </label>{" "}
              <br />
              <select
                class="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="ML">Maternity Leave</option>
                <option value="UL">Unpaid Leave</option>
                <option value="BL">Birthday Leave</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                {" "}
                Year{" "}
              </label>{" "}
              <br />
              <select
                class="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label for="">No of Days</label>
              <input type="text" class="form-control" placeholder="" />
            </div>
          </div>
        </div>
        <button class="btn btn-primary w-25">Save</button>
      </div>
    </div>
  );
}
