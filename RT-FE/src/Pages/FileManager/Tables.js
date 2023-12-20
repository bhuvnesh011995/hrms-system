import { useState } from "react";
import AddNew from "./AddNew";
import { CommonDataTable } from "../../Components/Common/commonDataTable";
import { fileManagerHeader } from "../../Components/Common/table.constants";
import { deleteDepartmentFile } from "../../Utility/API/fileManager";
import { toast } from "react-toastify";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import { fileUrl } from "../../Config/Config";
import CommonDeleteModal from "../../Components/Common/commonDeleteModal";
import { useAuth } from "../../Context/AuthContext";

export default function Tables({ filesData, setFilesData }) {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [fileData, setFileData] = useState(null);

  const showDepartmentFile = (data, type, index) => {
    setFileData(data);
    if (type !== "delete") window.open(`${fileUrl}/${data.fileName}`);
    else if (type == "delete") setDeleteModal(true);
  };

  const deleteDepartmentFileManager = async () => {
    toast.dismiss();
    const deleteFileResponse = await deleteDepartmentFile(fileData._id);
    if (deleteFileResponse.status == 200) {
      const filterDepartmentFiles = filesData.filter(
        (departmentFile) => departmentFile._id != fileData._id,
      );
      setFilesData([...filterDepartmentFiles]);
      toast.success(deleteFileResponse.data.message);
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div class='col-md-9'>
      <div class='tab-content text-muted mt-4 mt-md-0' id='v-pills-tabContent'>
        <div
          class='tab-pane fade show active'
          id='v-pills-home'
          role='tabpanel'
          aria-labelledby='v-pills-home-tab'
        >
          <div class='row'>
            <div class='col-12'>
              <div class='card'>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-md-6 mb-3'>
                      <h4>List All Files</h4>
                    </div>
                    {(permissions.includes("All") ||
                      permissions.includes("add70")) && (
                      <div class='col-md-6 mb-3' style={{ textAlign: "right" }}>
                        <button
                          class='btn btn-primary text-right'
                          onClick={() => setIsOpen(true)}
                        >
                          Add New
                        </button>
                      </div>
                    )}
                  </div>

                  <p class='card-title-desc' style={{ textAlign: "right" }}>
                    <button class='btn btn-info text-right'>CSV</button>
                    <button class='btn btn-info text-right'>Excel</button>
                    <button class='btn btn-info text-right'>PDF</button>
                    <button class='btn btn-info text-right'>Print</button>
                  </p>

                  <CommonDataTable
                    tableHeaders={fileManagerHeader}
                    data={filesData}
                    actionButtons
                    deleteButton={
                      permissions.includes("All") ||
                      permissions.includes("delete70")
                    }
                    viewButton={
                      permissions.includes("All") ||
                      permissions.includes("view70")
                    }
                    callback={(data, type, index) =>
                      showDepartmentFile(data, type, index)
                    }
                    changeSelectedColumnDataDesign={["created_at"]}
                    changedDataCellColumn={(header, accessor) => {
                      if (accessor == "created_at")
                        return {
                          accessorKey: accessor,
                          header: header,
                          Header: (
                            <FormattedMessage
                              id={header}
                              defaultMessage={header}
                            />
                          ),
                          Cell: ({ row }) => (
                            <div>
                              {" "}
                              {moment(row.original.created_at).format(
                                "YYYY-DD-MM",
                              )}
                            </div>
                          ),
                        };
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <AddNew
          show={isOpen}
          setShow={setIsOpen}
          callback={(data) => setFilesData([...filesData, data])}
        />
      )}
      {deleteModal && (
        <CommonDeleteModal
          header={"Department File"}
          show={deleteModal}
          setShow={setDeleteModal}
          message={`do you really want to delete ${fileData.departmentName} department file.`}
          deleteFunction={deleteDepartmentFileManager}
        />
      )}
    </div>
  );
}
