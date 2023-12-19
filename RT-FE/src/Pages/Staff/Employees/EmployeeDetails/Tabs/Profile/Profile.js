import { Card } from "react-bootstrap";

export default function Profile() {
  return (
    <Card className="mt-4">
      {" "}
      <Card.Body>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="">Browse</label>
            <input type="file" class="form-control" />
            <small>Upload files only: gif,png,jpg,jpeg</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
