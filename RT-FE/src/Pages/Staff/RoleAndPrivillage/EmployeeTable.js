import MaterialReactTable from "material-react-table";

import { useContext, useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { deleteRole, getAllRole } from "../../../utility/role/role";
import { useAuth } from "../../../Context/AuthContext";
import AddNewRole from "./AddNewRole";
import { FormattedMessage } from "react-intl";

export default function Empl() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { permissions } = useAuth();
  useEffect(() => {
    getRoles();
  }, []);

  async function getRoles() {
    try {
      setIsLoading(true);

      let response = await getAllRole();
      if (response.status === 200) {
        if (response.data?.success) {
          setData(response.data.roles);
          setIsLoading(false);
        }
      } else if (response.status === 201) {
        setData([]);
        setIsLoading(false);
      } else if (
        response.status === 400 ||
        response.status === 401 ||
        response.status === 402 ||
        response.status === 404
      ) {
        setData([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleterole(id) {
    let res = await deleteRole(id);

    if (res.status != 201) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      getRoles();
    }
  }

  const [data, setData] = useState([]);
  let columns = useMemo(
    () => [
      {
        accessorKey: "id",
        Header: () => <FormattedMessage id='id' defaultMessage={"id"} />,
        header: "ID",
      },
      {
        accessorKey: "name",
        Header: () => <FormattedMessage id='name' defaultMessage={"name"} />,
        header: "Role Name",
      },
      {
        accessorFn: (row) => row.original.createdAt,
        Header: () => (
          <FormattedMessage id='Created_At' defaultMessage={"Created At"} />
        ),
        header: "Created At",
      },
    ],
    [],
  );

  return (
    <div class='row'>
      <div class='col-md-12'>
        <div class='card'>
          <div class='card-body'>
            <div class='table-wrapper'>
              <div class='table-title'>
                <div class='row'>
                  <div class='col-sm-6'>
                    <h2></h2>
                  </div>
                  {(permissions?.includes("All") ||
                    permissions?.includes("add2")) && (
                    <div class='col-sm-6 text-end'>
                      <button
                        onClick={() => setIsOpen(true)}
                        type='button'
                        class='btn btn-primary'
                      >
                        <i class='fa fa-plus'></i> Add New
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* table */}
              <MaterialReactTable
                data={data}
                columns={columns}
                state={{ isLoading: isLoading }}
                enableRowActions
                positionActionsColumn='last'
                enableRowNumbers
                rowNumberMode='static'
                renderRowActions={({ row, table }) => (
                  <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
                    {(permissions?.includes("All") ||
                      permissions?.includes("update2")) && (
                      <IconButton
                        color='secondary'
                        onClick={() => {
                          table.setEditingRow(row);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                    {(permissions?.includes("All") ||
                      permissions?.includes("delete2")) && (
                      <IconButton
                        color='error'
                        onClick={() => {
                          deleterole(row.original.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                )}
              />
            </div>
            {error && (
              <span>
                <i className='bx bx-error-alt me-2 bg-danger text-light'>
                  {" "}
                  error occured
                </i>
              </span>
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AddNewRole getRoles={getRoles} show={isOpen} setShow={setIsOpen} />
      ) : null}
    </div>
  );
}
