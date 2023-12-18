import { useEffect, useState } from "react";
import AddNew from "./AddNew";
import { CommonDataTable } from "../../Components/Common/commonDataTable";
import { fileManagerHeader } from "../../Components/Common/table.constants";
import { getAllDepartmentFiles } from "../../Utility/API/fileManager";
import { toast } from "react-toastify";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import { fileUrl } from "../../Config/Config";

export default function Tables() {
  const [isOpen, setIsOpen] = useState(false);
  const [allDepartmentFiles, setAllDepartmentFiles] = useState([]);
  const [fileIndex, setFileIndex] = useState(null);

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    const data = await getAllDepartmentFiles();
    if (data.status == 200) setAllDepartmentFiles(data.data);
    else toast.error("something went wrong");
  };

  const showDepartmentFile = (data, type, index) => {
    if (type !== "delete") window.open(`${fileUrl}/${data.fileName}`);
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
                    <div class='col-md-6 mb-3' style={{ textAlign: "right" }}>
                      <button
                        class='btn btn-primary text-right'
                        onClick={() => setIsOpen(true)}
                      >
                        Add New
                      </button>
                    </div>
                  </div>

                  <p class='card-title-desc' style={{ textAlign: "right" }}>
                    <button class='btn btn-info text-right'>CSV</button>
                    <button class='btn btn-info text-right'>Excel</button>
                    <button class='btn btn-info text-right'>PDF</button>
                    <button class='btn btn-info text-right'>Print</button>
                  </p>

                  <CommonDataTable
                    tableHeaders={fileManagerHeader}
                    data={allDepartmentFiles}
                    actionButtons
                    deleteButton
                    viewButton
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
                  {isOpen && (
                    <AddNew
                      show={isOpen}
                      setShow={setIsOpen}
                      callback={(data) =>
                        setAllDepartmentFiles([...allDepartmentFiles, data])
                      }
                    />
                  )}
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
        </div>

        <div
          class='tab-pane fade'
          id='v-pills-profile'
          role='tabpanel'
          aria-labelledby='v-pills-profile-tab'
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique consequuntur maxime, natus ea dolorum animi soluta numquam
            voluptate unde ipsam veritatis provident quaerat et dicta sit
            aliquam, minima consectetur.
          </p>
        </div>
      </div>

      {/* <!-- end row --> */}
    </div>
  );
}
