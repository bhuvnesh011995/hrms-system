import MaterialReactTable from "material-react-table";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { authContext } from "../../../Context/AuthContext";
import AddNewRole from "./AddNewRole";
import { deleteRole, getAllRole } from "../../../Utility/API/role";
import { FormattedMessage } from "react-intl";

export default function RoleTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { permissions } = useContext(authContext);
  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = useCallback(async () => {
    try {
      setIsLoading(true);

      let response = await getAllRole();

      if (response.status === 200 && response.data.success) {
        setData(response.data.roles);
        setIsLoading(false);
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
  }, []);

  const deleterole = useCallback(async (id) => {
    let res = await deleteRole(id);

    if (res.status != 204) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      getRoles();
    }
  }, []);

  const [data, setData] = useState([]);
  let columns = useMemo(
    () => [
      {
        accessorKey: "_id",
        Header: () => <FormattedMessage id='ID' defaultMessage={"ID"} />,
        header: "ID",
      },
      {
        accessorKey: "name",
        Header: () => (
          <FormattedMessage id='Role_Name' defaultMessage={"Role Name"} />
        ),
        header: "Role Name",
      },
      {
        accessorFn: (row) =>
          row.createdAt?.slice(0, 10).split("-").reverse().join("/"),
        id: "createdAt",
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
                  <div class='col-sm-6 text-end'>
                    <button
                      onClick={() => setIsOpen(true)}
                      type='button'
                      class='btn btn-primary'
                    >
                      <i class='fa fa-plus'></i> Add New
                    </button>
                  </div>
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
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        table.setEditingRow(row);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color='error'
                      onClick={() => {
                        deleterole(row.original.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
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
