import { useState } from "react";
import { Card } from "react-bootstrap";

export default function Profile() {
  const [img, setImg] = useState(null);
  return (
    <Card className="mt-4">
      {" "}
      <Card.Body>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="">Browse</label>
            <input
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              class="form-control"
            />
            <small>Upload files only: gif,png,jpg,jpeg</small>
          </div>
        </div>
        <div className="m-2">
          <img
            alt="profile"
            height={300}
            width={200}
            src={URL.createObjectURL(img)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
